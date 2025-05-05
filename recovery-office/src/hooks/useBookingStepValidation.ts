import * as React from 'react';
import { useCallback } from 'react';;
import { useBookingContext } from '../context/BookingContext';
import { BookingStepId } from '../types/booking.types';
import { serviceSelectionSchema } from '../components/booking/validation/serviceSelection.schema';
import { dateSelectionSchema } from '../components/booking/validation/dateSelection.schema';
import { clientInfoSchema } from '../components/booking/validation/clientInfo.schema';
import { confirmationStepSchema } from '../components/booking/validation/confirmationStep.schema';
import { toast } from '../design-system/components/feedback/Toast';

/**
 * Custom hook for booking step validation
 * Provides functions to validate the current booking step using Zod schemas
 */
export const useBookingStepValidation = () => {
  const { state, goToStep, createPaymentIntent } = useBookingContext();
  const { currentStep, formData } = state;

  /**
   * Validates the current step based on its ID
   * Uses the appropriate Zod schema for each step
   * @returns {Promise<boolean>} Whether the step is valid
   */
  const validateCurrentStep = useCallback(async (): Promise<boolean> => {
    try {
      switch (currentStep) {
        case BookingStepId.SERVICE_SELECTION: {
          // Validate service selection
          serviceSelectionSchema.parse(formData);
          return true;
        }
        
        case BookingStepId.DATE_SELECTION: {
          // Validate date selection
          dateSelectionSchema.parse(formData);
          return true;
        }
        
        case BookingStepId.CLIENT_INFORMATION: {
          // Validate client information
          clientInfoSchema.parse(formData);
          return true;
        }
        
        case BookingStepId.CONFIRMATION: {
          // For confirmation step, we need to create a payment intent first if not present
          if (!formData.paymentIntentId) {
            await createPaymentIntent();
          }
          
          // Then validate the confirmation step data
          confirmationStepSchema.parse(formData);
          return true;
        }
        
        default:
          return true;
      }
    } catch (error) {
      // If validation fails, show error toast
      if (error instanceof Error) {
        toast({
          title: 'Validation Error',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
      return false;
    }
  }, [currentStep, formData, createPaymentIntent]);

  /**
   * Checks if the current step is valid without showing errors
   * @returns {boolean} Whether the current step is valid
   */
  const isCurrentStepValid = useCallback((): boolean => {
    try {
      switch (currentStep) {
        case BookingStepId.SERVICE_SELECTION: {
          serviceSelectionSchema.parse(formData);
          return true;
        }
        
        case BookingStepId.DATE_SELECTION: {
          dateSelectionSchema.parse(formData);
          return true;
        }
        
        case BookingStepId.CLIENT_INFORMATION: {
          clientInfoSchema.parse(formData);
          return true;
        }
        
        case BookingStepId.CONFIRMATION: {
          // For validation checking (not actual submission), we'll skip payment intent check
          // and just validate the other fields
          const { paymentMethod, termsAccepted, cancellationPolicyAccepted } = formData;
          return !!(paymentMethod && termsAccepted && cancellationPolicyAccepted);
        }
        
        default:
          return true;
      }
    } catch (error) {
      return false;
    }
  }, [currentStep, formData]);

  /**
   * Validates all steps up to the current one
   * @returns {boolean} Whether all steps up to the current one are valid
   */
  const validateAllStepsUpToCurrent = useCallback((): boolean => {
    try {
      // Service selection is always required
      serviceSelectionSchema.parse(formData);
      
      // Check subsequent steps based on current step
      if (currentStep >= BookingStepId.DATE_SELECTION) {
        dateSelectionSchema.parse(formData);
      }
      
      if (currentStep >= BookingStepId.CLIENT_INFORMATION) {
        clientInfoSchema.parse(formData);
      }
      
      return true;
    } catch (error) {
      return false;
    }
  }, [currentStep, formData]);

  /**
   * Validates all required steps and navigates to the first invalid step
   * Useful for reviewing the booking before submission
   */
  const validateAndNavigateToFirstInvalidStep = useCallback((): boolean => {
    try {
      // Check service selection
      serviceSelectionSchema.parse(formData);
    } catch (error) {
      goToStep(BookingStepId.SERVICE_SELECTION);
      return false;
    }
    
    try {
      // Check date selection
      dateSelectionSchema.parse(formData);
    } catch (error) {
      goToStep(BookingStepId.DATE_SELECTION);
      return false;
    }
    
    try {
      // Check client information
      clientInfoSchema.parse(formData);
    } catch (error) {
      goToStep(BookingStepId.CLIENT_INFORMATION);
      return false;
    }
    
    return true;
  }, [formData, goToStep]);

  return {
    validateCurrentStep,
    isCurrentStepValid,
    validateAllStepsUpToCurrent,
    validateAndNavigateToFirstInvalidStep
  };
}; 






