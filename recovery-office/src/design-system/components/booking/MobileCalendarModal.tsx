/**
 * MobileCalendarModal Component
 * 
 * A fullscreen modal calendar for selecting dates on mobile devices.
 * Uses sacred geometry principles for layout, spacing, and animations.
 */

import * as React from 'react';
import { useState, useEffect } from 'react';;
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth,
  endOfMonth,
  eachDayOfInterval, 
  isSameMonth,
  isSameDay,
  isToday,
  addDays,
  isAfter,
  isBefore,
  startOfDay
} from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';


import { Text } from '../typography/Text';
import { Button } from '../button/Button';
import { IconButton } from '../button/IconButton';
import { BotanicalElement } from '../botanical/BotanicalElement';

export interface MobileCalendarModalProps {
  /** Whether the modal is visible */
  isOpen: boolean;
  
  /** Currently selected date */
  selectedDate: Date | null;
  
  /** Callback when a date is selected */
  onSelectDate: (date: Date) => void;
  
  /** Callback when the modal is closed */
  onClose: () => void;
  
  /** Minimum selectable date (defaults to today) */
  minDate?: Date;
  
  /** Maximum selectable date (defaults to 3 months from now) */
  maxDate?: Date;
  
  /** Whether to show botanical decorations */
  withBotanical?: boolean;
  
  /** Additional class name */
  className?: string;
}

/**
 * Sacred geometry easing functions
 */
const SACRED_EASINGS = {
  easeOut: [0, PHI_INVERSE, PHI_INVERSE, 1],
  easeIn: [PHI_INVERSE, 0, 1, PHI_INVERSE],
  easeInOut: [PHI_INVERSE, 0, 0, 1]
};

/**
 * Day names with sacred proportions (first 3 letters)
 */
const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * MobileCalendarModal component
 */
export const MobileCalendarModal: React.FC<MobileCalendarModalProps> = ({
  isOpen,
  selectedDate,
  onSelectDate,
  onClose,
  minDate = new Date(),
  maxDate = addMonths(new Date(), 3),
  withBotanical = true,
  className
}) => {
  // Convert minDate to start of day
  const minDateNormalized = startOfDay(minDate);
  
  // Current visible month
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());
  
  // Days in the current month
  const [daysInMonth, setDaysInMonth] = useState<Date[]>([]);
  
  // Reset current month when selected date changes
  useEffect(() => {
    if (selectedDate) {
      setCurrentMonth(selectedDate);
    }
  }, [selectedDate]);
  
  // Generate days for the current month
  useEffect(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDay = addDays(monthStart, -monthStart.getDay());
    const endDay = addDays(monthEnd, 6 - monthEnd.getDay());
    
    const days = eachDayOfInterval({ start: startDay, end: endDay });
    setDaysInMonth(days);
  }, [currentMonth]);
  
  // Navigate to the previous month
  const goToPreviousMonth = () => {
    const previousMonth = subMonths(currentMonth, 1);
    if (isBefore(startOfMonth(previousMonth), startOfMonth(minDateNormalized))) {
      return; // Don't go earlier than minDate
    }
    setCurrentMonth(previousMonth);
  };
  
  // Navigate to the next month
  const goToNextMonth = () => {
    const nextMonth = addMonths(currentMonth, 1);
    if (isAfter(startOfMonth(nextMonth), startOfMonth(maxDate))) {
      return; // Don't go later than maxDate
    }
    setCurrentMonth(nextMonth);
  };
  
  // Handle date selection
  const handleDateSelect = (date: Date) => {
    onSelectDate(date);
    onClose();
  };
  
  // Check if a date is selectable
  const isDateSelectable = (date: Date): boolean => {
    return (
      !isBefore(startOfDay(date), minDateNormalized) && 
      !isAfter(date, maxDate)
    );
  };
  
  if (!isOpen) return null;
  
  return (
    <AnimatePresence mode="wait">
      <ModalOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: SACRED_EASINGS.easeOut }}
        onClick={onClose}
        className={className}
      >
        <ModalContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: SACRED_EASINGS.easeInOut }}
          onClick={e => e.stopPropagation()}
        >
          {withBotanical && (
            <BotanicalDecoration position="topRight">
              <BotanicalElement 
                type="oliveBranch" 
                size="medium" 
                color="var(--color-primary-300)" 
                rotation={45}
              />
            </BotanicalDecoration>
          )}
          
          <ModalHeader>
            <Text as="h2" variant="h5">Select Date</Text>
            <CloseButton onClick={onClose}>×</CloseButton>
          </ModalHeader>
          
          <MonthNavigation>
            <NavButton 
              onClick={goToPreviousMonth}
              disabled={isBefore(startOfMonth(subMonths(currentMonth, 1)), startOfMonth(minDateNormalized))}
            >
              &larr;
            </NavButton>
            <MonthDisplay variant="h6">
              {format(currentMonth, 'MMMM yyyy')}
            </MonthDisplay>
            <NavButton 
              onClick={goToNextMonth}
              disabled={isAfter(startOfMonth(addMonths(currentMonth, 1)), startOfMonth(maxDate))}
            >
              &rarr;
            </NavButton>
          </MonthNavigation>
          
          <CalendarGrid>
            {/* Day headings */}
            {DAY_NAMES.map(day => (
              <DayHeading key={day} variant="subtitle2">
                {day}
              </DayHeading>
            ))}
            
            {/* Calendar days */}
            {daysInMonth.map(date => {
              const isCurrentMonth = isSameMonth(date, currentMonth);
              const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
              const isTodayDate = isToday(date);
              const selectable = isDateSelectable(date);
              
              return (
                <DayCell 
                  key={date.toISOString()}
                  $isCurrentMonth={isCurrentMonth}
                  $isSelected={isSelected}
                  $isToday={isTodayDate}
                  $isSelectable={selectable}
                  onClick={() => selectable && handleDateSelect(date)}
                >
                  <DayNumber
                    $isCurrentMonth={isCurrentMonth}
                    $isSelected={isSelected}
                    $isToday={isTodayDate}
                    $isSelectable={selectable}
                  >
                    {format(date, 'd')}
                  </DayNumber>
                </DayCell>
              );
            })}
          </CalendarGrid>
          
          <ButtonContainer>
            <Button 
              variant="outlined" 
              color="secondary"
              onClick={onClose}
              fullWidth
            >
              Cancel
            </Button>
          </ButtonContainer>
        </ModalContent>
      </ModalOverlay>
    </AnimatePresence>
  );
};

