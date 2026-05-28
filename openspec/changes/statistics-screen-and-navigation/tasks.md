## 1. Setup and Dependencies

- [ ] 1.1 Install navigation dependencies: `@react-navigation/native`, `@react-navigation/bottom-tabs`, `react-native-screens`, `react-native-safe-area-context`.
- [ ] 1.2 Install chart dependencies: `react-native-chart-kit`, `react-native-svg`.

## 2. Infrastructure and State Management

- [ ] 2.1 Create `context/ExpenseContext.tsx` to manage shared expense state.
- [ ] 2.2 Migrate existing state logic from `App.tsx` into the `ExpenseContext`.
- [ ] 2.3 Create `screens/HomeScreen.tsx` and move the current dashboard UI into it.
- [ ] 2.4 Update components to consume data from `ExpenseContext` instead of props where appropriate.

## 3. Screen and Navigation Development

- [ ] 3.1 Create a basic `screens/StatisticsScreen.tsx`.
- [ ] 3.2 Refactor `App.tsx` to set up the `NavigationContainer` and `BottomTabNavigator`.
- [ ] 3.3 Add tab icons (using `@expo/vector-icons` if available, or simple text).

## 4. Statistics Implementation

- [ ] 4.1 Implement data transformation logic to group expenses by category for the chart.
- [ ] 4.2 Integrate `PieChart` from `react-native-chart-kit` into `StatisticsScreen.tsx`.
- [ ] 4.3 Add a simple "Top Category" or "Category Breakdown" list below the chart for clarity.

## 5. Verification and Refinement

- [ ] 5.1 Verify navigation between Home and Statistics screens.
- [ ] 5.2 Verify that adding/deleting an expense updates the chart in real-time.
- [ ] 5.3 Ensure the layout remains minimalist and clean on both screens.
