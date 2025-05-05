# Booking System Edge Cases and Fixes

This document outlines common edge cases identified during testing and provides detailed fixes for each issue.

## Mobile & Tablet Edge Cases

### 1. Calendar Rendering on Small Screens

**Issue:** Calendar component overflows on smaller screens, requiring horizontal scrolling.

**Fix:** Implement responsive sizing for the calendar in `DateSelectionStep.tsx`:

```tsx
// In DateSelectionStep.tsx
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { SACRED_NUMBER } from '../../../constants/sacred-geometry';

// Inside component
const isMobile = useMediaQuery('(max-width: 768px)');

// Update calendar rendering
<Calendar 
  mode={isMobile ? 'compact' : 'full'}
  cellSize={isMobile ? SACRED_NUMBER.FIBONACCI_5 * 5 : SACRED_NUMBER.FIBONACCI_6 * 5}
  // ...other props
/>
```

### 2. Soft Keyboard Pushing Content

**Issue:** On mobile devices, when the soft keyboard appears, it pushes the form content up and out of view.

**Fix:** Add a scroll-into-view effect when focusing inputs on `ClientInfoStep.tsx`:

```tsx
// In ClientInfoStep.tsx
import { useEffect, useRef } from 'react';

// Inside component
const inputRefs = {
  firstName: useRef<HTMLInputElement>(null),
  lastName: useRef<HTMLInputElement>(null),
  email: useRef<HTMLInputElement>(null),
  phone: useRef<HTMLInputElement>(null)
};

useEffect(() => {
  const handleFocus = (event: Event) => {
    // Delay scroll to allow keyboard to appear
    setTimeout(() => {
      const element = event.target as HTMLElement;
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }, 300);
  };

  // Add focus listeners to all input refs
  Object.values(inputRefs).forEach(ref => {
    const input = ref.current;
    if (input) {
      input.addEventListener('focus', handleFocus);
    }
  });

  // Cleanup
  return () => {
    Object.values(inputRefs).forEach(ref => {
      const input = ref.current;
      if (input) {
        input.removeEventListener('focus', handleFocus);
      }
    });
  };
}, []);
```

### 3. iPad Portrait/Landscape Transitions

**Issue:** When switching between portrait and landscape on iPad, the booking interface doesn't properly adjust layout.

**Fix:** Force re-render on orientation change in `BookingInterface.tsx`:

```tsx
// In BookingInterface.tsx
import { useState, useEffect } from 'react';

// Inside component
const [orientation, setOrientation] = useState(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');

useEffect(() => {
  const handleResize = () => {
    const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    if (newOrientation !== orientation) {
      setOrientation(newOrientation);
    }
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [orientation]);

// Use orientation as a key to force re-render when it changes
<Box key={orientation} className="booking-interface-container">
  {/* interface content */}
</Box>
```

### 4. Touch Target Size

**Issue:** Some touch targets (buttons, checkboxes) are too small on mobile devices, making them difficult to tap accurately.

**Fix:** Update CSS for interactive elements to meet minimum touch target size requirements:

```css
/* In styles/touch-targets.css */
@media (max-width: 768px) {
  .booking-button,
  .time-slot-button,
  .form-checkbox,
  .form-radio {
    min-height: 44px;
    min-width: 44px;
    padding: 12px;
  }
  
  .service-selection-card {
    padding: 16px;
  }
  
  /* Add spacing between targets to prevent accidental taps */
  .time-slot-list button {
    margin-bottom: 8px;
  }
}
```

## Validation Edge Cases

### 1. Date/Time Validation Across Timezones

**Issue:** Date validation fails when users are in different timezones because date comparison doesn't account for timezone differences.

**Fix:** Update date validation in `dateSelection.schema.ts` to compare only date portions:

```typescript
// In dateSelection.schema.ts
import { z } from 'zod';

export const dateSelectionSchema = z.object({
  selectedDate: z.string()
    .refine((date) => {
      // Extract only date portion for comparison
      const selectedDate = new Date(date).setHours(0, 0, 0, 0);
      const today = new Date().setHours(0, 0, 0, 0);
      
      return selectedDate >= today;
    }, { message: "Please select a date in the future" })
    .refine((date) => {
      const selectedDate = new Date(date).setHours(0, 0, 0, 0);
      const threeMonthsLater = new Date();
      threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);
      threeMonthsLater.setHours(0, 0, 0, 0);
      
      return selectedDate <= threeMonthsLater.getTime();
    }, { message: "Please select a date within the next 3 months" }),
  
  // Rest of schema
});
```

### 2. Phone Number Validation for International Formats

**Issue:** Phone validation only accepts US formats, failing for international numbers.

