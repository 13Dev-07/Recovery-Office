import * as React from 'react';;
import { Box, Flex, Grid, Stack, VStack } from '@design-system/components/layout/Box';

import { Text } from '@design-system/components/typography/Text';
import { Calendar } from '@design-system/components/form/Calendar';
import { TimeSlotList } from '../TimeSlotList';
import { useBooking } from '@context/BookingContext';
import { MobileCalendarModal } from '../MobileCalendarModal';
import { format, isSameDay, startOfDay } from 'date-fns';
import { useBreakpointValue } from '@hooks/useBreakpointValue';
import { SACRED_SPACING, PHI } from '@constants/sacred-geometry';
import { Button } from '@design-system/components/button/Button';
import { LoadingOverlay } from '@design-system/components/feedback/LoadingOverlay';
import { ErrorDisplay } from '@design-system/components/feedback/ErrorDisplay';
import { useBookingStepValidation } from '@hooks/useBookingStepValidation';
import { BookingStepId } from '@types/booking.types';
import { z } from 'zod';
import { dateSelectionSchema } from '@components/booking/validation/dateSelection.schema';
import { BotanicalIcon } from '@design-system/botanical/BotanicalIcon';
import { VisuallyHidden } from '@design-system/components/utils/VisuallyHidden';

interface DateSelectionStepProps {
  isCalendarOnly?: boolean; // When true, only renders the calendar portion
  isTimeSelectionOnly?: boolean; // When true, only renders the time selection portion
}

/**
 * DateSelectionStep Component
 * 
 * Handles date and time slot selection for the booking process
 * Supports tablet-specific rendering by splitting into calendar and time selection views
 * Implements responsive design with mobile-specific calendar modal
 * Ensures proper accessibility with ARIA attributes and keyboard navigation
 */
