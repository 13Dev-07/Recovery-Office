/**
 * DateSelection Component
 * 
 * Second step in the booking process where users select their preferred date and time.
 * Uses sacred geometry principles for layout and spacing.
 */

import * as React from 'react';
import { useState, useEffect, useContext } from 'react';;
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { format, addDays, startOfDay, isSameDay, isToday, isBefore } from 'date-fns';


import { BookingContext } from '../state';
import { getStepErrors } from '../validation';
import { Text } from '../../typography/Text';
import { getMockTimeSlots } from '../state';
import { Button } from '../../button/Button';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import MobileCalendarModal from '../MobileCalendarModal';

/**
 * DateSelection component for booking step 2
 */
export const DateSelection: React.FC = () => {
  const { state, dispatch } = useContext(BookingContext);
  const errors = getStepErrors(state, 1);
  
  // Local state for calendar view
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    state.selectedDate ? new Date(state.selectedDate) : null
  );
  
  // State for mobile calendar modal
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  
  // Check if on mobile screen
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  
  // Generate calendar days (next 14 days including today)
  useEffect(() => {
    const days: Date[] = [];
    const today = startOfDay(new Date());
    
    for (let i = 0; i < 14; i++) {
      days.push(addDays(today, i));
    }
    
    setCalendarDays(days);
  }, []);
  
  // Update time slots when date changes
  useEffect(() => {
    if (selectedDate) {
      const dateString = format(selectedDate, 'yyyy-MM-dd');
      const timeSlots = getMockTimeSlots(selectedDate);
      
      dispatch({ type: 'SET_DATE', payload: dateString });
      dispatch({ type: 'SET_AVAILABLE_TIME_SLOTS', payload: timeSlots });
      
      // Reset time slot if changing date
      if (state.selectedDate !== dateString) {
        dispatch({ type: 'SET_TIME_SLOT', payload: '' });
      }
    }
  }, [selectedDate, dispatch, state.selectedDate]);
  
  // Handle date selection
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };
  
  // Handle time slot selection
  const handleTimeSlotSelect = (timeSlot: string) => {
    dispatch({ type: 'SET_TIME_SLOT', payload: timeSlot });
  };
  
  // Open the calendar modal
  const handleOpenCalendarModal = () => {
    setIsCalendarModalOpen(true);
  };
  
  // Close the calendar modal
  const handleCloseCalendarModal = () => {
    setIsCalendarModalOpen(false);
  };
  
  // Format day for display
  const formatDay = (date: Date): string => {
    if (isToday(date)) return 'Today';
    return format(date, 'E');
  };
  
  // Determine if a time slot is available
  const isTimeSlotAvailable = (timeSlot: string): boolean => {
    return state.availableTimeSlots.includes(timeSlot);
  };
  
  return (
    <StepContainer>
      <StepHeader>
        <Text as="h3" variant="h5">
          Select Date & Time
        </Text>
        <Text variant="body2" style={{ opacity: 0.8 }}>
          Choose when you'd like to schedule your appointment
        </Text>
      </StepHeader>
      
      <SectionTitle>Date</SectionTitle>
      
      {isMobile && (
        <MobileViewContainer>
          <SelectedDateDisplay>
            {selectedDate ? (
              <Text variant="body1">
                <strong>{format(selectedDate, 'EEEE, MMMM do, yyyy')}</strong>
              </Text>
            ) : (
              <Text variant="body2" style={{ opacity: 0.7 }}>
                No date selected
              </Text>
            )}
          </SelectedDateDisplay>
          <Button 
            variant="outlined" 
            size="sm" 
            onClick={handleOpenCalendarModal}
          >
            Choose Date
          </Button>
        </MobileViewContainer>
      )}
      
      <CalendarContainer $isMobile={isMobile}>
        {!isMobile && calendarDays.map((day) => (
          <DateButton
            key={format(day, 'yyyy-MM-dd')}
            type="button"
            onClick={() => handleDateSelect(day)}
            $isSelected={selectedDate ? isSameDay(day, selectedDate) : false}
            $isToday={isToday(day)}
            $isDisabled={isBefore(day, startOfDay(new Date())) && !isToday(day)}
            disabled={isBefore(day, startOfDay(new Date())) && !isToday(day)}
          >
            <DayName>{formatDay(day)}</DayName>
            <DayNumber>{format(day, 'd')}</DayNumber>
            <MonthName>{format(day, 'MMM')}</MonthName>
          </DateButton>
        ))}
      </CalendarContainer>
      
      {errors.selectedDate && (
        <ErrorMessage>{errors.selectedDate}</ErrorMessage>
      )}
      
      {selectedDate && (
        <>
          <SectionTitle>Time</SectionTitle>
          
          <TimeSlotContainer>
            {state.availableTimeSlots.length > 0 ? (
              state.availableTimeSlots.map((slot) => (
                <TimeSlotButton
                  key={slot}
                  type="button"
                  onClick={() => handleTimeSlotSelect(slot)}
                  $isSelected={state.timeSlot === slot}
                  $isAvailable={isTimeSlotAvailable(slot)}
                  disabled={!isTimeSlotAvailable(slot)}
                >
                  {slot}
                </TimeSlotButton>
              ))
            ) : (
              <NoTimeSlotsMessage>
                No time slots available for the selected date.
                Please select another date.
              </NoTimeSlotsMessage>
            )}
          </TimeSlotContainer>
          
          {errors.timeSlot && (
            <ErrorMessage>{errors.timeSlot}</ErrorMessage>
          )}
        </>
      )}
      
      {/* Mobile Calendar Modal */}
      <MobileCalendarModal
        isOpen={isCalendarModalOpen}
        selectedDate={selectedDate}
        onSelectDate={handleDateSelect}
        onClose={handleCloseCalendarModal}
        minDate={new Date()}
        maxDate={addDays(new Date(), 60)}
        withBotanical={true}
      />
    </StepContainer>
  );
};