**Fix:** Update phone validation regex in `clientInfo.schema.ts`:

```typescript
// In clientInfo.schema.ts
import { z } from 'zod';

export const clientInfoSchema = z.object({
  // Other fields
  phone: z.string()
    .min(7, "Phone number must have at least 7 digits")
    .max(15, "Phone number is too long")
    .refine((phone) => {
      // More permissive regex that accepts international formats
      // Allows +, spaces, dashes, and parentheses
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
      return phoneRegex.test(phone);
    }, { message: "Please enter a valid phone number" }),
  // Other fields
});
```

### 3. Form Validation State Persistence

**Issue:** When users navigate between steps, validation errors are lost, requiring re-validation when returning to a step.

**Fix:** Store validation errors in the booking context:

```typescript
// In BookingContext.tsx
// Add to BookingState interface
interface BookingState {
  // ...existing state
  validationErrors: {
    [BookingStepId.SERVICE_SELECTION]?: z.ZodError;
    [BookingStepId.DATE_SELECTION]?: z.ZodError;
    [BookingStepId.CLIENT_INFORMATION]?: z.ZodError;
    [BookingStepId.CONFIRMATION]?: z.ZodError;
  };
}

// Add action types
enum ActionType {
  // ...existing types
  SET_VALIDATION_ERROR = 'SET_VALIDATION_ERROR',
  CLEAR_VALIDATION_ERROR = 'CLEAR_VALIDATION_ERROR'
}

// Update reducer
function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    // ...existing cases
    case ActionType.SET_VALIDATION_ERROR:
      return {
        ...state,
        validationErrors: {
          ...state.validationErrors,
          [action.payload.step]: action.payload.error
        }
      };
    case ActionType.CLEAR_VALIDATION_ERROR:
      const updatedErrors = {...state.validationErrors};
      delete updatedErrors[action.payload.step];
      return {
        ...state,
        validationErrors: updatedErrors
      };
    // ...other cases
  }
}
```

## Accessibility Improvements

### 1. Focus Management with Transitions

**Issue:** When navigating between steps, focus is lost, making keyboard navigation difficult.

**Fix:** Add focus management in `BookingNavControls.tsx`:

```tsx
// In BookingNavControls.tsx
import { useEffect, useRef } from 'react';

// Inside component
const nextButtonRef = useRef<HTMLButtonElement>(null);
const backButtonRef = useRef<HTMLButtonElement>(null);

// Focus appropriate button when step changes
useEffect(() => {
  // When moving to a new step, focus first interactive element
  const focusableElements = document.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length > 0) {
    (focusableElements[0] as HTMLElement).focus();
  }
}, [currentStep]);
```

### 2. Screen Reader Announcements for Time Slot Selection

**Issue:** Screen readers do not announce when time slots are loaded or when a time slot is selected.

**Fix:** Add ARIA live regions to `TimeSlotList.tsx`:

```tsx
// In TimeSlotList.tsx
import { useState, useEffect } from 'react';

// Inside component
const [announcement, setAnnouncement] = useState('');

useEffect(() => {
  if (timeSlots.length > 0) {
    setAnnouncement(`${timeSlots.length} time slots available for ${selectedDate}`);
  } else if (isLoading) {
    setAnnouncement('Loading available time slots...');
  } else {
    setAnnouncement('No time slots available for the selected date');
  }
}, [timeSlots, isLoading, selectedDate]);

// In the return JSX
<>
  <div aria-live="polite" className="sr-only">
    {announcement}
  </div>
  
  {selectedTimeSlot && (
    <div aria-live="polite" className="sr-only">
      Selected time slot: {formatTime(selectedTimeSlot)}
    </div>
  )}
  
  {/* Rest of the component */}
</>
```

### 3. Reduced Motion Support

**Issue:** Animations during step transitions can cause issues for users with vestibular disorders.

**Fix:** Add support for the `prefers-reduced-motion` media query in `animations.ts`:

```typescript
// In animations.ts
export const getTransitionProps = () => {
  // Check if user prefers reduced motion
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Use minimal or no animation when reduced motion is preferred
  if (prefersReducedMotion) {
    return {
      duration: SACRED_NUMBER.FIBONACCI_4 * 10, // Shorter duration
      easing: 'linear',
      delay: 0
    };
  }
  
  // Standard animation properties using sacred numbers
  return {
    duration: SACRED_NUMBER.FIBONACCI_6 * 10,
    easing: 'cubic-bezier(0.618, 0, 0.382, 1)', // Golden ratio based easing
    delay: SACRED_NUMBER.FIBONACCI_3 * 10
  };
};
```

## Performance Optimization

