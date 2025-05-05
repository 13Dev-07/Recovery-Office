/**
 * Data Display Components
 * 
 * This module exports components for displaying data in various formats.
 * All components follow sacred geometry principles for harmonious proportions.
 */

// Individual component exports
export { default as Card } from './Card';
export { default as List } from './List';
export { default as Tag } from './Tag';

// Utility exports
export {
  truncateText,
  formatNumber,
  formatDate,
  calculateGridColumns,
  calculateGoldenItemSize,
  generateGoldenPalette,
  parseUnit,
  createFibonacciSpacer,
  formatPercentage,
  calculateGoldenFontSize,
  extractInitials,
  formatFileSize
} from './dataDisplayUtils';

// Type exports
export type { CardProps } from './Card';
export type { ListProps } from './List';
export type { TagProps } from './Tag'; 





