## MODIFIED Requirements

### Requirement: Add Expense
The system SHALL allow users to add new expenses to the collection and MUST persist the change across sessions.

#### Scenario: Successful addition
- **WHEN** the user submits the expense form with valid data
- **THEN** the new expense is added to the list, summaries are updated, and the new list is saved to local storage.

### Requirement: Remove Expense
The system SHALL allow users to delete an existing expense and MUST persist the change across sessions.

#### Scenario: Successful deletion
- **WHEN** the user triggers the delete action on an expense item
- **THEN** the expense is removed from the list, summaries are updated, and the new list is saved to local storage.

### Requirement: Edit Expense
The system SHALL allow users to modify the description, amount, or category of an existing expense and MUST persist the change across sessions.

#### Scenario: Successful edit
- **WHEN** the user saves changes to an existing expense item
- **THEN** the expense data is updated in the list, summaries reflect the new values, and the new list is saved to local storage.