### 1. Calendar Rendering Optimization

**Issue:** The calendar component re-renders excessively, causing performance issues on lower-end devices.

**Fix:** Optimize calendar rendering with `React.memo` and `useMemo` in `Calendar.tsx`:

```tsx
// In Calendar.tsx
import React, { useMemo } from 'react';

// Optimize the day cell component
const DayCell = React.memo(({ 
  day, 
  isSelected, 
  isDisabled, 
  onClick 
}: DayCellProps) => {
  // Cell implementation
});

// Inside Calendar component
const Calendar = ({ selectedDate, availableDates, onSelectDate, ...props }) => {
  // Use memoization for expensive calculations
  const calendarDays = useMemo(() => {
    return generateCalendarDays(selectedDate, availableDates);
  }, [selectedDate, availableDates]);
  
  // Rest of the component
};

export default React.memo(Calendar);
```

### 2. Lazy Load Step Components

**Issue:** All booking step components load at once, increasing initial load time.

**Fix:** Implement lazy loading for step components in `BookingInterface.tsx`:

```tsx
// In BookingInterface.tsx
import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '../../design-system/components/feedback/LoadingSpinner';

// Lazy load step components
const ServiceSelectionStep = lazy(() => import('./steps/ServiceSelectionStep'));
const DateSelectionStep = lazy(() => import('./steps/DateSelectionStep'));
const ClientInfoStep = lazy(() => import('./steps/ClientInfoStep'));
const ConfirmationStep = lazy(() => import('./steps/ConfirmationStep'));

// Inside render function
<Suspense fallback={<LoadingSpinner size="large" />}>
  {currentStep === BookingStepId.SERVICE_SELECTION && <ServiceSelectionStep />}
  {currentStep === BookingStepId.DATE_SELECTION && <DateSelectionStep />}
  {currentStep === BookingStepId.CLIENT_INFORMATION && <ClientInfoStep />}
  {currentStep === BookingStepId.CONFIRMATION && <ConfirmationStep />}
</Suspense>
```

### 3. Debounce API Calls

**Issue:** Rapid date/time selection causes excessive API calls.

**Fix:** Implement debounced API calls in `BookingContext.tsx`:

```typescript
// In BookingContext.tsx
import { useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

// Inside BookingProvider
const debouncedFetchAvailableDates = useCallback(
  debounce((serviceId: string) => {
    // Actual fetch implementation
    fetchAvailableDatesImpl(serviceId);
  }, SACRED_NUMBER.FIBONACCI_5 * 10), // 50ms delay based on sacred numbers
  []
);

const fetchAvailableDates = (serviceId: string) => {
  // Set loading state immediately
  dispatch({ 
    type: ActionType.SET_LOADING, 
    payload: { key: 'isLoadingDates', value: true } 
  });
  
  // Call debounced function
  debouncedFetchAvailableDates(serviceId);
};
```

## Browser Compatibility Issues

### 1. Safari Date Input Handling

**Issue:** Safari handles date inputs differently, causing validation issues.

**Fix:** Normalize date formats in `DateSelectionStep.tsx`:

```tsx
// In DateSelectionStep.tsx
const handleDateChange = (date: Date | null) => {
  if (!date) return;
  
  // Normalize date format to ISO string without time
  const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    .toISOString().split('T')[0];
  
  setSelectedDate(normalizedDate);
  // Rest of the handler
};
```

### 2. Touch Event Handling for Older iOS

**Issue:** Some older iOS versions have inconsistent touch event behavior with the calendar component.

**Fix:** Add specific touch event handling in `Calendar.tsx`:

```tsx
// In Calendar.tsx
import { useEffect, useRef } from 'react';

// Inside Day component
const cellRef = useRef<HTMLButtonElement>(null);

useEffect(() => {
  const element = cellRef.current;
  if (!element) return;
  
  // Touch event handler for iOS
  const handleTouchStart = (e: TouchEvent) => {
    // Prevent default only for disabled dates to allow scrolling
    if (isDisabled) {
      e.preventDefault();
    }
  };
  
  element.addEventListener('touchstart', handleTouchStart, { passive: false });
  
  return () => {
    element.removeEventListener('touchstart', handleTouchStart);
  };
}, [isDisabled]);

// In render
<button 
  ref={cellRef}
  className={cellClassName}
  disabled={isDisabled}
  onClick={handleClick}
  {...otherProps}
>
  {day.getDate()}
</button>
```

These fixes address the most common edge cases encountered during testing and will improve the reliability of the booking system across different devices, browsers, and user scenarios. By implementing these changes, we'll provide a better experience for all users, especially those using assistive technologies or mobile devices. 