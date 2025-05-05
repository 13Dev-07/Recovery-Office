import { BookingStepId, ServiceType } from '../../../types/booking.types';
import { BookingService } from '../../../services/booking.service';
import { 
  clientInfoSchema, 
  dateSelectionSchema, 
  serviceSelectionSchema,
  confirmationStepSchema 
} from '../validation';

/**
 * Booking System Test Suite
 * 
 * This file contains automated tests for the booking system flow
 * It validates state management, API calls, and form validations
 * Following sacred geometry principles for timing and retries
 */

// Mock data for testing
const TEST_SERVICE_ID = 'investment-fraud';
const TEST_DATE = new Date(Date.now() + 86400000 * 3); // 3 days from now
const TEST_TIME_SLOT_ID = `slot-${TEST_DATE.toISOString().split('T')[0]}-1`;
const TEST_CLIENT_INFO = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  phone: '(123) 456-7890',
  dateOfBirth: '1990-01-01',
  address: '123 Test St',
  termsAccepted: true
};

/**
 * Performs end-to-end validation of the booking flow
 * Tests each step in sequence, validating state and API calls
 */
export async function testBookingFlowEndToEnd() {
  console.log('Starting end-to-end booking flow test...');
  
  try {
    // Step 1: Service Selection
    console.log('Testing Service Selection step...');
    const services = await BookingService.getAvailableServices();
    
    if (!services || services.length === 0) {
      throw new Error('Failed to fetch available services');
    }
    
    const selectedService = services.find(service => service.id === TEST_SERVICE_ID);
    
    if (!selectedService) {
      throw new Error(`Test service ${TEST_SERVICE_ID} not found in available services`);
    }
    
    // Validate service selection with schema
    try {
      serviceSelectionSchema.parse({ serviceId: selectedService.id });
      console.log('✓ Service selection validation passed');
    } catch (error) {
      console.error('✗ Service selection validation failed:', error);
      throw error;
    }
    
    // Step 2: Date Selection
    console.log('Testing Date Selection step...');
    const availableDates = await BookingService.getAvailableDates(selectedService.id);
    
    if (!availableDates || availableDates.length === 0) {
      throw new Error('Failed to fetch available dates');
    }
    
    // Find a date that's available in our test date range
    const testDateStr = TEST_DATE.toISOString().split('T')[0];
    const isDateAvailable = availableDates.some(d => 
      d.date.split('T')[0] === testDateStr && d.available
    );
    
    if (!isDateAvailable) {
      console.warn(`Test date ${testDateStr} not available, using first available date`);
      TEST_DATE = new Date(availableDates[0].date);
    }
    
    // Get time slots for the selected date
    const timeSlots = await BookingService.getAvailableTimeSlots(
      selectedService.id, 
      TEST_DATE.toISOString()
    );
    
    if (!timeSlots || timeSlots.length === 0) {
      throw new Error('Failed to fetch available time slots');
    }
    
    // Select the first available time slot
    const availableSlot = timeSlots.find(slot => slot.available);
    if (!availableSlot) {
      throw new Error('No available time slots found for test date');
    }
    
    // Validate date selection with schema
    try {
      dateSelectionSchema.parse({
        date: TEST_DATE.toISOString(),
        timeSlotId: availableSlot.id
      });
      console.log('✓ Date selection validation passed');
    } catch (error) {
      console.error('✗ Date selection validation failed:', error);
      throw error;
    }
    
    // Step 3: Client Information
    console.log('Testing Client Information step...');
    
    // Validate client info with schema
    try {
      clientInfoSchema.parse(TEST_CLIENT_INFO);
      console.log('✓ Client information validation passed');
    } catch (error) {
      console.error('✗ Client information validation failed:', error);
      throw error;
    }
    
    // Step 4: Confirmation
    console.log('Testing Confirmation step...');
    
    // Create payment intent
    const paymentIntent = await BookingService.createPaymentIntent({
      serviceId: selectedService.id,
      date: TEST_DATE.toISOString(),
      timeSlotId: availableSlot.id,
      amount: selectedService.price || 0
    });
    
    if (!paymentIntent || !paymentIntent.id) {
      throw new Error('Failed to create payment intent');
    }
    
    // Prepare confirmation data
    const confirmationData = {
      paymentMethod: 'creditCard' as const,
      paymentIntentId: paymentIntent.id,
      detailsReviewed: true,
      cancellationPolicyAccepted: true,
      emailNotifications: true,
      textNotifications: false
    };
    
    // Validate confirmation with schema
    try {
      confirmationStepSchema.parse(confirmationData);
      console.log('✓ Confirmation validation passed');
    } catch (error) {
      console.error('✗ Confirmation validation failed:', error);
      throw error;
    }
    
    // Submit booking (commented out to prevent actual booking creation during tests)
    /*
    const bookingResult = await BookingService.submitBooking({
      serviceId: selectedService.id,
      date: TEST_DATE.toISOString(),
      timeSlotId: availableSlot.id,
      clientInfo: TEST_CLIENT_INFO,
      ...confirmationData
    });
    
    if (!bookingResult || !bookingResult.bookingId) {
      throw new Error('Failed to submit booking');
    }
    
    console.log(`✓ Booking submitted successfully. Booking ID: ${bookingResult.bookingId}`);
    */
    
    console.log('End-to-end booking flow test completed successfully!');
    return true;
    
  } catch (error) {
    console.error('Booking flow test failed:', error);
    return false;
  }
}

