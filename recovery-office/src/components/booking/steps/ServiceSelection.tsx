import * as React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { PHI, PHI_INVERSE, SACRED_SPACING, FIBONACCI, SACRED_RADIUS } from '@constants/sacred-geometry';
import { getFibonacciByIndex } from '@utils/getFibonacciByIndex';
import { useBooking } from '@context/BookingContext';
import { ServiceOption } from '@types/booking.types';

/**
 * Props for the ServiceSelection component
 * 
 * @interface ServiceSelectionProps
 * @property {ServiceOption[]} services - Array of available services
 * @property {string | null} selectedServiceId - Currently selected service ID
 * @property {(serviceId: string) => void} onSelectService - Handler for service selection
 */
interface ServiceSelectionProps {
  services: ServiceOption[];
  selectedServiceId: string | null;
  onSelectService: (serviceId: string) => void;
}

/**
 * Container for the service selection component
 * Uses sacred spacing for margins
 */
const Container = styled.div`
  width: 100%;
  padding: ${SACRED_SPACING.md}px 0;
`;

/**
 * Title for the service selection section
 * Uses golden ratio for line height
 */
const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${SACRED_SPACING.lg}px;
  line-height: ${PHI};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.dark};
`;

/**
 * Description for the service selection section
 * Uses PHI for line height and margin calculations
 */
const SectionDescription = styled.p`
  margin-bottom: ${SACRED_SPACING.xl}px;
  line-height: ${PHI};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.main};
`;

/**
 * Grid container for service cards
 * Uses Fibonacci for gap between items
 */
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${SACRED_SPACING.md}px;
  width: 100%;
`;

/**
 * Service card component
 * Uses golden rectangle proportions and Fibonacci spacing
 */
const ServiceCard = styled.div<{ isSelected: boolean }>`
  padding: ${SACRED_SPACING.md}px;
  border-radius: ${SACRED_RADIUS.sm}px;
  background-color: ${({ theme, isSelected }: { theme: DefaultTheme; isSelected: boolean }) => 
    isSelected ? theme.colors.accent.light : theme.colors.background.light
  };
  border: 1px solid ${({ theme, isSelected }: { theme: DefaultTheme; isSelected: boolean }) => 
    isSelected ? theme.colors.accent.main : theme.colors.border.light
  };
  cursor: pointer;
  transition: all ${getFibonacciByIndex(6) * 10}ms ease-in-out;
  /* Golden rectangle proportion */
  min-height: calc(250px / ${PHI});
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-${getFibonacciByIndex(4)}px);
    box-shadow: 0 ${getFibonacciByIndex(5)}px ${getFibonacciByIndex(7)}px rgba(0, 0, 0, 0.05);
    border-color: ${({ theme, isSelected }: { theme: DefaultTheme; isSelected: boolean }) => 
      isSelected ? theme.colors.accent.main : theme.colors.border.main
    };
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: ${getFibonacciByIndex(8)}px;
    height: ${getFibonacciByIndex(8)}px;
    background-color: ${({ theme, isSelected }: { theme: DefaultTheme; isSelected: boolean }) => 
      isSelected ? theme.colors.accent.main : 'transparent'
    };
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    transition: all ${getFibonacciByIndex(6) * 10}ms ease-in-out;
  }
`;

/**
 * Service title component
 * Uses PHI-based spacing and line height
 */
const ServiceTitle = styled.h3<{ isSelected: boolean }>`
  font-size: 1.25rem;
  margin-bottom: ${SACRED_SPACING.xs}px;
  line-height: ${PHI};
  color: ${({ theme, isSelected }: { theme: DefaultTheme; isSelected: boolean }) => 
    isSelected ? theme.colors.accent.dark : theme.colors.text.dark
  };
`;

/**
 * Service description component
 * Uses Fibonacci for margin and PHI for line height
 */
const ServiceDescription = styled.p`
  font-size: 0.875rem;
  margin-bottom: ${SACRED_SPACING.sm}px;
  line-height: ${PHI};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.main};
  /* Keep at golden ratio of total height */
  height: ${100 * PHI_INVERSE}%;
`;

/**
 * Service duration badge
 * Uses Fibonacci for dimensions and spacing
 */
const ServiceDuration = styled.span`
  display: inline-block;
  padding: ${getFibonacciByIndex(4)}px ${getFibonacciByIndex(5)}px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background.medium};
  border-radius: ${SACRED_RADIUS.xs}px;
  font-size: 0.75rem;
  font-weight: 500;
`;

/**
 * ServiceSelection component
 * Allows users to select a service from available options
 * Uses sacred geometry principles throughout for harmonious design
 */
const ServiceSelection: React.FC = () => {
  const { 
    availableServices, 
    selectedService, 
    selectService, 
    isResourceLoading 
  } = useBooking();
  
  const isLoading = isResourceLoading('services');
  
  const handleSelectService = (service: ServiceOption) => {
    selectService(service);
  };
  
  if (isLoading) {
    return <div>Loading available services...</div>;
  }
  
  if (!availableServices || availableServices.length === 0) {
    return <div>No services available. Please try again later.</div>;
  }
  
  return (
    <Container>
      <SectionTitle>Select a Service</SectionTitle>
      <SectionDescription>
        Choose the financial recovery service that best fits your needs. Each service includes an initial consultation to assess your specific situation.
      </SectionDescription>
      
      <ServicesGrid>
        {availableServices.map((service) => {
          const isSelected = selectedService?.id === service.id;
          
          return (
            <ServiceCard 
              key={service.id}
              isSelected={isSelected}
              onClick={() => handleSelectService(service)}
              role="button"
              aria-pressed={isSelected}
            >
              <ServiceTitle isSelected={isSelected}>{service.name}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceDuration>{service.duration} minutes</ServiceDuration>
            </ServiceCard>
          );
        })}
      </ServicesGrid>
    </Container>
  );
};

export default ServiceSelection; 