// Styled components with sacred geometry principles
const StepContainer = styled.div`
  width: 100%;
`;

const StepHeader = styled.div`
  margin-bottom: ${getFibonacciByIndex(8)}px; // 21px
  text-align: center;
  
  & > * + * {
    margin-top: ${getFibonacciByIndex(3)}px; // 2px
  }
`;

const SectionTitle = styled(Text).attrs({ as: 'h4', variant: 'subtitle1' })`
  margin: ${getFibonacciByIndex(7)}px 0 ${getFibonacciByIndex(5)}px; // 13px 0 5px
  font-weight: 600;
`;

interface CalendarContainerProps {
  $isMobile: boolean;
}

const CalendarContainer = styled.div<CalendarContainerProps>`
  display: ${props => props.$isMobile ? 'none' : 'grid'};
  grid-template-columns: repeat(auto-fill, minmax(${getFibonacciByIndex(9)}px, 1fr)); // ~55px
  gap: ${getFibonacciByIndex(5)}px; // 5px
  margin-bottom: ${getFibonacciByIndex(7)}px; // 13px
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const MobileViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${getFibonacciByIndex(7)}px; // 13px
  background-color: ${props => props.theme.colors.background.paper};
  padding: ${getFibonacciByIndex(5)}px;
  border-radius: ${getFibonacciByIndex(3)}px;
  border: 1px solid ${props => props.theme.colors.gray[200] ?? 1};
`;

const SelectedDateDisplay = styled.div`
  flex: 1;
`;

interface DateButtonProps {
  $isSelected: boolean;
  $isToday: boolean;
  $isDisabled: boolean;
}

