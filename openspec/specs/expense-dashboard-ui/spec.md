## ADDED Requirements

### Requirement: Category Filtering
The UI SHALL provide a way to filter the displayed expenses by category (Roupa, Alimento, Transporte, Lazer, Contas) or show all.

#### Scenario: Apply filter
- **WHEN** the user selects the "Lazer" category in the filter dropdown
- **THEN** only expenses with the "Lazer" category are visible in the list.

### Requirement: Financial Summaries
The UI SHALL display the total sum of all currently filtered expenses and a remaining balance section.

#### Scenario: Summary calculation
- **WHEN** the filtered list of expenses changes
- **THEN** the "Total Expenses" value MUST be the sum of all visible expense amounts.

### Requirement: Spreadsheet Layout
The UI SHALL display expenses in a clean, tabular format with headers and structured rows.

#### Scenario: List rendering
- **WHEN** multiple expenses are present
- **THEN** they are displayed as separate rows with consistent alignment for description, category, and amount.

### Requirement: Remaining Money Display
The UI SHALL display a "Remaining Money" section at the bottom of the screen.

#### Scenario: Display balance
- **WHEN** the screen is rendered
- **THEN** the remaining balance (Initial Budget - Total Expenses) is clearly visible at the bottom.
