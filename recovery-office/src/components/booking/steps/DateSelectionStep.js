"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateSelectionStep = void 0;
var React = require("react");
;
var Box_1 = require("@design-system/components/layout/Box");
var Text_1 = require("@design-system/components/typography/Text");
var Calendar_1 = require("@design-system/components/form/Calendar");
var TimeSlotList_1 = require("../TimeSlotList");
var BookingContext_1 = require("@context/BookingContext");
var MobileCalendarModal_1 = require("../MobileCalendarModal");
var date_fns_1 = require("date-fns");
var useBreakpointValue_1 = require("@hooks/useBreakpointValue");
var sacred_geometry_1 = require("@constants/sacred-geometry");
var Button_1 = require("@design-system/components/button/Button");
var LoadingOverlay_1 = require("@design-system/components/feedback/LoadingOverlay");
var ErrorDisplay_1 = require("@design-system/components/feedback/ErrorDisplay");
var useBookingStepValidation_1 = require("@hooks/useBookingStepValidation");
var booking_types_1 = require("@types/booking.types");
var dateSelection_schema_1 = require("@components/booking/validation/dateSelection.schema");
var BotanicalIcon_1 = require("@design-system/botanical/BotanicalIcon");
var VisuallyHidden_1 = require("@design-system/components/utils/VisuallyHidden");
/**
 * DateSelectionStep Component
 *
 * Handles date and time slot selection for the booking process
 * Supports tablet-specific rendering by splitting into calendar and time selection views
 * Implements responsive design with mobile-specific calendar modal
 * Ensures proper accessibility with ARIA attributes and keyboard navigation
 */