// Styled components with sacred geometry principles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${getFibonacciByIndex(5)}px; // 5px
`;

const ModalContent = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: ${getFibonacciByIndex(12)}px; // 144px
  max-height: 90vh;
  overflow-y: auto;
  background-color: ${props => props.theme.colors.background.paper};
  border-radius: ${getFibonacciByIndex(5)}px; // 5px
  padding: ${getFibonacciByIndex(7)}px; // 13px
  box-shadow: 0 ${getFibonacciByIndex(6)}px ${getFibonacciByIndex(9)}px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${getFibonacciByIndex(7)}px; // 13px
  padding-bottom: ${getFibonacciByIndex(5)}px; // 5px
  border-bottom: 1px solid ${props => props.theme.colors.gray[200] ?? 1};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.text.secondary};
  
  &:hover {
    color: ${props => props.theme.colors.text.primary};
  }
`;

const MonthNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${getFibonacciByIndex(6)}px; // 8px
`;

const MonthDisplay = styled(Text)`
  text-align: center;
  color: ${props => props.theme.colors.primary[500] ?? 1};
  font-weight: 600;
  flex: 1;
  
  /* Apply sacred geometry to text */
  letter-spacing: ${PHI_INVERSE * 0.05}em;
  line-height: ${PHI};
`;

const NavButton = styled(IconButton)`
  color: ${props => props.theme.colors.text.secondary};
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${getFibonacciByIndex(4)}px; // 3px
`;

const DayHeading = styled(Text)`
  text-align: center;
  padding: ${getFibonacciByIndex(3)}px 0; // 2px
  color: ${theme.colors.text.secondary};
  font-weight: 500;
`;

interface DayCellProps {
  $isCurrentMonth: boolean;
  $isSelected: boolean;
  $isToday: boolean;
  $isSelectable: boolean;
}

const DayCell = styled.div<DayCellProps>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.$isSelectable ? 'pointer' : 'default'};
  opacity: ${props => 
    (props.$isCurrentMonth && props.$isSelectable) 
      ? 1 
      : props.$isCurrentMonth ? 0.5 : 0.2
  };
  border-radius: ${getFibonacciByIndex(2)}px; // 1px
  
  ${props => props.$isToday && !props.$isSelected && `
    background-color: ${props.theme.colors.primary[100] ?? 1}15;
  `}
  
  ${props => props.$isSelected && `
    background-color: ${props.theme.colors.primary[500] ?? 1};
  `}
  
  &:hover {
    ${props => props.$isSelectable && !props.$isSelected && `
      background-color: rgba(0, 0, 0, 0.05);
    `}
  }
`;

interface DayNumberProps {
  $isCurrentMonth: boolean;
  $isSelected: boolean;
  $isToday: boolean;
  $isSelectable: boolean;
}

const DayNumber = styled.span<DayNumberProps>`
  font-size: ${getFibonacciByIndex(5)}px; // 5px
  font-weight: ${props => props.$isSelected || props.$isToday ? 'bold' : 'normal'};
  color: ${props => 
    props.$isSelected 
      ? props.theme.colors.white
      : props.$isToday 
        ? props.theme.colors.primary[500] ?? 1
        : props.theme.colors.text.primary
  };
  
  ${props => props.$isToday && !props.$isSelected && `
    border: 1px solid ${props.theme.colors.primary[500] ?? 1};
    border-radius: 50%;
    width: ${getFibonacciByIndex(6)}px; // 8px
    height: ${getFibonacciByIndex(6)}px; // 8px
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${getFibonacciByIndex(7)}px; // 13px
  gap: ${getFibonacciByIndex(5)}px; // 5px
`;

interface BotanicalDecorationProps {
  position: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
}

const BotanicalDecoration = styled.div<BotanicalDecorationProps>`
  position: absolute;
  z-index: -1;
  opacity: 0.08;
  pointer-events: none;
  
  ${props => props.position === 'topRight' && `
    top: -${getFibonacciByIndex(7)}px; // 13px
    right: -${getFibonacciByIndex(7)}px; // 13px
    transform: rotate(45deg);
  `}
  
  ${props => props.position === 'topLeft' && `
    top: -${getFibonacciByIndex(7)}px; // 13px
    left: -${getFibonacciByIndex(7)}px; // 13px
    transform: rotate(-45deg);
  `}
  
  ${props => props.position === 'bottomRight' && `
    bottom: -${getFibonacciByIndex(7)}px; // 13px
    right: -${getFibonacciByIndex(7)}px; // 13px
    transform: rotate(135deg);
  `}
  
  ${props => props.position === 'bottomLeft' && `
    bottom: -${getFibonacciByIndex(7)}px; // 13px
    left: -${getFibonacciByIndex(7)}px; // 13px
    transform: rotate(-135deg);
  `}
`;

export default MobileCalendarModal; 










