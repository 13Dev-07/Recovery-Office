/**
 * Styled Component Type Definitions
 * 
 * This file defines TypeScript interfaces for styled components
 * to ensure consistency and type safety throughout the application.
 */

import { DefaultTheme } from 'styled-components';
import { BreakpointKey } from '../tokens/breakpoints';
import * as React from 'react';

/**
 * Props with theme for styled components
 */
export interface ThemedProps {
  theme: DefaultTheme;
}

/**
 * Base props for styled components with optional className
 */
export interface StyledComponentProps {
  className?: string;
}

/**
 * Props for components that can have margin applied
 */
export interface MarginProps {
  m?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  mx?: string | number;
  my?: string | number;
}

/**
 * Props for components that can have padding applied
 */
export interface PaddingProps {
  p?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  px?: string | number;
  py?: string | number;
}

/**
 * Combined spacing props (margin and padding)
 */
export interface SpacingProps extends MarginProps, PaddingProps {}

/**
 * Props for responsive display
 */
export interface DisplayProps {
  display?: string;
  hide?: BreakpointKey | BreakpointKey[];
  show?: BreakpointKey | BreakpointKey[];
}

/**
 * Props for components with width and height
 */
export interface DimensionProps {
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
}

/**
 * Props for flex container components
 */
export interface FlexProps {
  /**
   * The value of the flex CSS property
   */
  flex?: string | number;
  
  /**
   * The direction of the flex items
   * @default 'row'
   */
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  
  /**
   * How flex items wrap
   * @default 'nowrap'
   */
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  
  /**
   * Alignment of items on the main axis
   * @default 'flex-start'
   */
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  
  /**
   * Alignment of items on the cross axis
   * @default 'stretch'
   */
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  
  /**
   * Alignment of multi-line content
   * @default 'stretch'
   */
  alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  
  /**
   * Gap between flex items
   */
  gap?: string | number;
}

/**
 * Props for flex item components
 */
export interface FlexItemProps {
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string | number;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  order?: number;
}

/**
 * Props for grid container components
 */
export interface GridProps {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridTemplateAreas?: string;
  gridGap?: string | number;
  gridRowGap?: string | number;
  gridColumnGap?: string | number;
}

/**
 * Props for grid item components
 */
export interface GridItemProps {
  gridArea?: string;
  gridRow?: string;
  gridColumn?: string;
  gridRowStart?: string | number;
  gridRowEnd?: string | number;
  gridColumnStart?: string | number;
  gridColumnEnd?: string | number;
}

/**
 * Props for text components
 */
export interface TextProps {
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  fontWeight?: number | string;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  letterSpacing?: string | number;
  lineHeight?: string | number;
}

/**
 * Props for color styling
 */
export interface ColorProps {
  color?: string;
  bg?: string;
  backgroundColor?: string;
  opacity?: number;
}

/**
 * Props for border styling
 */
export interface BorderProps {
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderColor?: string;
  borderRadius?: string | number;
}

/**
 * Props for box shadow styling
 */
export interface ShadowProps {
  boxShadow?: string;
}

/**
 * Props for positioning
 */
export interface PositionProps {
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  zIndex?: number;
}

/**
 * Combined box styling props
 */
export interface BoxStyleProps extends 
  SpacingProps, 
  DisplayProps, 
  DimensionProps, 
  FlexProps, 
  GridProps,
  TextProps,
  ColorProps,
  BorderProps,
  ShadowProps,
  PositionProps {}

/**
 * Props for responsive styling (with breakpoint-specific values)
 */
export interface ResponsiveProps {
  _xs?: Partial<BoxStyleProps>;
  _sm?: Partial<BoxStyleProps>;
  _md?: Partial<BoxStyleProps>;
  _lg?: Partial<BoxStyleProps>;
  _xl?: Partial<BoxStyleProps>;
  _xxl?: Partial<BoxStyleProps>;
}

/**
 * Combined props for box component
 */
export interface BoxProps extends BoxStyleProps, ResponsiveProps, StyledComponentProps {
  /**
   * Children elements to be rendered inside the box
   */
  children?: React.ReactNode;
}

/**
 * Props that allow specifying a polymorphic 'as' prop
 * for components built with styled-components
 */
export interface AsProps<T = unknown> extends BoxProps {
  /**
   * Polymorphic as prop for rendering different HTML elements
   * or other React components
   */
  as?: React.ElementType<T> | keyof JSX.IntrinsicElements;
}

/**
 * Props for sacred geometry-based layout
 */
