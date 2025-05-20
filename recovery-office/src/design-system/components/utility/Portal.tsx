/**
 * Portal Component
 * 
 * A component that creates a portal to render children outside the DOM hierarchy.
 * Used by modal and other overlay components.
 */

import * as React from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  /**
   * Child elements to render in the portal
   */
  children: React.ReactNode;
  
  /**
   * The container to render the portal into
   * If not specified, will append to document.body
   */
  container?: HTMLElement;
  
  /**
   * The ID to use for the default container
   * Only used if container is not specified
   */
  containerId?: string;
  
  /**
   * Whether the portal is disabled (renders children in place)
   */
  disabled?: boolean;
}

/**
 * Portal Component
 * 
 * Renders children into a DOM node that exists outside the DOM hierarchy
 */
export const Portal: React.FC<PortalProps> = ({
  children,
  container,
  containerId = 'portal-root',
  disabled = false
}) => {
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);
  
  // Create or find the portal container
  useEffect(() => {
    if (disabled) return;
    
    // If container is provided, use it directly
    if (container) {
      setPortalNode(container);
      return;
    }
    
    // Check if we're in a browser environment
    if (typeof document === 'undefined') return;
    
    // Use existing container or create a new one
    let portalContainer = document.getElementById(containerId);
    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.id = containerId;
      document.body.appendChild(portalContainer);
    }
    
    setPortalNode(portalContainer);
    
    // Cleanup on unmount
    return () => {
      // Only remove the container if it's empty and we created it
      if (!container && portalContainer && portalContainer.childNodes.length === 0) {
        document.body.removeChild(portalContainer);
      }
    };
  }, [container, containerId, disabled]);
  
  // If portal is disabled or we're not in a browser, render children directly
  if (disabled || !portalNode) {
    return <>{children}</>;
  }
  
  // Create a portal to the target container
  return createPortal(children, portalNode);
};

export default Portal; 