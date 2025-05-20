/**
 * DateSelectionStep Component
 * 
 * The second step in the booking flow where users select a date and time for their appointment.
 * Implements sacred geometry principles for calendar layout and time slot selection.
 */

import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Box } from '../../../design-system/components/layout/Box';
import { Flex } from '../../../design-system/components/layout/Flex';
import { Grid } from '../../../design-system/components/layout/Grid';
import { Text } from '../../../design-system/components/typography/Text';
import { Heading } from '../../../design-system/components/typography/Heading';
import { Button } from '../../../design-system/components/button/Button';
import { ErrorMessage } from '../../../design-system/components/feedback/ErrorMessage';
import { useBooking } from '../../../context/BookingContext';
import { validateDateSelection } from '../validation/dateSelection.schema';
import { PHI, SACRED_SPACING, SACRED_RADIUS } from '../../../constants/sacred-geometry';
import { getFibonacciByIndex } from '../../../utils/getFibonacciByIndex';
import { BookingTimeSlot, DateSelectionStepProps } from '../../../types/booking.types';

// Styled components
const Calendar = styled(Box)`
  margin-bottom: ${SACRED_SPACING.lg}px;
`;

const CalendarHeader = styled(Flex)`
  margin-bottom: ${SACRED_SPACING.sm}px;
  padding: ${SACRED_SPACING.xs}px 0;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const CalendarGrid = styled(Grid)`
  grid-template-columns: repeat(7, 1fr);
  gap: ${SACRED_SPACING.xs}px;
`;

const CalendarDay = styled.div<{ $isSelectable?: boolean; $isSelected?: boolean; $isToday?: boolean; $isOtherMonth?: boolean }>`
  padding: ${SACRED_SPACING.xs}px;
  border-radius: ${SACRED_RADIUS.sm}px;
  border: 1px solid ${props => props.$isSelected 
    ? props.theme.colors.primary[500] 
    : props.theme.colors.border.light};
  background-color: ${props => {
    if (props.$isSelected) return props.theme.colors.primary[50];
    if (props.$isToday) return props.theme.colors.background[200];
    if (props.$isOtherMonth) return props.theme.colors.background[100];
    return '#FFFFFF'; // Use a safe fallback value
  }};
  opacity: ${props => (!props.$isSelectable || props.$isOtherMonth) ? 0.5 : 1};
  cursor: ${props => props.$isSelectable ? 'pointer' : 'not-allowed'};
  text-align: center;
  
  &:hover {
    ${props => props.$isSelectable && `
      border-color: ${props.theme.colors.primary[400]};
      box-shadow: 0 ${SACRED_SPACING.xs}px ${SACRED_SPACING.sm}px rgba(0, 0, 0, 0.05);
    `}
  }
`;

const TimeSlotGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${SACRED_SPACING.sm}px;
  margin-top: ${SACRED_SPACING.md}px;
`;

const TimeSlot = styled.div<{ $isSelected?: boolean; $isAvailable?: boolean }>`
  padding: ${SACRED_SPACING.sm}px;
  border-radius: ${SACRED_RADIUS.sm}px;
  border: 1px solid ${props => props.$isSelected 
    ? props.theme.colors.primary[500] 
    : props.theme.colors.border.light};
  background-color: ${props => props.$isSelected 
    ? props.theme.colors.primary[50] 
    : '#FFFFFF'}; // Use a safe fallback value
  opacity: ${props => !props.$isAvailable ? 0.5 : 1};
  cursor: ${props => props.$isAvailable ? 'pointer' : 'not-allowed'};
  text-align: center;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    ${props => props.$isAvailable && `
      border-color: ${props.theme.colors.primary[400]};
      box-shadow: 0 ${SACRED_SPACING.xs}px ${SACRED_SPACING.sm}px rgba(0, 0, 0, 0.05);
    `}
  }
`;

// Wrapper for the ErrorMessage component
const ErrorMessageWrapper = styled.div`
  margin-bottom: ${SACRED_SPACING.md}px;
`;

// Create a fixed version of the section heading
const SectionHeading = styled.h3`
  margin-top: ${SACRED_SPACING.lg}px;
  margin-bottom: ${SACRED_SPACING.sm}px;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

// Wrapper for the bottom navigation
const NavigationWrapper = styled(Flex)`
  margin-top: ${SACRED_SPACING.xl}px;
`;

// Notice text when no time slots are available
const NoTimeSlotsNotice = styled(Text)`
  margin-top: ${SACRED_SPACING.md}px;
  text-align: center;
  font-style: italic;
