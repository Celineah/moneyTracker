## Why

Users need a visual way to understand their spending habits across different categories. Adding a statistics screen with charts, along with a navigation system to switch between views, will significantly enhance the app's analytical value and usability.

## What Changes

- Install `react-navigation` and its dependencies for screen management.
- Install `react-native-svg` and `react-native-chart-kit` (or similar) for data visualization.
- Refactor `App.tsx` to include a Navigation Container with a Tab or Stack Navigator.
- Create a new `StatisticsScreen` component displaying spending by category.
- Implement a Pie or Bar chart to visualize the distribution of expenses.
- Move the current dashboard logic into a separate `HomeScreen` component.

## Capabilities

### New Capabilities
- `app-navigation`: Manages the routing and transitions between different screens (Home, Statistics).
- `expense-analytics`: Provides visual insights and statistical breakdowns of expense data.

### Modified Capabilities
- `expense-dashboard-ui`: Requirements will be updated to acknowledge its place within a multi-screen navigation system.

## Impact

- `package.json`: Addition of navigation and charting libraries.
- `App.tsx`: High-level refactoring to host the Navigation Container.
- `screens/`: New directory to house `HomeScreen.tsx` and `StatisticsScreen.tsx`.
- `components/`: Potential new reusable chart components.
