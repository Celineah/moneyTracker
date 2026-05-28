## ADDED Requirements

### Requirement: Expense Data Structure
The system SHALL store expenses as objects containing an ID, description (string), amount (number), and category (string).

#### Scenario: Valid expense object
- **WHEN** a new expense is created
- **THEN** it MUST have a unique ID, non-empty description, positive amount, and one of the predefined categories.

### Requirement: Add Expense
The system SHALL allow users to add new expenses to the collection.

#### Scenario: Successful addition
- **WHEN** the user submits the expense form with valid data
- **THEN** the new expense is added to the list and summaries are updated.

### Requirement: Remove Expense
The system SHALL allow users to delete an existing expense.

#### Scenario: Successful deletion
- **WHEN** the user triggers the delete action on an expense item
- **THEN** the expense is removed from the list and summaries are updated.

### Requirement: Edit Expense
The system SHALL allow users to modify the description, amount, or category of an existing expense.

#### Scenario: Successful edit
- **WHEN** the user saves changes to an existing expense item
- **THEN** the expense data is updated in the list and summaries reflect the new values.