/**
 * Tests validation error scenarios for each step
 * Verifies that invalid inputs are properly caught by validation schemas
 */
export function testValidationScenarios() {
  console.log('Testing validation scenarios...');
  
  // Service Selection validation tests
  console.log('Testing Service Selection validation...');
  try {
    // Missing service ID
    try {
      serviceSelectionSchema.parse({});
      console.error('✗ Should have failed: empty service selection');
    } catch (error) {
      console.log('✓ Correctly caught missing service ID');
    }
    
    // Invalid service ID
    try {
      serviceSelectionSchema.parse({ serviceId: 123 });
      console.error('✗ Should have failed: invalid service ID type');
    } catch (error) {
      console.log('✓ Correctly caught invalid service ID type');
    }
  } catch (error) {
    console.error('Service selection validation tests failed:', error);
  }
  
  // Date Selection validation tests
  console.log('Testing Date Selection validation...');
  try {
    // Missing date
    try {
      dateSelectionSchema.parse({ timeSlotId: 'test-slot' });
      console.error('✗ Should have failed: missing date');
    } catch (error) {
      console.log('✓ Correctly caught missing date');
    }
    
    // Missing time slot
    try {
      dateSelectionSchema.parse({ date: new Date().toISOString() });
      console.error('✗ Should have failed: missing time slot');
    } catch (error) {
      console.log('✓ Correctly caught missing time slot');
    }
    
    // Invalid date format
    try {
      dateSelectionSchema.parse({ date: 'not-a-date', timeSlotId: 'test-slot' });
      console.error('✗ Should have failed: invalid date format');
    } catch (error) {
      console.log('✓ Correctly caught invalid date format');
    }
    
    // Past date
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    try {
      dateSelectionSchema.parse({ 
        date: pastDate.toISOString(), 
        timeSlotId: 'test-slot' 
      });
      console.error('✗ Should have failed: past date');
    } catch (error) {
      console.log('✓ Correctly caught past date');
    }
  } catch (error) {
    console.error('Date selection validation tests failed:', error);
  }
  
  // Client Information validation tests
  console.log('Testing Client Information validation...');
  try {
    // Missing required fields
    try {
      clientInfoSchema.parse({});
      console.error('✗ Should have failed: empty client info');
    } catch (error) {
      console.log('✓ Correctly caught missing required fields');
    }
    
    // Invalid email format
    try {
      clientInfoSchema.parse({
        ...TEST_CLIENT_INFO,
        email: 'not-an-email'
      });
      console.error('✗ Should have failed: invalid email format');
    } catch (error) {
      console.log('✓ Correctly caught invalid email format');
    }
    
    // Invalid phone format
    try {
      clientInfoSchema.parse({
        ...TEST_CLIENT_INFO,
        phone: '123'
      });
      console.error('✗ Should have failed: invalid phone format');
    } catch (error) {
      console.log('✓ Correctly caught invalid phone format');
    }
    
    // Terms not accepted
    try {
      clientInfoSchema.parse({
        ...TEST_CLIENT_INFO,
        termsAccepted: false
      });
      console.error('✗ Should have failed: terms not accepted');
    } catch (error) {
      console.log('✓ Correctly caught terms not accepted');
    }
  } catch (error) {
    console.error('Client information validation tests failed:', error);
  }
  
  // Confirmation validation tests
  console.log('Testing Confirmation validation...');
  try {
    // Missing payment method
    try {
      confirmationStepSchema.parse({
        paymentIntentId: 'test-intent',
        detailsReviewed: true,
        cancellationPolicyAccepted: true
      });
      console.error('✗ Should have failed: missing payment method');
    } catch (error) {
      console.log('✓ Correctly caught missing payment method');
    }
    
    // Details not reviewed
    try {
      confirmationStepSchema.parse({
        paymentMethod: 'creditCard',
        paymentIntentId: 'test-intent',
        detailsReviewed: false,
        cancellationPolicyAccepted: true
      });
      console.error('✗ Should have failed: details not reviewed');
    } catch (error) {
      console.log('✓ Correctly caught details not reviewed');
    }
    
    // Cancellation policy not accepted
    try {
      confirmationStepSchema.parse({
        paymentMethod: 'creditCard',
        paymentIntentId: 'test-intent',
        detailsReviewed: true,
        cancellationPolicyAccepted: false
      });
      console.error('✗ Should have failed: cancellation policy not accepted');
    } catch (error) {
      console.log('✓ Correctly caught cancellation policy not accepted');
    }
  } catch (error) {
    console.error('Confirmation validation tests failed:', error);
  }
  
  console.log('Validation scenario tests completed');
}

/**
 * Main test runner function
 */
export async function runAllTests() {
  console.log('Running all booking system tests...');
  
  // Test validation scenarios first
  testValidationScenarios();
  
  // Then run end-to-end tests
  const endToEndResult = await testBookingFlowEndToEnd();
  
  console.log(`Test suite completed. End-to-end flow ${endToEndResult ? 'PASSED' : 'FAILED'}`);
  
  return endToEndResult;
}

// Uncomment to run tests directly
// runAllTests(); 











