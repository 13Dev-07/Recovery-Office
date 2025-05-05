/**
 * Booking Validation Schemas Index
 * 
 * This file exports all validation schemas for the booking system.
 * Each schema uses Zod for validation and implements sacred geometry principles.
 */

// Export service selection schema
export { 
  serviceSelectionSchema,
  ServiceSelectionData,
  serviceSelectionDefaultValues,
  validateServiceSelection,
  validateField as validateServiceField
} from './serviceSelection.schema';

// Export date selection schema
export {
  dateSelectionSchema,
  DateSelectionData,
  dateSelectionDefaultValues,
  validateDateSelection,
  validateField as validateDateField
} from './dateSelection.schema';

// Export client info schema
export {
  clientInfoSchema,
  ClientInfoData,
  clientInfoDefaultValues,
  validateClientInfo,
  validateField as validateClientInfoField
} from './clientInfo.schema';

// Export confirmation step schema
export {
  confirmationStepSchema,
  ConfirmationStepData,
  confirmationStepDefaultValues,
  validateConfirmationStep,
  validateField as validateConfirmationField
} from './confirmationStep.schema';

// Export client information schema
export {
  clientInformationSchema,
  ClientInformationData,
  clientInformationDefaultValues,
  validateClientInformation,
  validateField as validateClientInformationField
} from './clientInformation.schema'; 











