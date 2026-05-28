## ADDED Requirements

### Requirement: Persistent Local Storage
The system SHALL provide a mechanism to save the expense list to the device's local storage.

#### Scenario: Save data
- **WHEN** the list of expenses is updated (added, edited, or deleted)
- **THEN** the system MUST serialize and write the current list to local storage.

### Requirement: Automatic Data Loading
The system SHALL automatically load stored expenses upon application initialization.

#### Scenario: Initial load
- **WHEN** the application starts
- **THEN** the system MUST attempt to read and deserialize the expense list from local storage.

### Requirement: Robust Data Deserialization
The system SHALL handle cases where stored data is missing or invalid.

#### Scenario: Missing storage key
- **WHEN** the application starts and the storage key does not exist
- **THEN** the system MUST initialize with an empty expense list without crashing.
