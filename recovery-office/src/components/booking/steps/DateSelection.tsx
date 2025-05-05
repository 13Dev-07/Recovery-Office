import * as React from 'react';
import styled from 'styled-components';
import { PHI, PHI_INVERSE, SACRED_SPACING, FIBONACCI, SACRED_RADIUS } from '../../../constants/sacred-geometry';
import { getFibonacciByIndex } from '../../../utils/getFibonacciByIndex';

/**
 * Time slot interface
 * 
 * @interface TimeSlot
 * @property {string} id - Unique identifier for the time slot
 * @property {string} time - Display time (e.g., "10:00 AM")
 * @property {boolean} available - Whether the slot is available
 */
interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

/**
 * Props for the DateSelection component
 * 
 * @interface DateSelectionProps
 * @property {Date} selectedDate - Currently selected date
 * @property {(date: Date) => void} onDateChange - Handler for date selection
 * @property {string | null} selectedTimeSlotId - Currently selected time slot ID
 * @property {(timeSlotId: string) => void} onTimeSlotChange - Handler for time slot selection
 * @property {(date: Date) => TimeSlot[]} getAvailableTimeSlots - Function to get available time slots for a date
 */
interface DateSelectionProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  selectedTimeSlotId: string | null;
  onTimeSlotChange: (timeSlotId: string) => void;
  getAvailableTimeSlots: (date: Date) => TimeSlot[];
}

/**
 * Container for the date selection component
 * Uses sacred spacing for margins and padding
 */
const Container = styled.div`
  width: 100%;
  padding: ${SACRED_SPACING.md}px 0;
`;

/**
 * Title for the date selection section
 * Uses golden ratio for line height
 */
const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${SACRED_SPACING.lg}px;
  line-height: ${PHI};
  color: ${props => props.theme.colors.text.dark};
`;

/**
 * Description for the date selection section
 * Uses PHI for line height and margin calculations
 */
const SectionDescription = styled.p`
  margin-bottom: ${SACRED_SPACING.xl}px;
  line-height: ${PHI};
  color: ${props => props.theme.colors.text.main};
`;

/**
 * Layout grid for calendar and time slots
 * Uses golden ratio for layout proportions
 */
const DateSelectionLayout = styled.div`
  display: grid;
  grid-template-columns: ${PHI_INVERSE * 100}% ${(1 - PHI_INVERSE) * 100}%;
  gap: ${SACRED_SPACING.lg}px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/**
 * Calendar container
 * Uses Fibonacci spacing and golden ratio for calendar cells
 */
const CalendarContainer = styled.div`
  background-color: ${props => props.theme.colors.background.light};
  border-radius: ${SACRED_RADIUS.md}px;
  padding: ${SACRED_SPACING.md}px;
  border: 1px solid ${props => props.theme.colors.border.light};
`;

/**
 * Calendar header with month and navigation
 * Uses Fibonacci spacing
 */
const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${SACRED_SPACING.md}px;
`;

/**
 * Month display in the calendar header
 */
const CalendarMonth = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text.dark};
`;

/**
 * Button for calendar navigation
 * Uses Fibonacci dimensions
 */
const NavButton = styled.button`
  width: ${getFibonacciByIndex(7)}px;
  height: ${getFibonacciByIndex(7)}px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.border.light};
  background-color: ${props => props.theme.colors.background.main};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${getFibonacciByIndex(6) * 10}ms ease-in-out;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.medium};
  }
`;

/**
 * Grid for weekday headers
 * Uses Fibonacci for gap and sacred spacing
 */
const WeekdayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${getFibonacciByIndex(4)}px;
  margin-bottom: ${SACRED_SPACING.xs}px;
`;

/**
 * Individual weekday cell
 * Uses golden ratio for text styling
 */
const Weekday = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.light};
  padding: ${SACRED_SPACING.xxs}px;
  font-weight: 500;
`;

/**
 * Grid for calendar days
 * Uses Fibonacci for gap and dimensions
 */