export interface SacredLayoutProps {
  usePhi?: boolean;
  useGoldenRatio?: boolean;
  goldenRatioDirection?: 'horizontal' | 'vertical';
  fibonacciSpacing?: boolean;
}

/**
 * Props specifically for the golden ratio grid
 */
export interface GoldenRatioLayoutProps {
  /**
   * Whether the major section (61.8%) should be first
   */
  majorFirst?: boolean;
  
  /**
   * Direction of the golden ratio split
   */
  direction?: 'row' | 'column';
  
  /**
   * Gap between the major and minor sections (in pixels or CSS value)
   */
  gap?: string | number;
}

/**
 * Props for the GoldenSection component
 * 
 * Implements a layout based on the Golden Ratio (PHI = 1.618),
 * creating aesthetically pleasing and harmonious divisions of space.
 */
export interface GoldenSectionProps extends BoxProps {
  /**
   * Direction of the golden section split
   * - horizontal: divides width according to golden ratio
   * - vertical: divides height according to golden ratio
   */
  direction?: 'horizontal' | 'vertical';
  
  /**
   * Whether to reverse the order of the sections
   * When true, the secondary section will be rendered first
   */
  reverseOrder?: boolean;
}

/**
 * Props for the Container component
 * 
 * A layout component that provides a centered container with width constraints
 * based on sacred geometry principles.
 */
export interface ContainerProps extends BoxProps {
  /**
   * Maximum width of the container
   * Can be a predefined size (xs, sm, md, lg, xl) or a custom value
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string | number;
  
  /**
   * Whether the container should take up the full width of its parent
   * When true, maxWidth is ignored
   */
  fluid?: boolean;
  
  /**
   * Whether to center the content within the container
   * When true, applies flex centering to children
   */
  centerContent?: boolean;
}

/**
 * Props for the Stack component
 * 
 * A layout component that arranges its children in a stack (vertical or horizontal)
 * with spacing based on Fibonacci sequence values.
 */
export interface StackProps extends BoxProps {
  /**
   * Direction of the stack
   * - vertical: stacks items vertically (column)
   * - horizontal: stacks items horizontally (row)
   */
  direction?: 'vertical' | 'horizontal';
  
  /**
   * Spacing between items
   * Can be a predefined spacing token or a custom value
   */
  spacing?: keyof typeof import('../tokens').spacing | string | number;
  
  /**
   * Alignment of items along the cross axis
   * For vertical stacks, this is horizontal alignment
   * For horizontal stacks, this is vertical alignment
   */
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  
  /**
   * Alignment of items along the main axis
   * For vertical stacks, this is vertical alignment
   * For horizontal stacks, this is horizontal alignment
   */
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  
  /**
   * Element to render between each child
   */
  divider?: React.ReactElement;
  
  /**
   * Whether the items should wrap when they run out of space
   */
  shouldWrap?: boolean;
}

/**
 * Form Field Props
 * Common props for form fields
 */
export interface FormFieldProps extends BoxProps {
  /**
   * The unique identifier for the form field
   */
  id?: string;
  
  /**
   * The name of the form field
   */
  name?: string;
  
  /**
   * Whether the field is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Whether the field is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the field is read-only
   * @default false
   */
  readOnly?: boolean;
  
  /**
   * Whether the field is invalid
   * @default false
   */
  isInvalid?: boolean;
  
  /**
   * Whether the field is currently being validated
   * @default false
   */
  isValidating?: boolean;
  
  /**
   * The size of the form field
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * The placeholder text for the form field
   */
  placeholder?: string;
}

/**
 * Form Control Props
 * Container for form elements with label and error message
 */
export interface FormControlProps extends BoxProps {
  /**
   * The unique identifier for the form control
   */
  id?: string;
  
  /**
   * Whether the field is required
   * @default false
   */
  isRequired?: boolean;
  
  /**
   * Whether the field is disabled
   * @default false
   */
  isDisabled?: boolean;
  
  /**
   * Whether the field is invalid
   * @default false
   */
  isInvalid?: boolean;
  
  /**
   * Whether the field is currently being validated
   * @default false
   */
  isValidating?: boolean;
  
  /**
   * The label for the form control
   */
  label?: React.ReactNode;
  
  /**
   * The error message for the form control
   */
  errorMessage?: React.ReactNode;
  
  /**
   * The helper text for the form control
   */
  helperText?: React.ReactNode;
  
  /**
   * The size of the form control
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Form control content
   */
  children?: React.ReactNode;
}

/**
 * Form Label Props
 * For labels in form controls
 */
export interface FormLabelProps extends BoxProps {
  /**
   * The HTML for attribute to associate the label with a form field
   */
  htmlFor?: string;
  
