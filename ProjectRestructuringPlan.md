# Recovery Office Project Restructuring Plan

## Overview

This document outlines the comprehensive plan to restructure the Recovery Office project according to the specifications in `filetree.md`. The goal is to ensure that the codebase structure perfectly aligns with the expected file tree, implementing all missing directories and files, and reorganizing components to their proper locations.

## Current Structure Analysis

After a thorough examination of the current codebase and comparison with `filetree.md`, I've identified several inconsistencies:

### Major Discrepancies

1. **Missing Top-Level Directories**:
   - ❌ No `public/` directory with assets
   - ❌ No `docs/` directory for documentation
   - ❌ Missing `animation/` directory at src level (animations are in design-system/components/animation)
   - ❌ Missing `context/` directory
   - ❌ Missing `services/` directory
   - ❌ Missing `types/` directory

2. **Structural Differences**:
   - ❌ Pages are flat files instead of organized in directories with sections
   - ❌ Botanical components are in design-system/components/botanical instead of design-system/botanical
   - ❌ Empty `components/` directory exists but contains no files

3. **Missing Files**:
   - ❌ No `routes.tsx` file at src level
   - ❌ Missing configuration files (`.eslintrc.js`, `.prettierrc`, `.gitignore`)
   - ❌ Missing `jest.config.js` file

## Restructuring Plan

### Phase 1: Prepare Directory Structure [IN PROGRESS]

1. **Create Missing Top-Level Directories** [COMPLETED]:
   - ✅ Create `public/` directory with assets structure
   - ✅ Create `docs/` directory and move documentation files
   - ✅ Create `src/animation/` directory
   - ✅ Create `src/context/` directory
   - ✅ Create `src/services/` directory
   - ✅ Create `src/types/` directory

2. **Create Configuration Files** [COMPLETED]:
   - ✅ Create `.eslintrc.js`
   - ✅ Create `.prettierrc`
   - ✅ Create `.gitignore`
   - ✅ Create `jest.config.js`

3. **Create Page Directory Structure** [COMPLETED]:
   - ✅ Create directory structure for each page (Home/, Services/, About/, etc.)
   - ✅ Create sections subdirectories for each page

### Phase 2: Reorganize Existing Components [NOT STARTED]

1. **Move Animation Components**:
   - [ ] Move files from `src/design-system/components/animation/` to `src/animation/`
   - [ ] Update imports in all affected files

2. **Reorganize Botanical Components**:
   - [ ] Move files from `src/design-system/components/botanical/` to `src/design-system/botanical/`
   - [ ] Update imports in all affected files

3. **Restructure Pages**:
   - [ ] Move page components into their respective directories
   - [ ] Create index.ts files for proper exports

### Phase 3: Implement Missing Files [NOT STARTED]

1. **Create Missing Component Files**:
   - [ ] Implement all component files specified in filetree.md that are missing
   - [ ] Ensure proper exports through index.ts files

2. **Create Routes File**:
   - [ ] Implement `src/routes.tsx` file with proper routing configuration

3. **Create Context Providers**:
   - [ ] Implement context files (ThemeContext.tsx, BookingContext.tsx, AnimationContext.tsx)
   - [ ] Create proper exports through index.ts

### Phase 4: Implement Services and Types [NOT STARTED]

1. **Create Service Files**:
   - [ ] Implement api.ts, booking.ts, newsletter.ts, contact.ts
   - [ ] Create proper exports through index.ts

2. **Create Type Definitions**:
   - [ ] Implement general.types.ts, api.types.ts, booking.types.ts
   - [ ] Create proper exports through index.ts

### Phase 5: Verify and Fix Imports [NOT STARTED]

1. **Update All Import Paths**:
   - [ ] Search for all imports that reference moved files
   - [ ] Update import paths to reflect new file locations

2. **Fix TypeScript Errors**:
   - [ ] Address all TypeScript errors resulting from restructuring
   - [ ] Ensure proper type definitions throughout the codebase

## Implementation Approach

For each file or directory that needs to be moved or created, we will:

1. **Check for Existence**: Verify if the file/directory already exists in some form
2. **Create Directory Structure**: Ensure parent directories exist before creating files
3. **Move Content**: For existing files, move them to the correct location
4. **Create New Files**: For missing files, create them with proper TypeScript interfaces and implementations
5. **Update Imports**: Update all import references to maintain code functionality

## Tracking Progress

We will use this document to track progress on each phase and item:

- [x] Phase 1: Prepare Directory Structure
- [ ] Phase 2: Reorganize Existing Components
- [ ] Phase 3: Implement Missing Files
- [ ] Phase 4: Implement Services and Types
- [ ] Phase 5: Verify and Fix Imports

## Next Steps

1. ✅ Phase 1: Create missing directories and configuration files
2. 🔜 Phase 2: Move animation and botanical components to their proper locations
3. 🔜 Restructure the pages to match the expected directory structure
4. 🔜 Implement the missing files and context providers
5. 🔜 Verify all imports and fix any TypeScript errors

This plan will ensure a systematic approach to restructuring the Recovery Office project according to the specifications in `filetree.md`. 