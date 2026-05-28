## Why

The user needs a functional and minimalist main screen for a personal expense tracker to manage their finances efficiently. Currently, the app is a boilerplate Expo project without any specific expense tracking features. Implementing this screen provides the core utility of the application.

## What Changes

- Create a main screen with a minimalist, spreadsheet-inspired layout.
- Add a category filter dropdown (Roupa, Alimento, Transporte, Lazer, Contas).
- Implement a form to add expenses (Amount, Description, Category).
- Display a list of expense items that are both editable and removable.
- Add a section to display the total expenses.
- Add a section at the bottom to display the remaining money.

## Capabilities

### New Capabilities
- `expense-management`: Handles the creation, storage, filtering, and management of expense records (Description, Amount, Category).
- `expense-dashboard-ui`: Provides the main user interface for viewing and interacting with expenses, including filters and summary statistics.

### Modified Capabilities

## Impact

- `App.tsx`: This will be updated to serve as the main screen or to host the new main screen component.
- New components will be created for the expense items, form, and summary sections.
- Local state or a storage solution will be needed to persist expenses.