const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${getFibonacciByIndex(4)}px;
`;

/**
 * Individual calendar day cell
 * Uses golden ratio and Fibonacci for styling
 */
const DayCell = styled.div<{ 
  isCurrentMonth: boolean; 
  isToday: boolean; 
  isSelected: boolean;
  isDisabled: boolean;
}>`
  aspect-ratio: 1; /* Perfect square */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${SACRED_RADIUS.sm}px;
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  font-weight: ${props => props.isToday || props.isSelected ? '600' : '400'};
  opacity: ${props => (props.isCurrentMonth && !props.isDisabled) ? 1 : 0.3};
  background-color: ${props => {
    if (props.isSelected) return props.theme.colors.accent.light;
    if (props.isToday) return props.theme.colors.background.medium;
    return 'transparent';
  }};
  color: ${props => {
    if (props.isSelected) return props.theme.colors.accent.dark;
    if (props.isDisabled) return props.theme.colors.text.light;
    return props.theme.colors.text.main;
  }};
  border: 1px solid ${props => {
    if (props.isSelected) return props.theme.colors.accent.main;
    if (props.isToday) return props.theme.colors.border.main;
    return 'transparent';
  }};
  transition: all ${getFibonacciByIndex(5) * 10}ms ease-in-out;
  
  &:hover {
    background-color: ${props => {
      if (props.isDisabled) return 'transparent';
      if (props.isSelected) return props.theme.colors.accent.light;
      return props.theme.colors.background.light;
    }};
    transform: ${props => props.isDisabled ? 'none' : `scale(${PHI_INVERSE + 0.5})`};
  }
`;

/**
 * Time slots container
 * Uses sacred spacing and golden ratio for layout
 */
const TimeSlotsContainer = styled.div`
  background-color: ${props => props.theme.colors.background.light};
  border-radius: ${SACRED_RADIUS.md}px;
  padding: ${SACRED_SPACING.md}px;
  border: 1px solid ${props => props.theme.colors.border.light};
`;

/**
 * Time slots header
 * Uses golden ratio for typography
 */
const TimeSlotsHeader = styled.h3`
  font-size: 1.125rem;
  margin-bottom: ${SACRED_SPACING.md}px;
  color: ${props => props.theme.colors.text.dark};
  line-height: ${PHI};
`;

/**
 * Grid for time slots
 * Uses Fibonacci for spacing and grid layout
 */
const TimeSlotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${SACRED_SPACING.xs}px;
`;

/**
 * Individual time slot
 * Uses sacred geometry for styling and interactions
 */
const TimeSlotButton = styled.button<{ isSelected: boolean; isAvailable: boolean }>`
  padding: ${SACRED_SPACING.xs}px;
  border-radius: ${SACRED_RADIUS.sm}px;
  background-color: ${props => {
    if (!props.isAvailable) return props.theme.colors.background.medium;
    if (props.isSelected) return props.theme.colors.accent.light;
    return props.theme.colors.background.main;
  }};
  border: 1px solid ${props => {
    if (!props.isAvailable) return props.theme.colors.border.light;
    if (props.isSelected) return props.theme.colors.accent.main;
    return props.theme.colors.border.light;
  }};
  color: ${props => {
    if (!props.isAvailable) return props.theme.colors.text.light;
    if (props.isSelected) return props.theme.colors.accent.dark;
    return props.theme.colors.text.main;
  }};
  font-size: 0.875rem;
  cursor: ${props => props.isAvailable ? 'pointer' : 'not-allowed'};
  transition: all ${getFibonacciByIndex(5) * 10}ms ease-in-out;
  
  &:hover {
    background-color: ${props => {
      if (!props.isAvailable) return props.theme.colors.background.medium;
      if (props.isSelected) return props.theme.colors.accent.light;
      return props.theme.colors.background.light;
    }};
    transform: ${props => props.isAvailable ? `translateY(-${getFibonacciByIndex(3)}px)` : 'none'};
  }
`;

/**
 * No time slots message
 * Uses golden ratio for typography
 */
const NoTimeSlotsMessage = styled.p`
  color: ${props => props.theme.colors.text.light};
  font-style: italic;
  line-height: ${PHI};
  text-align: center;
  padding: ${SACRED_SPACING.md}px;
`;

/**
 * DateSelection component
 * Allows users to select a date and time for their booking
 * Implements sacred geometry principles throughout
 */