  /**
   * Whether the associated field is required
   * @default false
   */
  isRequired?: boolean;
  
  /**
   * Whether the associated field is disabled
   * @default false
   */
  isDisabled?: boolean;
  
  /**
   * The size of the label
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether to show the required indicator
   * @default true
   */
  showRequiredIndicator?: boolean;
  
  /**
   * Label content
   */
  children?: React.ReactNode;
}

/**
 * Form Error Props
 * For error messages in form controls
 */
export interface FormErrorProps extends BoxProps {
  /**
   * The size of the error message
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether to show an error icon
   * @default true
   */
  showIcon?: boolean;
  
  /**
   * Error message content
   */
  children?: React.ReactNode;
}

/**
 * Input Props
 * Text input field props
 */
export interface InputProps extends FormFieldProps {
  /**
   * The input type
   * @default 'text'
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
  
  /**
   * The input value
   */
  value?: string | number;
  
  /**
   * Default value for uncontrolled inputs
   */
  defaultValue?: string | number;
  
  /**
   * Callback when the input value changes
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  
  /**
   * Callback when the input is focused
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  
  /**
   * Callback when the input loses focus
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  
  /**
   * Icon to display at the start of the input
   */
  startIcon?: React.ReactNode;
  
  /**
   * Icon to display at the end of the input
   */
  endIcon?: React.ReactNode;
  
  /**
   * Whether to use sacred geometry proportions for the input
   * @default true
   */
  useSacredProportions?: boolean;
}

/**
 * Text Area Props
 * Multiline text input field props
 */
export interface TextAreaProps extends Omit<InputProps, 'type' | 'startIcon' | 'endIcon'> {
  /**
   * Number of rows in the textarea
   * @default 3
   */
  rows?: number;
  
  /**
   * Whether to automatically resize the textarea based on content
   * @default false
   */
  autoResize?: boolean;
  
  /**
   * Maximum height for auto-resizing textareas
   */
  maxHeight?: string | number;
  
  /**
   * Minimum height for auto-resizing textareas
   */
  minHeight?: string | number;
}

/**
 * Select Props
 * Dropdown selection field props
 */
export interface SelectProps extends Omit<InputProps, 'type'> {
  /**
   * Options for the select field
   */
  options?: Array<{
    value: string | number;
    label: string;
    disabled?: boolean;
    group?: string;
  }>;
  
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  
  /**
   * Whether to use a clearable select
   * @default false
   */
  isClearable?: boolean;
  
  /**
   * Whether to allow searching in the options
   * @default false
   */
  isSearchable?: boolean;
  
  /**
   * Whether to use a sacred geometry-based dropdown layout
   * @default true
   */
  useSacredDropdown?: boolean;
}

/**
 * Checkbox Props
 * Checkbox input field props
 */
export interface CheckboxProps extends Omit<FormFieldProps, 'placeholder'> {
  /**
   * Whether the checkbox is checked
   */
  checked?: boolean;
  
  /**
   * Default checked state for uncontrolled components
   */
  defaultChecked?: boolean;
  
  /**
   * Callback when the checkbox state changes
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  
  /**
   * Whether to use a golden ratio-based checkbox
   * @default true
   */
  useGoldenRatio?: boolean;
  
  /**
   * Whether to use an indeterminate state
   * @default false
   */
  indeterminate?: boolean;
  
  /**
   * Color scheme for the checkbox
   * @default 'primary'
   */
  colorScheme?: 'primary' | 'secondary' | 'accent';
}

/**
 * Radio Props
 * Radio button input field props
 */
export interface RadioProps extends Omit<CheckboxProps, 'indeterminate'> {
  /**
   * The radio group name
   */
  name: string;
  
  /**
   * The radio value
   */
  value: string | number;
}

/**
 * Date Picker Props
 * Date selection field props
 */
export interface DatePickerProps extends Omit<InputProps, 'type' | 'value' | 'defaultValue' | 'onChange'> {
  /**
   * The selected date
   */
  value?: Date;
  
  /**
   * Default date for uncontrolled components
   */
  defaultValue?: Date;
  
  /**
   * Callback when the date changes
   */
  onChange?: (date: Date | null) => void;
  
  /**
   * Minimum selectable date
   */
  minDate?: Date;
  
  /**
   * Maximum selectable date
   */
  maxDate?: Date;
  
  /**
   * Date format for display
   * @default 'MM/dd/yyyy'
   */
  dateFormat?: string;
  
