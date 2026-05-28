## ADDED Requirements

### Requirement: Category Spending Chart
The system SHALL display a visual chart (Pie or Bar) showing the total expenses grouped by category on the Statistics Screen.

#### Scenario: Displaying category breakdown
- **WHEN** the user opens the Statistics Screen
- **THEN** the system MUST display a chart representing the distribution of spending across all predefined categories.

### Requirement: Real-time Data Synchronization
The system SHALL ensure that statistics reflect the most current expense data.

#### Scenario: Update after adding expense
- **WHEN** the user adds a new expense on the Home Screen and then navigates to the Statistics Screen
- **THEN** the chart MUST be updated to include the new expense in its respective category.