const DateSelection: React.FC<DateSelectionProps> = ({
  selectedDate,
  onDateChange,
  selectedTimeSlotId,
  onTimeSlotChange,
  getAvailableTimeSlots,
}) => {
  // State for viewing month in calendar
  const [viewDate, setViewDate] = useState<Date>(selectedDate);
  
  // Get available time slots for the selected date
  const availableTimeSlots = getAvailableTimeSlots(selectedDate);
  
  // Helper functions for date calculation
  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();
  
  // Calculate calendar values
  const currentYear = viewDate.getFullYear();
  const currentMonth = viewDate.getMonth();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
  
  // Calculate days from previous month to display
  const prevMonthDays = [];
  if (firstDayOfMonth > 0) {
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevMonthYear = prevMonth === 11 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);
    
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      prevMonthDays.push({
        day: daysInPrevMonth - i,
        month: prevMonth,
        year: prevMonthYear,
        isCurrentMonth: false,
      });
    }
  }
  
  // Calculate days from current month
  const currentMonthDays = [];
  for (let i = 1; i <= daysInMonth; i++) {
    currentMonthDays.push({
      day: i,
      month: currentMonth,
      year: currentYear,
      isCurrentMonth: true,
    });
  }
  
  // Calculate days from next month to display
  const nextMonthDays = [];
  const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
  const nextCellsToFill = totalCells - (prevMonthDays.length + currentMonthDays.length);
  
  if (nextCellsToFill > 0) {
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextMonthYear = nextMonth === 0 ? currentYear + 1 : currentYear;
    
    for (let i = 1; i <= nextCellsToFill; i++) {
      nextMonthDays.push({
        day: i,
        month: nextMonth,
        year: nextMonthYear,
        isCurrentMonth: false,
      });
    }
  }
  
  // Combine all days
  const allDays = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  
  // Handle calendar navigation
  const goToPrevMonth = () => {
    const newViewDate = new Date(viewDate);
    newViewDate.setMonth(viewDate.getMonth() - 1);
    setViewDate(newViewDate);
  };
  
  const goToNextMonth = () => {
    const newViewDate = new Date(viewDate);
    newViewDate.setMonth(viewDate.getMonth() + 1);
    setViewDate(newViewDate);
  };
  
  // Handle date selection
  const handleDateClick = (year: number, month: number, day: number) => {
    const newDate = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Don't allow selecting dates in the past
    if (newDate >= today) {
      onDateChange(newDate);
    }
  };
  
  // Format month and year for display
  const monthYearDisplay = viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  // Get today's date for highlighting
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return (
    <Container>
      <SectionTitle>Choose Date & Time</SectionTitle>
      <SectionDescription>
        Select a date and time for your consultation. We'll send you a confirmation email with all the details.
      </SectionDescription>
      
      <DateSelectionLayout>
        <CalendarContainer>
          <CalendarHeader>
            <NavButton onClick={goToPrevMonth} aria-label="Previous month">
              &lt;
            </NavButton>
            <CalendarMonth>{monthYearDisplay}</CalendarMonth>
            <NavButton onClick={goToNextMonth} aria-label="Next month">
              &gt;
            </NavButton>
          </CalendarHeader>
          
          <WeekdayHeader>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <Weekday key={day}>{day}</Weekday>
            ))}
          </WeekdayHeader>
          
          <DaysGrid>
            {allDays.map(({ day, month, year, isCurrentMonth }) => {
              const date = new Date(year, month, day);
              const dateString = date.toISOString().split('T')[0];
              const selectedDateString = selectedDate.toISOString().split('T')[0];
              const todayString = today.toISOString().split('T')[0];
              
              const isSelected = dateString === selectedDateString;
              const isToday = dateString === todayString;
              const isDisabled = date < today; // Disable past dates
              
              return (
                <DayCell
                  key={`${year}-${month}-${day}`}
                  isCurrentMonth={isCurrentMonth}
                  isToday={isToday}
                  isSelected={isSelected}
                  isDisabled={isDisabled}
                  onClick={() => {
                    if (!isDisabled) {
                      handleDateClick(year, month, day);
                    }
                  }}
                  aria-label={date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  aria-selected={isSelected}
                  aria-disabled={isDisabled}
                >
                  {day}
                </DayCell>
              );
            })}
          </DaysGrid>
        </CalendarContainer>
        
        <TimeSlotsContainer>
          <TimeSlotsHeader>
            Available Times for {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </TimeSlotsHeader>
          
          {availableTimeSlots.length > 0 ? (
            <TimeSlotsGrid>
              {availableTimeSlots.map((slot) => (
                <TimeSlotButton
                  key={slot.id}
                  isSelected={slot.id === selectedTimeSlotId}
                  isAvailable={slot.available}
                  onClick={() => {
                    if (slot.available) {
                      onTimeSlotChange(slot.id);
                    }
                  }}
                  disabled={!slot.available}
                  aria-label={`Time slot ${slot.time}`}
                  aria-selected={slot.id === selectedTimeSlotId}
                  aria-disabled={!slot.available}
                >
                  {slot.time}
                </TimeSlotButton>
              ))}
            </TimeSlotsGrid>
          ) : (
            <NoTimeSlotsMessage>
              No time slots available for this date. Please select another date.
            </NoTimeSlotsMessage>
          )}
        </TimeSlotsContainer>
      </DateSelectionLayout>
    </Container>
  );
};

export default DateSelection; 