  /**
   * Whether to use sacred geometry for the calendar layout
   * @default true
   */
  useSacredGeometry?: boolean;
}

/**
 * Props for time picker component
 */
export interface TimePickerProps extends Omit<InputProps, 'type' | 'value' | 'defaultValue' | 'onChange'> {
  /**
   * The selected time
   */
  value?: string;
  
  /**
   * Default time for uncontrolled components
   */
  defaultValue?: string;
  
  /**
   * Callback when the time changes
   */
  onChange?: (time: string | null) => void;
  
  /**
   * Whether to use 24-hour format
   * @default false
   */
  use24Hour?: boolean;
  
  /**
   * Time step in minutes
   * @default 15
   */
  step?: number;
  
  /**
   * Whether to use a golden ratio grid for time selection
   * @default true
   */
  useGoldenRatioGrid?: boolean;
}

/**
 * Alert Component Props
 * 
 * Props for the Alert component which displays important messages
 * using sacred geometry principles.
 */
export interface AlertProps extends BoxProps {
  /**
   * Status of the alert - influences styling and icons
   * @default 'info'
   */
  status?: 'info' | 'success' | 'warning' | 'error';
  
  /**
   * Variant of the alert styling
   * @default 'solid'
   */
  variant?: 'solid' | 'subtle' | 'outline' | 'left-accent';
  
  /**
   * Whether the alert can be dismissed by the user
   * @default false
   */
  isDismissible?: boolean;
  
  /**
   * Callback when the alert is dismissed
   */
  onDismiss?: () => void;
  
  /**
   * Whether to show an icon based on the status
   * @default true
   */
  showIcon?: boolean;
  
  /**
   * Title text for the alert (optional)
   */
  title?: React.ReactNode;
  
  /**
   * Description or content of the alert
   */
  children: React.ReactNode;
  
  /**
   * Whether to use golden ratio based proportions
   * @default true
   */
  useGoldenRatio?: boolean;
}

/**
 * BadgeProps
 * 
 * Props for the Badge component which displays short status descriptors
 * following sacred geometry principles.
 */
export interface BadgeProps extends BoxProps {
  /**
   * Variant of the badge
   * @default 'solid'
   */
  variant?: 'solid' | 'subtle' | 'outline';
  
  /**
   * Status of the badge determining color
   * @default 'primary'
   */
  status?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  
  /**
   * Size of the badge based on Fibonacci sequence
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  
  /**
   * Shape of the badge following sacred geometry
   * @default 'rounded'
   */
  shape?: 'square' | 'rounded' | 'circle';
  
  /**
   * Whether the badge should be rounded to a circle
   * For badges with single characters/numbers
   * @default false
   */
  useGoldenCircle?: boolean;
  
  /**
   * Content of the badge
   */
  children: React.ReactNode;
}

/**
 * ModalProps
 * 
 * Props for the Modal component which displays focused content
 * with layouts based on sacred geometry principles.
 */
export interface ModalProps extends Omit<BoxProps, 'children'> {
  /**
   * Whether the modal is currently open
   * @default false
   */
  isOpen: boolean;
  
  /**
   * Callback when the modal is closed
   */
  onClose: () => void;
  
  /**
   * Whether to close the modal when clicking the overlay background
   * @default true
   */
  closeOnOverlayClick?: boolean;
  
  /**
   * Whether to close the modal when pressing the Escape key
   * @default true
   */
  closeOnEsc?: boolean;
  
  /**
   * Size of the modal
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  /**
   * Whether to center the modal vertically
   * @default true
   */
  isCentered?: boolean;
  
  /**
   * Whether to use sacred geometry proportions for dimensions
   * @default true
   */
  useSacredGeometry?: boolean;
  
  /**
   * Whether to trap focus inside the modal
   * @default true
   */
  trapFocus?: boolean;
  
  /**
   * Whether to block scrolling when the modal is open
   * @default true
   */
  blockScrollOnMount?: boolean;
  
  /**
   * Modal content components
   */
  children: React.ReactNode;
}

/**
 * Props for toast notification component
 */
export interface ToastProps extends Omit<AlertProps, 'isDismissible' | 'onDismiss' | 'position'> {
  /**
   * Duration in milliseconds that the toast appears
   * Uses Fibonacci sequence for timing
   * @default 5000
   */
  duration?: number;
  
  /**
   * Position of the toast
   * @default 'bottom'
   */
  position?: 'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  
  /**
   * Toast unique ID for management
   */
  id?: string;
  
  /**
   * Whether to use golden ratio based entrance/exit animations
   * @default true
   */
  useGoldenRatioAnimation?: boolean;
} 





