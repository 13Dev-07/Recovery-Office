import { z } from 'zod';


/**
 * Validation schema for the client information step
 * Enforces that required client information has been provided
 * Implements comprehensive validation with sacred proportions
 */
export const clientInfoSchema = z.object({
  /**
   * First name
   * Must be a non-empty string with reasonable length and character constraints
   */
  firstName: z.string({
    required_error: "First name is required",
    invalid_type_error: "First name must be a string",
  }).min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s-']+$/, "First name can only contain letters, spaces, hyphens, and apostrophes")
    .transform(val => val.trim()),
  
  /**
   * Last name
   * Must be a non-empty string with reasonable length and character constraints
   */
  lastName: z.string({
    required_error: "Last name is required",
    invalid_type_error: "Last name must be a string",
  }).min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s-']+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes")
    .transform(val => val.trim()),
  
  /**
   * Email address
   * Must be a valid email format with additional constraints
   */
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  }).min(5, "Email must be at least 5 characters")
    .max(100, "Email cannot exceed 100 characters")
    .email("Please enter a valid email address")
    .transform(val => val.trim().toLowerCase()),
  
  /**
   * Phone number
   * Must follow international phone number format
   */
  phone: z.string({
    required_error: "Phone number is required",
    invalid_type_error: "Phone number must be a string",
  }).min(10, "Phone number must be at least 10 digits")
    .regex(
      /^(\+\d{1,3})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Please enter a valid phone number (e.g., +1 555-123-4567 or (555) 123-4567)"
    )
    .transform(val => val.replace(/\s+/g, ' ').trim()),
  
  /**
   * Date of birth
   * Optional, but if provided must be a valid date in the past
   */
  dateOfBirth: z.string()
    .optional()
    .refine(val => {
      if (!val) return true; // Optional field
      const date = new Date(val);
      const today = new Date();
      // Must be a valid date in the past and person must be at least 18 years old
      return !isNaN(date.getTime()) && 
             date < today && 
             (today.getFullYear() - date.getFullYear()) >= 18;
    }, "Please enter a valid date of birth (must be at least 18 years old)"),
  
  /**
   * Preferred contact method
   * Must be one of the allowed values
   */
  preferredContactMethod: z.enum(["email", "phone", "text"], {
    required_error: "Please select a preferred contact method",
    invalid_type_error: "Invalid contact method selected",
  }),
  
  /**
   * Whether the person is a new client
   * Must be a boolean value
   */
  isNewClient: z.boolean({
    required_error: "Please indicate if you are a new client",
    invalid_type_error: "New client status must be a boolean",
  }),
  
  /**
   * Additional notes
   * Optional, but if provided, should have a reasonable length
   */
  additionalNotes: z.string()
    .max(500, "Notes cannot exceed 500 characters")
    .optional()
    .transform(val => val ? val.trim() : val),
  
  /**
   * Terms and privacy policy acceptance
   * Must be true to proceed
   */
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" })
  }),
}).refine(
  // Conditional validation: if preferred contact method is phone,
  // ensure phone number is provided
  (data) => {
    return data.preferredContactMethod !== "phone" || 
           (data.phone && data.phone.length > 0);
  },
  {
    message: "Phone number is required when 'Phone' is selected as preferred contact method",
    path: ["phone"]
  }
).refine(
  // Conditional validation: if preferred contact method is email,
  // ensure email is provided
  (data) => {
    return data.preferredContactMethod !== "email" || 
           (data.email && data.email.length > 0);
  },
  {
    message: "Email is required when 'Email' is selected as preferred contact method",
    path: ["email"]
  }
);

/**
 * Type definition for the validated client information data
 * Generated from the Zod schema
 */
export type ClientInfoData = z.infer<typeof clientInfoSchema>;

/**
 * Default values for client information
 * Used for initializing the form
 */
export const clientInfoDefaultValues: Partial<ClientInfoData> = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredContactMethod: "email",
  isNewClient: true,
  additionalNotes: "",
  termsAccepted: undefined,
};

/**
 * Field-specific validation for real-time feedback
 * Validates individual fields as the user types
 * 
 * @param field The field name to validate
 * @param value The current value of the field
 * @returns Validation error message or null if valid
 */
export const validateField = (field: keyof ClientInfoData, value: any): string | null => {
  try {
    // Special case handling for boolean literal fields
    if (field === 'termsAccepted') {
      if (value !== true) {
        return "You must accept the terms and conditions";
      }
      return null;
    }

    // Create a test object with all default values
    const testObject = { ...clientInfoDefaultValues } as any;
    
    // Set the field we want to test
    testObject[field] = value;
    
    // Use the full schema but extract only errors for our field
    clientInfoSchema.parse(testObject);
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Find errors related to our field
      const fieldError = error.errors.find(err => {
        return err.path.length > 0 && err.path[0] === field;
      });
      
      return fieldError?.message || null;
    }
    return `Invalid ${field}`;
  }
};

/**
 * Validate client information data
 * Returns validation result with success flag and either data or error messages
 * 
 * @param data The client information data to validate
 * @returns Validation result
 */
export const validateClientInfo = (data: unknown) => {
  try {
    const validData = clientInfoSchema.parse(data);
    return {
      success: true,
      data: validData,
      errors: null,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Convert Zod errors to a more usable format
      const formattedErrors = error.errors.reduce((acc, curr) => {
        // Handle both direct path errors and refinement errors
        const path = curr.path.length > 0 ? curr.path[0] as keyof ClientInfoData : 
                                        curr.code === 'custom' ? curr.params?.path as keyof ClientInfoData : 
                                        'form';
        
        acc[path] = curr.message;
        return acc;
      }, {} as Partial<Record<keyof ClientInfoData | 'form', string>>);
      
      return {
        success: false,
        data: null,
        errors: formattedErrors,
      };
    }
    
    // Handle unexpected errors
    return {
      success: false,
      data: null,
      errors: { 
        form: "An unexpected error occurred. Please try again.",
      },
    };
  }
}; 












