## ADDED Requirements

### Requirement: Centralized Theme System
The system SHALL use a centralized theme configuration for all visual properties including colors, spacing, and shadows.

#### Scenario: Apply theme color
- **WHEN** a component renders
- **THEN** it MUST use the color values defined in the global theme configuration.

### Requirement: Standardized Card Component
The system SHALL provide a standardized Card component with rounded corners and soft shadows for all main UI containers.

#### Scenario: Render expense card
- **WHEN** an expense is displayed in the list
- **THEN** it MUST be wrapped in a Card component with a border radius of at least 20px and a subtle drop shadow.
