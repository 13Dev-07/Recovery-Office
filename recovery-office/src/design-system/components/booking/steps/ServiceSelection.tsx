/**
 * ServiceSelection Component
 * 
 * First step in the booking process where users select the service they want.
 * Uses sacred geometry principles for layout and spacing.
 */

import * as React from 'react';
import { useContext } from 'react';;
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';


import { BookingContext } from '../state';
import { getStepErrors } from '../validation';
import { Card } from '../../data-display/Card';
import { Text } from '../../typography/Text';
import { OliveBranch, FlowerOfLife, VesicaPiscis } from '../../botanical';
import { theme } from '../../../theme';

/**
 * Array of available services
 */
const SERVICES = [
  {
    id: 'initial-consultation',
    title: 'Initial Consultation',
    description: 'A comprehensive assessment to understand your unique needs and create a personalized recovery plan.',
    duration: '60 minutes',
    price: '$120',
    botanicalIcon: <OliveBranch width={getFibonacciByIndex(7)} height={getFibonacciByIndex(7)} opacity={0.7} />,
    color: 'var(--color-primary-500)'
  },
  {
    id: 'follow-up-session',
    title: 'Follow-Up Session',
    description: 'Continued therapeutic support to help you progress on your recovery journey.',
    duration: '45 minutes',
    price: '$95',
    botanicalIcon: <FlowerOfLife width={getFibonacciByIndex(7)} height={getFibonacciByIndex(7)} opacity={0.7} />,
    color: 'var(--color-secondary-500)'
  },
  {
    id: 'group-therapy',
    title: 'Group Therapy Session',
    description: 'Connect with others in a supportive group environment guided by our experienced facilitators.',
    duration: '90 minutes',
    price: '$75',
    botanicalIcon: <VesicaPiscis width={getFibonacciByIndex(7)} height={getFibonacciByIndex(7)} opacity={0.7} />,
    color: 'var(--color-accent-gold)'
  }
];

/**
 * ServiceSelection component for booking step 1
 */
export const ServiceSelection: React.FC = () => {
  const { state, dispatch } = useContext(BookingContext);
  const errors = getStepErrors(state, 0);
  
  // Handle service selection
  const handleSelectService = (serviceId: string) => {
    dispatch({ type: 'SET_SERVICE', payload: serviceId });
  };
  
  return (
    <StepContainer>
      <StepHeader>
        <Text as="h3" variant="h5">
          Select a Service
        </Text>
        <Text variant="body2" style={{ opacity: 0.8 }}>
          Choose the service you'd like to book
        </Text>
      </StepHeader>
      
      <ServicesGrid>
        {SERVICES.map(service => (
          <ServiceCard
            key={service.id}
            onClick={() => handleSelectService(service.id)}
            $isSelected={state.selectedService === service.id}
            $color={service.color}
          >
            <CardHeader>
              <IconContainer>
                {service.botanicalIcon}
              </IconContainer>
              <Title>{service.title}</Title>
            </CardHeader>
            
            <Description>{service.description}</Description>
            
            <Details>
              <DetailItem>
                <DetailLabel>Duration:</DetailLabel>
                <DetailValue>{service.duration}</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Price:</DetailLabel>
                <DetailValue>{service.price}</DetailValue>
              </DetailItem>
            </Details>
          </ServiceCard>
        ))}
      </ServicesGrid>
      
      {errors.selectedService && (
        <ErrorMessage>{errors.selectedService}</ErrorMessage>
      )}
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${getFibonacciByIndex(11) * 2}px, 1fr)); // Min width ~178px
  gap: ${getFibonacciByIndex(7)}px; // 13px
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr); // 3 columns on desktop
  }
`;

interface ServiceCardProps {
  $isSelected: boolean;
  $color: string;
}

const ServiceCard = styled(Card)<ServiceCardProps>`
  padding: ${getFibonacciByIndex(7)}px; // 13px
  cursor: pointer;
  transition: all 0.3s cubic-bezier(${PHI_INVERSE}, 0, ${PHI_INVERSE}, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  /* Selected state styling */
  ${props => props.$isSelected && `
    transform: scale(${PHI_INVERSE * PHI});
    box-shadow: 0 ${getFibonacciByIndex(5)}px ${getFibonacciByIndex(8)}px rgba(0, 0, 0, 0.15);
    border: 2px solid ${props.$color};
  `}
  
  /* Hover effects */
  &:hover {
    transform: translateY(-${getFibonacciByIndex(4)}px); // 3px
    box-shadow: 0 ${getFibonacciByIndex(6)}px ${getFibonacciByIndex(8)}px rgba(0, 0, 0, 0.1);
  }
  
  /* Active effects */
  &:active {
    transform: scale(0.98);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${getFibonacciByIndex(6)}px; // 8px
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${getFibonacciByIndex(5)}px; // 5px
  color: ${props => props.theme.colors.primary[500] ?? 1};
`;

const Title = styled(Text).attrs({ as: 'h4', variant: 'h6' })`
  margin: 0;
  font-weight: 600;
`;

const Description = styled(Text).attrs({ variant: 'body2' })`
  margin-bottom: ${getFibonacciByIndex(6)}px; // 8px
  opacity: 0.8;
  flex-grow: 1;
`;

const Details = styled.div`
  margin-top: ${getFibonacciByIndex(5)}px; // 5px
  padding-top: ${getFibonacciByIndex(5)}px; // 5px
  border-top: 1px solid ${props => props.theme.colors.gray[200] ?? 1};
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${getFibonacciByIndex(3)}px; // 2px
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled(Text).attrs({ variant: 'body2' })`
  font-weight: 500;
  color: ${props => props.theme.colors.text.secondary};
`;

const DetailValue = styled(Text).attrs({ variant: 'body2' })`
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error[500] ?? 1};
  font-size: ${props => props.theme.typography.fontSize * PHI_INVERSE}px;
  margin-top: ${getFibonacciByIndex(5)}px; // 5px
  text-align: center;
`;

export default ServiceSelection; 