export const DateSelectionStep: React.FC<DateSelectionStepProps> = ({ 
  isCalendarOnly = false,
  isTimeSelectionOnly = false 
}) => {
  const { 
    state, 
    fetchAvailableDates, 
    fetchAvailableTimeSlots,
    selectDate,
    selectTimeSlot,
    isResourceLoading,
    hasApiError,
    getApiErrorForResource
  } = useBooking();
  
  // Get breakpoint to determine which view to show
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
  
  // Local state
  const [isCalendarModalOpen, setCalendarModalOpen] = React.useState(false);
  const [announcementText, setAnnouncementText] = useState<string>('');
  
  // Get data from context state
  const { selectedService, selectedDate, selectedTimeSlot } = state;
  
  // Validation
  const { validateField, errors, resetErrors } = useBookingStepValidation(
    BookingStepId.DATE_SELECTION,
    dateSelectionSchema
  );
  
  // Check loading states
  const isLoadingDates = isResourceLoading('dates');
  const isLoadingTimeSlots = isResourceLoading('timeSlots');
  
  // Get errors
  const datesError = getApiErrorForResource('dates');
  const timeSlotsError = getApiErrorForResource('timeSlots');
  
  // Load available dates when component mounts or when service changes
  React.useEffect(() => {
    if (selectedService?.id) {
      fetchAvailableDates('', '', selectedService.id);
    }
  }, [selectedService?.id, fetchAvailableDates]);
  
  // Load time slots when date changes
  React.useEffect(() => {
    if (selectedDate && selectedService?.id) {
      fetchAvailableTimeSlots(selectedDate, selectedService.id);
    }
  }, [selectedDate, selectedService?.id, fetchAvailableTimeSlots]);
  
  // Handle date selection
  const handleDateSelect = (newDate: Date) => {
    const formattedDate = startOfDay(newDate).toISOString();
    
    // Update date in context and reset time slot
    selectDate(formattedDate);
    
    // Validate selected date
    validateField('selectedDate', formattedDate);
    
    // Close mobile modal if open
    setCalendarModalOpen(false);
    
    // Announce date selection to screen readers
    const dateAnnouncement = `Date selected: ${format(newDate, 'EEEE, MMMM d, yyyy')}`;
    setAnnouncementText(dateAnnouncement);
  };
  
  // Handle time slot selection
  const handleTimeSlotSelect = (id: string) => {
    // Find the selected time slot
    const timeSlot = state.availableTimeSlots?.find(slot => slot.id === id);
    
    if (timeSlot) {
      // Create BookingTimeSlot from API TimeSlot
      const bookingTimeSlot = {
        id: timeSlot.id,
        startTime: timeSlot.startTime,
        endTime: timeSlot.endTime || '',
        duration: timeSlot.duration || 0,
        available: true
      };
      
      // Update time slot in context
      selectTimeSlot(bookingTimeSlot);
      
      // Validate selected time slot
      validateField('selectedTimeSlot', id);
      
      // Announce to screen readers
      const timeAnnouncement = `Time selected: ${timeSlot.startTime}`;
      setAnnouncementText(timeAnnouncement);
    }
  };
  
  // Format a text representation of the selected date and time
  const getFormattedDateTime = () => {
    if (!selectedDate) return '';
    
    const date = new Date(selectedDate);
    const dateStr = format(date, 'EEEE, MMMM d, yyyy');
    
    if (!selectedTimeSlot || !state.availableTimeSlots?.length) return dateStr;
    
    return `${dateStr} at ${selectedTimeSlot.startTime}`;
  };
  
  // Handle retry for API errors
  const handleRetry = () => {
    resetErrors();
    if (selectedService?.id) {
      fetchAvailableDates('', '', selectedService.id, true);
      if (selectedDate) {
        fetchAvailableTimeSlots(selectedDate, selectedService.id, true);
      }
    }
  };
  
  // Renders the calendar view
  const renderCalendarView = () => (
    <Box position="relative">
      {isLoadingDates && <LoadingOverlay isOpen={true} message="Loading available dates..." />}
      
      {hasApiError() && datesError ? (
        <ErrorDisplay
          title="Unable to load available dates"
          message={datesError}
          actionItems={[{ label: "Try Again", onClick: handleRetry, primary: true }]}
        />
      ) : (
        <>
          {isMobile ? (
            <Box>
              <Flex 
                alignItems="center" 
                justifyContent="space-between" 
                mb={SACRED_SPACING.sm}
              >
                <Box>
                  <Heading as="h3" fontfontSize="md" mb={2}>
                    Select Date
                  </Heading>
                  {selectedDate && (
                    <Text 
                      color="primary.600" 
                      fontWeight="semibold"
                      aria-live="polite"
                    >
                      {format(new Date(selectedDate), 'EEEE, MMMM d, yyyy')}
                    </Text>
                  )}
                </Box>
                <Button
                  variant="outline"
                  onClick={() => setCalendarModalOpen(true)}
                  leftIcon={<BotanicalIcon name="calendar" size="sm" />}
                  aria-label="Open date selection calendar"
                >
                  {selectedDate ? 'Change Date' : 'Select Date'}
                </Button>
              </Flex>
              
              <MobileCalendarModal
                isOpen={isCalendarModalOpen}
                onClose={() => setCalendarModalOpen(false)}
                selectedDate={selectedDate ? new Date(selectedDate) : undefined}
                availableDates={state.availableDates || []}
                onDateSelect={handleDateSelect}
              />
            </Box>
          ) : (
            <Box role="region" aria-label="Calendar date selection">
              {!isTimeSelectionOnly && (
                <Heading as="h3" fontfontSize="md" mb={SACRED_SPACING.sm} id="calendar-heading">
                  Select Date & Time
                </Heading>
              )}
              
              <Calendar
                selectedDate={selectedDate ? new Date(selectedDate) : undefined}
                onSelectDate={handleDateSelect}
                availableDates={state.availableDates || []}
                error={errors.selectedDate}
                aria-labelledby={!isTimeSelectionOnly ? "calendar-heading" : undefined}
                aria-label={isTimeSelectionOnly ? "Date selection calendar" : undefined}
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
  
  // Renders the time selection view
  const renderTimeSelectionView = () => (
    <Box position="relative">
      {isLoadingTimeSlots && <LoadingOverlay isOpen={true} message="Loading available times..." />}
      
      {hasApiError() && timeSlotsError ? (
        <ErrorDisplay
          title="Unable to load time slots"
          message={timeSlotsError}
          actionItems={[{ label: "Try Again", onClick: handleRetry, primary: true }]}
        />
      ) : (
        <Box role="region" aria-label="Time slot selection">
          {!isCalendarOnly && !isMobile && (
            <Heading as="h3" fontfontSize="md" mb={SACRED_SPACING.sm} id="time-slots-heading">
              {isTablet && isTimeSelectionOnly ? 'Available Times' : 'Select Date & Time'}
            </Heading>
          )}
          
          {selectedDate ? (
            <>
              {!isTimeSelectionOnly && !isTablet && (
                <Text 
                  mb={SACRED_SPACING.xs} 
                  fontWeight="medium"
                  aria-live="polite"
                >
                  Available times for {format(new Date(selectedDate), 'EEEE, MMMM d, yyyy')}:
                </Text>
              )}
              
              <TimeSlotList
                timeSlots={state.availableTimeSlots || []}
                selectedTimeSlotId={selectedTimeSlot?.id}
                onSelectTimeSlot={handleTimeSlotSelect}
                error={errors.selectedTimeSlot}
                aria-labelledby={!isTimeSelectionOnly ? "time-slots-heading" : undefined}
                aria-label={isTimeSelectionOnly ? "Available appointment times" : undefined}
              />
            </>
          ) : (
            <Text color="text.subtle">
              Please select a date {isTablet && isTimeSelectionOnly ? 'on the left' : ''} to view available time slots.
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
  
  // For tablet split view mode, we render either just the calendar or just the time selection
  if (isCalendarOnly) {
    return renderCalendarView();
  }
  
  if (isTimeSelectionOnly) {
    return renderTimeSelectionView();
  }
  
  // For mobile or desktop, we render the complete view
  return (
    <VStack spacing={SACRED_SPACING.lg} align="stretch" width="100%">
      {/* Visually hidden live region for screen reader announcements */}
      <VisuallyHidden aria-live="assertive" aria-atomic="true">
        {announcementText}
      </VisuallyHidden>
      
      <Box>
        <Heading as="h2" fontfontSize="lg" mb={SACRED_SPACING.xxs} id="date-selection-heading">
          Choose Your Appointment Date & Time
        </Heading>
        <Text color="text.subtle">
          Select a date and time that works best for your {selectedService?.name || 'appointment'}.
        </Text>
      </Box>
      
      {renderCalendarView()}
      {renderTimeSelectionView()}
      
      {selectedDate && selectedTimeSlot && (
        <Box 
          p={SACRED_SPACING.sm}
          bg="primary.50"
          borderRadius="md"
          borderLeft={`${PHI}px solid`}
          borderLeftColor="primary.500"
          aria-live="polite"
          aria-atomic="true"
        >
          <Heading as="h4" fontfontSize="sm" mb={1}>
            Your Selected Appointment
          </Heading>
          <Text fontWeight="medium">{getFormattedDateTime()}</Text>
        </Box>
      )}
    </VStack>
  );
}; 
