`;

/**
 * DateSelectionStep Component
 */
export const DateSelectionStep: React.FC<DateSelectionStepProps> = ({ 
  onComplete,
  onBack,
  isLoading = false,
  className,
  initialData,
  selectedService
}) => {
  const { state, selectDate, selectTimeSlot, fetchAvailableTimeSlots } = useBooking();
  const [validationError, setValidationError] = useState('');
  
  // Current date for calendar
  const [currentMonth, setCurrentMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  
  // Generate calendar days
  const calendarDays = React.useMemo(() => {
    const days = [];
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Get first day of month
    const firstDay = new Date(year, month, 1);
    // Get the day of week (0-6, 0 being Sunday)
    const startingDayOfWeek = firstDay.getDay();
    
    // Add days from previous month
    const prevMonthDays = startingDayOfWeek;
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    for (let i = daysInPrevMonth - prevMonthDays + 1; i <= daysInPrevMonth; i++) {
      days.push({
        date: new Date(year, month - 1, i),
        isCurrentMonth: false,
        isSelectable: false
      });
    }
    
    // Add days of current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isToday = date.getTime() === today.getTime();
      const isSelectable = date.getTime() >= today.getTime();
      
      days.push({
        date,
        isCurrentMonth: true,
        isToday,
        isSelectable
      });
    }
    
    // Add days from next month
    const totalCalendarDays = 6 * 7; // 6 weeks
    const nextMonthDays = totalCalendarDays - days.length;
    
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        isSelectable: false
      });
    }
    
    return days;
  }, [currentMonth]);
  
  // Get time slots for selected date
  const [timeSlots, setTimeSlots] = React.useState<BookingTimeSlot[]>([]);
  
  // Fetch time slots when date changes
  React.useEffect(() => {
    if (!state.selectedDate) return;
    
    // Helper function to create mock time slots data
    const getTimeSlots = async (): Promise<BookingTimeSlot[]> => {
      // Simulate an API call
      const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
      
      return [
        { 
          id: '1', 
          startTime: `09:00`,
          endTime: `10:00`,
          duration: 60,
          available: true 
        },
        { 
          id: '2', 
          startTime: `10:00`,
          endTime: `11:00`,
          duration: 60,
          available: true 
        },
        { 
          id: '3', 
          startTime: `11:00`,
          endTime: `12:00`,
          duration: 60,
          available: false 
        },
        { 
          id: '4', 
          startTime: `13:00`,
          endTime: `14:00`,
          duration: 60,
          available: true 
        },
        { 
          id: '5', 
          startTime: `14:00`,
          endTime: `15:00`,
          duration: 60,
          available: true 
        },
        { 
          id: '6', 
          startTime: `15:00`,
          endTime: `16:00`,
          duration: 60,
          available: true 
        },
        { 
          id: '7', 
          startTime: `16:00`,
          endTime: `17:00`,
          duration: 60,
          available: true 
        },
      ];
    };
    
    const loadTimeSlots = async () => {
      try {
        const slots = await getTimeSlots();
        setTimeSlots(slots);
      } catch (error) {
        console.error('Failed to load time slots:', error);
        setTimeSlots([]);
      }
    };
    
    loadTimeSlots();
  }, [state.selectedDate]);
  
  // Handle date selection
  const handleDateSelect = (date: Date) => {
    selectDate(date.toISOString().split('T')[0]);
    setValidationError('');
  };
  
  // Handle time slot selection
  const handleTimeSlotSelect = (slot: BookingTimeSlot) => {
    selectTimeSlot(slot);
    setValidationError('');
  };
  
  // Handle continue button click
  const handleContinue = () => {
    try {
      // If validation is not defined, or date is not selected, don't proceed
      if (!state.selectedDate || !state.selectedTimeSlot) {
        setValidationError('Please select a date and time to continue');
        return;
      }
      
      // Validate selected date and time
      validateDateSelection({
        date: state.selectedDate,
        timeSlotId: state.selectedTimeSlot.id
      });
      
      // If validation passes, proceed to next step
      if (onComplete) {
        onComplete({ 
          selectedDate: state.selectedDate, 
          selectedTimeSlot: state.selectedTimeSlot 
        });
      }
    } catch (error: any) {
      setValidationError(error.message || 'Please select a valid date and time');
    }
  };
  
  // Calendar navigation
  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => {
      const year = prevMonth.getFullYear();
      const month = prevMonth.getMonth();
      return new Date(year, month - 1, 1);
    });
  };
  
  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => {
      const year = prevMonth.getFullYear();
      const month = prevMonth.getMonth();
      return new Date(year, month + 1, 1);
    });
  };
  
  // Get month and year display for calendar header
  const getMonthYearDisplay = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${monthNames[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;
  };
  
  // Format time display
  const formatTimeString = (timeString: string): string => {
    // Convert 24-hour to 12-hour format
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}${minutes !== '00' ? `:${minutes}` : ''} ${period}`;
  };
  
  return (
    <Box className={className}>
      <Heading as="h2" variant="h2" textAlign="center" marginBottom={`${SACRED_SPACING.md}px`}>
        Select Date & Time
      </Heading>
      
      <Text textAlign="center" marginBottom={`${SACRED_SPACING.lg}px`}>
        Choose an available date and time for your {selectedService?.name || 'appointment'}.
      </Text>
      
      {validationError && (
        <ErrorMessageWrapper>
          <ErrorMessage>{validationError}</ErrorMessage>
        </ErrorMessageWrapper>
      )}
      
      {/* Calendar Section */}
      <Calendar>
        <CalendarHeader justifyContent="space-between" alignItems="center">
          <Button 
            variant="ghost"
            size="sm"
            onClick={goToPreviousMonth}
            aria-label="Previous month"
          >
            &lt; Prev
          </Button>
          
          <Heading as="h3" variant="h3">
            {getMonthYearDisplay()}
          </Heading>
          
          <Button 
            variant="ghost"
            size="sm"
            onClick={goToNextMonth}
            aria-label="Next month"
          >
            Next &gt;
          </Button>
        </CalendarHeader>
        
        {/* Weekday headers */}
        <CalendarGrid marginBottom={`${SACRED_SPACING.xxs}px`}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <Text 
              key={day} 
              textAlign="center" 
              weight="medium" 
              color="text.secondary"
              padding={`${SACRED_SPACING.xs}px`}
            >
              {day}
            </Text>
          ))}
        </CalendarGrid>
        
        {/* Calendar days */}
        <CalendarGrid>
          {calendarDays.map((day, index) => {
            const isSelectedDate = state.selectedDate === day.date.toISOString().split('T')[0];
            
            return (
              <CalendarDay
                key={index}
                $isSelectable={day.isSelectable}
                $isSelected={isSelectedDate}
                $isToday={day.isToday}
                $isOtherMonth={!day.isCurrentMonth}
                onClick={() => day.isSelectable && handleDateSelect(day.date)}
                role={day.isSelectable ? "button" : "presentation"}
                aria-label={day.date.toLocaleDateString()}
                aria-pressed={isSelectedDate}
                tabIndex={day.isSelectable ? 0 : -1}
                data-testid={`calendar-day-${day.date.getDate()}`}
              >
                {day.date.getDate()}
              </CalendarDay>
            );
          })}
        </CalendarGrid>
      </Calendar>
      
      {/* Time Slot Section */}
      <Box>
        <SectionHeading>
          {state.selectedDate 
            ? `Available Times for ${new Date(state.selectedDate).toLocaleDateString()}`
            : 'Select a date to see available times'}
        </SectionHeading>
        
        {state.selectedDate ? (
          timeSlots.length > 0 ? (
            <TimeSlotGrid>
              {timeSlots.map(slot => (
                <TimeSlot
                  key={slot.id}
                  $isSelected={state.selectedTimeSlot?.id === slot.id}
                  $isAvailable={slot.available}
                  onClick={() => slot.available && handleTimeSlotSelect(slot)}
                  role={slot.available ? "button" : "presentation"}
                  aria-label={`Time slot at ${formatTimeString(slot.startTime)}`}
                  aria-pressed={state.selectedTimeSlot?.id === slot.id}
                  tabIndex={slot.available ? 0 : -1}
                  data-testid={`time-slot-${slot.id}`}
                >
                  <Text weight={state.selectedTimeSlot?.id === slot.id ? "bold" : "regular"}>
                    {formatTimeString(slot.startTime)}
                  </Text>
                </TimeSlot>
              ))}
            </TimeSlotGrid>
          ) : (
            <NoTimeSlotsNotice>
              No available time slots for this date. Please select another date.
            </NoTimeSlotsNotice>
          )
        ) : (
          <NoTimeSlotsNotice>
            Please select a date to view available time slots.
          </NoTimeSlotsNotice>
        )}
      </Box>
      
      {/* Navigation Buttons */}
      <NavigationWrapper justifyContent="space-between">
        <Button 
          variant="outline" 
          onClick={onBack}
          aria-label="Go back to previous step"
          data-testid="back-button"
        >
          Back
        </Button>
        
        <Button 
          variant="primary" 
          onClick={handleContinue}
          disabled={!state.selectedDate || !state.selectedTimeSlot || isLoading}
          isLoading={isLoading}
          aria-label="Continue to next step"
          data-testid="continue-button"
        >
          Continue
        </Button>
      </NavigationWrapper>
    </Box>
  );
};

export default DateSelectionStep; 
