var DateSelectionStep = function (_a) {
    var _b = _a.isCalendarOnly, isCalendarOnly = _b === void 0 ? false : _b, _c = _a.isTimeSelectionOnly, isTimeSelectionOnly = _c === void 0 ? false : _c;
    var _d = (0, BookingContext_1.useBooking)(), state = _d.state, fetchAvailableDates = _d.fetchAvailableDates, fetchAvailableTimeSlots = _d.fetchAvailableTimeSlots, selectDate = _d.selectDate, selectTimeSlot = _d.selectTimeSlot, isResourceLoading = _d.isResourceLoading, hasApiError = _d.hasApiError, getApiErrorForResource = _d.getApiErrorForResource;
    // Get breakpoint to determine which view to show
    var isMobile = (0, useBreakpointValue_1.useBreakpointValue)({ base: true, md: false });
    var isTablet = (0, useBreakpointValue_1.useBreakpointValue)({ base: false, md: true, lg: false });
    // Local state
    var _e = React.useState(false), isCalendarModalOpen = _e[0], setCalendarModalOpen = _e[1];
    var _f = useState(''), announcementText = _f[0], setAnnouncementText = _f[1];
    // Get data from context state
    var selectedService = state.selectedService, selectedDate = state.selectedDate, selectedTimeSlot = state.selectedTimeSlot;
    // Validation
    var _g = (0, useBookingStepValidation_1.useBookingStepValidation)(booking_types_1.BookingStepId.DATE_SELECTION, dateSelection_schema_1.dateSelectionSchema), validateField = _g.validateField, errors = _g.errors, resetErrors = _g.resetErrors;
    // Check loading states
    var isLoadingDates = isResourceLoading('dates');
    var isLoadingTimeSlots = isResourceLoading('timeSlots');
    // Get errors
    var datesError = getApiErrorForResource('dates');
    var timeSlotsError = getApiErrorForResource('timeSlots');
    // Load available dates when component mounts or when service changes
    React.useEffect(function () {
        if (selectedService === null || selectedService === void 0 ? void 0 : selectedService.id) {
            fetchAvailableDates('', '', selectedService.id);
        }
    }, [selectedService === null || selectedService === void 0 ? void 0 : selectedService.id, fetchAvailableDates]);
    // Load time slots when date changes
    React.useEffect(function () {
        if (selectedDate && (selectedService === null || selectedService === void 0 ? void 0 : selectedService.id)) {
            fetchAvailableTimeSlots(selectedDate, selectedService.id);
        }
    }, [selectedDate, selectedService === null || selectedService === void 0 ? void 0 : selectedService.id, fetchAvailableTimeSlots]);
    // Handle date selection
    var handleDateSelect = function (newDate) {
        var formattedDate = (0, date_fns_1.startOfDay)(newDate).toISOString();
        // Update date in context and reset time slot
        selectDate(formattedDate);
        // Validate selected date
        validateField('selectedDate', formattedDate);
        // Close mobile modal if open
        setCalendarModalOpen(false);
        // Announce date selection to screen readers
        var dateAnnouncement = "Date selected: ".concat((0, date_fns_1.format)(newDate, 'EEEE, MMMM d, yyyy'));
        setAnnouncementText(dateAnnouncement);
    };
    // Handle time slot selection
    var handleTimeSlotSelect = function (id) {
        var _a;
        // Find the selected time slot
        var timeSlot = (_a = state.availableTimeSlots) === null || _a === void 0 ? void 0 : _a.find(function (slot) { return slot.id === id; });
        if (timeSlot) {
            // Create BookingTimeSlot from API TimeSlot
            var bookingTimeSlot = {
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
            var timeAnnouncement = "Time selected: ".concat(timeSlot.startTime);
            setAnnouncementText(timeAnnouncement);
        }
    };
    // Format a text representation of the selected date and time
    var getFormattedDateTime = function () {
        var _a;
        if (!selectedDate)
            return '';
        var date = new Date(selectedDate);
        var dateStr = (0, date_fns_1.format)(date, 'EEEE, MMMM d, yyyy');
        if (!selectedTimeSlot || !((_a = state.availableTimeSlots) === null || _a === void 0 ? void 0 : _a.length))
            return dateStr;
        return "".concat(dateStr, " at ").concat(selectedTimeSlot.startTime);
    };
    // Handle retry for API errors
    var handleRetry = function () {
        resetErrors();
        if (selectedService === null || selectedService === void 0 ? void 0 : selectedService.id) {
            fetchAvailableDates('', '', selectedService.id, true);
            if (selectedDate) {
                fetchAvailableTimeSlots(selectedDate, selectedService.id, true);
            }
        }
    };
    // Renders the calendar view
    var renderCalendarView = function () { return (<Box_1.Box position="relative">
      {isLoadingDates && <LoadingOverlay_1.LoadingOverlay isOpen={true} message="Loading available dates..."/>}
      
      {hasApiError() && datesError ? (<ErrorDisplay_1.ErrorDisplay title="Unable to load available dates" message={datesError} actionItems={[{ label: "Try Again", onClick: handleRetry, primary: true }]}/>) : (<>
          {isMobile ? (<Box_1.Box>
              <Box_1.Flex alignItems="center" justifyContent="space-between" mb={sacred_geometry_1.SACRED_SPACING.sm}>
                <Box_1.Box>
                  <Heading as="h3" fontfontSize="md" mb={2}>
                    Select Date
                  </Heading>
                  {selectedDate && (<Text_1.Text color="primary.600" fontWeight="semibold" aria-live="polite">
                      {(0, date_fns_1.format)(new Date(selectedDate), 'EEEE, MMMM d, yyyy')}
                    </Text_1.Text>)}
                </Box_1.Box>
                <Button_1.Button variant="outline" onClick={function () { return setCalendarModalOpen(true); }} leftIcon={<BotanicalIcon_1.BotanicalIcon name="calendar" size="sm"/>} aria-label="Open date selection calendar">
                  {selectedDate ? 'Change Date' : 'Select Date'}
                </Button_1.Button>
              </Box_1.Flex>
              
              <MobileCalendarModal_1.MobileCalendarModal isOpen={isCalendarModalOpen} onClose={function () { return setCalendarModalOpen(false); }} selectedDate={selectedDate ? new Date(selectedDate) : undefined} availableDates={state.availableDates || []} onDateSelect={handleDateSelect}/>
            </Box_1.Box>) : (<Box_1.Box role="region" aria-label="Calendar date selection">
              {!isTimeSelectionOnly && (<Heading as="h3" fontfontSize="md" mb={sacred_geometry_1.SACRED_SPACING.sm} id="calendar-heading">
                  Select Date & Time
                </Heading>)}
              
              <Calendar_1.Calendar selectedDate={selectedDate ? new Date(selectedDate) : undefined} onSelectDate={handleDateSelect} availableDates={state.availableDates || []} error={errors.selectedDate} aria-labelledby={!isTimeSelectionOnly ? "calendar-heading" : undefined} aria-label={isTimeSelectionOnly ? "Date selection calendar" : undefined}/>
            </Box_1.Box>)}
        </>)}
    </Box_1.Box>); };
    // Renders the time selection view
    var renderTimeSelectionView = function () { return (<Box_1.Box position="relative">
      {isLoadingTimeSlots && <LoadingOverlay_1.LoadingOverlay isOpen={true} message="Loading available times..."/>}
      
      {hasApiError() && timeSlotsError ? (<ErrorDisplay_1.ErrorDisplay title="Unable to load time slots" message={timeSlotsError} actionItems={[{ label: "Try Again", onClick: handleRetry, primary: true }]}/>) : (<Box_1.Box role="region" aria-label="Time slot selection">
          {!isCalendarOnly && !isMobile && (<Heading as="h3" fontfontSize="md" mb={sacred_geometry_1.SACRED_SPACING.sm} id="time-slots-heading">
              {isTablet && isTimeSelectionOnly ? 'Available Times' : 'Select Date & Time'}
            </Heading>)}
          
          {selectedDate ? (<>
              {!isTimeSelectionOnly && !isTablet && (<Text_1.Text mb={sacred_geometry_1.SACRED_SPACING.xs} fontWeight="medium" aria-live="polite">
                  Available times for {(0, date_fns_1.format)(new Date(selectedDate), 'EEEE, MMMM d, yyyy')}:
                </Text_1.Text>)}
              
              <TimeSlotList_1.TimeSlotList timeSlots={state.availableTimeSlots || []} selectedTimeSlotId={selectedTimeSlot === null || selectedTimeSlot === void 0 ? void 0 : selectedTimeSlot.id} onSelectTimeSlot={handleTimeSlotSelect} error={errors.selectedTimeSlot} aria-labelledby={!isTimeSelectionOnly ? "time-slots-heading" : undefined} aria-label={isTimeSelectionOnly ? "Available appointment times" : undefined}/>
            </>) : (<Text_1.Text color="text.subtle">
              Please select a date {isTablet && isTimeSelectionOnly ? 'on the left' : ''} to view available time slots.
            </Text_1.Text>)}
        </Box_1.Box>)}
    </Box_1.Box>); };
    // For tablet split view mode, we render either just the calendar or just the time selection
    if (isCalendarOnly) {
        return renderCalendarView();
    }
    if (isTimeSelectionOnly) {
        return renderTimeSelectionView();
    }
    // For mobile or desktop, we render the complete view
    return (<Box_1.VStack spacing={sacred_geometry_1.SACRED_SPACING.lg} align="stretch" width="100%">
      {/* Visually hidden live region for screen reader announcements */}
      <VisuallyHidden_1.VisuallyHidden aria-live="assertive" aria-atomic="true">
        {announcementText}
      </VisuallyHidden_1.VisuallyHidden>
      
      <Box_1.Box>
        <Heading as="h2" fontfontSize="lg" mb={sacred_geometry_1.SACRED_SPACING.xxs} id="date-selection-heading">
          Choose Your Appointment Date & Time
        </Heading>
        <Text_1.Text color="text.subtle">
          Select a date and time that works best for your {(selectedService === null || selectedService === void 0 ? void 0 : selectedService.name) || 'appointment'}.
        </Text_1.Text>
      </Box_1.Box>
      
      {renderCalendarView()}
      {renderTimeSelectionView()}
      
      {selectedDate && selectedTimeSlot && (<Box_1.Box p={sacred_geometry_1.SACRED_SPACING.sm} bg="primary.50" borderRadius="md" borderLeft={"".concat(sacred_geometry_1.PHI, "px solid")} borderLeftColor="primary.500" aria-live="polite" aria-atomic="true">
          <Heading as="h4" fontfontSize="sm" mb={1}>
            Your Selected Appointment
          </Heading>
          <Text_1.Text fontWeight="medium">{getFormattedDateTime()}</Text_1.Text>
        </Box_1.Box>)}
    </Box_1.VStack>);
};
exports.DateSelectionStep = DateSelectionStep;
