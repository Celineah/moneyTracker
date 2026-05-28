## Why

The current spreadsheet-inspired minimalist layout is functional but lacks the engaging, premium feel expected from modern mobile finance applications. Redesigning the app with a more contemporary aesthetic—featuring rounded cards, soft shadows, and a refined color palette—will improve user satisfaction, perceived value, and overall usability.

## What Changes

- Implement a new visual theme based on modern finance dashboard patterns.
- Replace the tabular list with a card-based layout for expenses.
- Introduce a pastel color palette for category identification and UI highlights.
- Apply soft shadows and larger border radii to containers (cards, buttons, forms).
- Update typography to a more elegant, high-contrast style.
- Refactor the summary sections (Total Spent, Remaining Money) into prominent "hero" cards.

## Capabilities

### New Capabilities
- `theme-management`: Provides a centralized system for managing colors, spacing, and component styles across the application.

### Modified Capabilities
- `expense-dashboard-ui`: Requirements will be updated to mandate a card-based, modern aesthetic instead of the spreadsheet-inspired tabular layout.
- `expense-analytics`: Requirements will be updated to ensure charts and breakdown lists align with the new pastel theme and modern styling.

## Impact

- `components/`: All UI components (Header, CategoryFilter, ExpenseForm, ExpenseList, ExpenseItem) will undergo significant styling changes.
- `screens/`: `HomeScreen.tsx` and `StatisticsScreen.tsx` layouts will be refactored to support the new card-based system.
- `constants/`: A new `theme.ts` file may be introduced to centralize the color palette and shadow styles.
