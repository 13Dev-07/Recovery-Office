import * as React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { format } from 'date-fns';
import { useBooking } from '@context/BookingContext';



// Styled components following sacred geometry principles
const Container = styled.div`
  width: 100%;
  max-width: ${getFibonacciByIndex(13)}px;
  margin: 0 auto;
  padding: ${getFibonacciByIndex(8)}px;
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.background.paper};
  border-radius: ${getFibonacciByIndex(5)}px;
  box-shadow: 0 ${getFibonacciByIndex(4)}px ${getFibonacciByIndex(6)}px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: ${getFibonacciByIndex(8)}px;
  padding-bottom: ${getFibonacciByIndex(7)}px;
  border-bottom: 1px solid ${(props: { theme: DefaultTheme }) => props.theme.colors.divider};
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const SectionTitle = styled.h3`
  font-size: ${getFibonacciByIndex(7)}px;
  margin: 0 0 ${getFibonacciByIndex(6)}px 0;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text.primary};
  font-weight: 600;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${getFibonacciByIndex(5)}px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  font-weight: 500;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text.secondary};
  flex: 0 0 38.2%; /* Based on inverse PHI ratio (1 - 1/PHI) */
`;

const Value = styled.span`
  flex: 0 0 61.8%; /* Based on PHI ratio (1/PHI) */
  text-align: right;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text.primary};
`;

const ServiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${getFibonacciByIndex(5)}px 0;
  border-bottom: 1px dashed ${(props: { theme: DefaultTheme }) => props.theme.colors.divider};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ServiceName = styled.span`
  font-weight: 500;
`;

const ServicePrice = styled.span`
  font-weight: 600;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${getFibonacciByIndex(6)}px;
  margin-top: ${getFibonacciByIndex(6)}px;
  border-top: 2px solid ${(props: { theme: DefaultTheme }) => props.theme.colors.primary[500]};
  font-size: ${getFibonacciByIndex(6)}px;
  font-weight: 700;
`;

const ConfirmationMessage = styled.div`
  text-align: center;
  margin: ${getFibonacciByIndex(8)}px 0;
  padding: ${getFibonacciByIndex(7)}px;
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.success.light};
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.success.dark};
  border-radius: ${getFibonacciByIndex(5)}px;
  font-size: ${getFibonacciByIndex(6)}px;
  font-weight: 600;
`;

const BookingSummary: React.FC = () => {
  const { 
    selectedServices, 
    selectedDate, 
    selectedTime,
    customerInfo,
    bookingComplete,
    bookingReference
  } = useBooking();
  
  // Calculate total price of all selected services
  const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);
  
  // Format date for display
  const formattedDate = selectedDate 
    ? format(selectedDate, 'EEEE, MMMM do, yyyy')
    : 'Not selected';
    
  if (bookingComplete && bookingReference) {
    return (
      <Container>
        <ConfirmationMessage>
          Your booking has been confirmed! <br />
          Reference number: {bookingReference}
        </ConfirmationMessage>
        
        <Section>
          <SectionTitle>Services Booked</SectionTitle>
          {selectedServices.map(service => (
            <ServiceItem key={service.id}>
              <ServiceName>{service.name}</ServiceName>
              <ServicePrice>${service.price.toFixed(2)}</ServicePrice>
            </ServiceItem>
          ))}
          <TotalRow>
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </TotalRow>
        </Section>
        
        <Section>
          <SectionTitle>Appointment Details</SectionTitle>
          <ContentRow>
            <Label>Date:</Label>
            <Value>{formattedDate}</Value>
          </ContentRow>
          <ContentRow>
            <Label>Time:</Label>
            <Value>{selectedTime || 'Not selected'}</Value>
          </ContentRow>
        </Section>
        
        {customerInfo && (
          <Section>
            <SectionTitle>Your Information</SectionTitle>
            <ContentRow>
              <Label>Name:</Label>
              <Value>{`${customerInfo.firstName} ${customerInfo.lastName}`}</Value>
            </ContentRow>
            <ContentRow>
              <Label>Email:</Label>
              <Value>{customerInfo.email}</Value>
            </ContentRow>
            <ContentRow>
              <Label>Phone:</Label>
              <Value>{customerInfo.phone}</Value>
            </ContentRow>
            {customerInfo.address && (
              <ContentRow>
                <Label>Address:</Label>
                <Value>{customerInfo.address}</Value>
              </ContentRow>
            )}
            {customerInfo.notes && (
              <ContentRow>
                <Label>Additional Notes:</Label>
                <Value>{customerInfo.notes}</Value>
              </ContentRow>
            )}
          </Section>
        )}
      </Container>
    );
  }
  
  return (
    <Container>
      <Section>
        <SectionTitle>Selected Services</SectionTitle>
        {selectedServices.length === 0 ? (
          <ContentRow>
            <span>No services selected</span>
          </ContentRow>
        ) : (
          <>
            {selectedServices.map(service => (
              <ServiceItem key={service.id}>
                <ServiceName>{service.name}</ServiceName>
                <ServicePrice>${service.price.toFixed(2)}</ServicePrice>
              </ServiceItem>
            ))}
            <TotalRow>
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </TotalRow>
          </>
        )}
      </Section>
      
      <Section>
        <SectionTitle>Appointment Details</SectionTitle>
        <ContentRow>
          <Label>Date:</Label>
          <Value>{formattedDate}</Value>
        </ContentRow>
        <ContentRow>
          <Label>Time:</Label>
          <Value>{selectedTime || 'Not selected'}</Value>
        </ContentRow>
      </Section>
      
      {customerInfo && (
        <Section>
          <SectionTitle>Your Information</SectionTitle>
          <ContentRow>
            <Label>Name:</Label>
            <Value>{`${customerInfo.firstName} ${customerInfo.lastName}`}</Value>
          </ContentRow>
          <ContentRow>
            <Label>Email:</Label>
            <Value>{customerInfo.email}</Value>
          </ContentRow>
          <ContentRow>
            <Label>Phone:</Label>
            <Value>{customerInfo.phone}</Value>
          </ContentRow>
          {customerInfo.address && (
            <ContentRow>
              <Label>Address:</Label>
              <Value>{customerInfo.address}</Value>
            </ContentRow>
          )}
          {customerInfo.notes && (
            <ContentRow>
              <Label>Additional Notes:</Label>
              <Value>{customerInfo.notes}</Value>
            </ContentRow>
          )}
        </Section>
      )}
    </Container>
  );
};

export default BookingSummary; 