const DateButton = styled.button<DateButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${getFibonacciByIndex(3)}px;
  border: 1px solid ${props => props.$isSelected 
    ? props.theme.colors.primary[500] ?? 1 
    : props.theme.colors.gray[200] ?? 1};
  border-radius: ${getFibonacciByIndex(3)}px;
  background-color: ${props => {
    if (props.$isDisabled) return props.theme.colors.gray[100] ?? 1;
    if (props.$isSelected) return props.theme.colors.primary[50] ?? 1;
    return props.theme.colors.background.paper;
  }};
  color: ${props => {
    if (props.$isDisabled) return props.theme.colors.gray[400] ?? 1;
    if (props.$isSelected) return props.theme.colors.primary[700] ?? 1;
    return props.theme.colors.text.primary;
  }};
  cursor: ${props => props.$isDisabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s cubic-bezier(${PHI_INVERSE}, 0, ${PHI_INVERSE}, 1);
  height: ${getFibonacciByIndex(10)}px;
  
  &:hover:not(:disabled) {
    background-color: ${props => props.$isSelected 
      ? props.theme.colors.primary[100] ?? 1
      : props.theme.colors.gray[50] ?? 1};
    border-color: ${props => props.$isSelected 
      ? props.theme.colors.primary[600] ?? 1
      : props.theme.colors.gray[300] ?? 1};
  }
  
  ${props => props.$isToday && `
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: ${getFibonacciByIndex(2)}px;
      right: ${getFibonacciByIndex(2)}px;
      width: ${getFibonacciByIndex(3)}px;
      height: ${getFibonacciByIndex(3)}px;
      border-radius: 50%;
      background-color: ${props.theme.colors.primary[500] ?? 1};
    }
  `}
`;

const DayName = styled.span`
  font-size: ${props => props.theme.typography.fontSize * PHI_INVERSE}px;
  font-weight: 400;
  margin-bottom: ${getFibonacciByIndex(2)}px;
  text-transform: uppercase;
  opacity: 0.7;
`;

const DayNumber = styled.span`
  font-size: ${getFibonacciByIndex(6)}px;
  font-weight: 600;
  margin-bottom: ${getFibonacciByIndex(2)}px;
`;

const MonthName = styled.span`
  font-size: ${props => props.theme.typography.fontSize * PHI_INVERSE}px;
  opacity: 0.7;
`;

const TimeSlotContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${getFibonacciByIndex(9)}px, 1fr));
  gap: ${getFibonacciByIndex(5)}px;
  margin-bottom: ${getFibonacciByIndex(7)}px;
`;

interface TimeSlotButtonProps {
  $isSelected: boolean;
  $isAvailable: boolean;
}

const TimeSlotButton = styled.button<TimeSlotButtonProps>`
  padding: ${getFibonacciByIndex(5)}px ${getFibonacciByIndex(4)}px;
  border-radius: ${getFibonacciByIndex(3)}px;
  background-color: ${props => props.$isSelected
    ? props.theme.colors.primary[500] ?? 1
    : props.theme.colors.background.paper};
  color: ${props => props.$isSelected
    ? props.theme.colors.white
    : props.theme.colors.text.primary};
  border: 1px solid ${props => props.$isSelected
    ? props.theme.colors.primary[500] ?? 1
    : props.theme.colors.gray[200] ?? 1};
  cursor: ${props => props.$isAvailable ? 'pointer' : 'not-allowed'};
  opacity: ${props => props.$isAvailable ? 1 : 0.5};
  transition: all 0.2s cubic-bezier(${PHI_INVERSE}, 0, ${PHI_INVERSE}, 1);
  font-size: ${props => props.theme.typography.fontSize}px;
  
  &:hover:not(:disabled) {
    background-color: ${props => props.$isSelected
      ? props.theme.colors.primary[600] ?? 1
      : props.theme.colors.primary[50] ?? 1};
    border-color: ${props => props.theme.colors.primary[300] ?? 1};
  }
`;

const NoTimeSlotsMessage = styled.div`
  grid-column: 1 / -1;
  padding: ${getFibonacciByIndex(7)}px;
  text-align: center;
  color: ${props => props.theme.colors.text.secondary};
  background-color: ${props => props.theme.colors.background.light};
  border-radius: ${getFibonacciByIndex(3)}px;
  border: 1px dashed ${props => props.theme.colors.gray[300] ?? 1};
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error[500] ?? 1};
  font-size: ${props => props.theme.typography.fontSize * PHI_INVERSE}px;
  margin-top: ${getFibonacciByIndex(3)}px;
  margin-bottom: ${getFibonacciByIndex(5)}px;
`;

export default DateSelection; 










