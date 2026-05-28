## 1. Setup and Dependencies

- [x] 1.1 Install navigation dependencies: `@react-navigation/native`, `@react-navigation/bottom-tabs`, `react-native-screens`, `react-native-safe-area-context`.
- [x] 1.2 Install chart dependencies: `react-native-chart-kit`, `react-native-svg`.

## 2. Infrastructure and State Management

- [x] 2.1 Create `context/ExpenseContext.tsx` to manage shared expense state.
- [x] 2.2 Migrate existing state logic from `App.tsx` into the `ExpenseContext`.
- [x] 2.3 Create `screens/HomeScreen.tsx` and move the current dashboard UI into it.
- [x] 2.4 Update components to consume data from `ExpenseContext` instead of props where appropriate.

## 3. Screen and Navigation Development

- [x] 3.1 Create a basic `screens/StatisticsScreen.tsx`.
- [x] 3.2 Refactor `App.tsx` to set up the `NavigationContainer` and `BottomTabNavigator`.
- [x] 3.3 Add tab icons (using `@expo/vector-icons` if available, or simple text).

## 4. Statistics Implementation

- [x] 4.1 Implement data transformation logic to group expenses by category for the chart.
- [x] 4.2 Integrate `PieChart` from `react-native-chart-kit` into `StatisticsScreen.tsx`.
- [x] 4.3 Add a simple "Top Category" or "Category Breakdown" list below the chart for clarity.

## 5. Verification and Refinement

- [x] 5.1 Verify navigation between Home and Statistics screens.
- [x] 5.2 Verify that adding/deleting an expense updates the chart in real-time.
- [x] 5.3 Ensure the layout remains minimalist and clean on both screens.
