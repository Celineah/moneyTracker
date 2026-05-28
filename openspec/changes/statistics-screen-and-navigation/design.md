## Context

The app is currently a single-screen application with state logic contained in `App.tsx`. We need to scale it to support multiple screens and data visualization.

## Goals / Non-Goals

**Goals:**
- Implement a bottom tab navigation for easy switching between "List" and "Stats".
- Provide a clear visual breakdown of expenses by category using a Pie Chart.
- Maintain data consistency across screens by lifting state or using a Shared Context.
- Preserve the minimalist aesthetic.

**Non-Goals:**
- Deep linking support.
- Complex navigation hierarchies (nested stacks) beyond what's needed for two screens.
- Interactive charts with drill-down capabilities (simple visualization is the goal).

## Decisions

- **Navigation**: Use `@react-navigation/native` and `@react-navigation/bottom-tabs`. It's the standard for React Native and integrates well with Expo.
- **Charts**: Use `react-native-chart-kit`. It's lightweight, easy to style, and supports the minimalist look we want.
- **State Management**: Introduce a `ExpenseContext` using React's Context API. This will allow both `HomeScreen` and `StatisticsScreen` to access and modify the same expense data without prop drilling.
- **Layout Refactoring**:
    - Move current `App.tsx` content (logic + UI) into `screens/HomeScreen.tsx`.
    - Create `screens/StatisticsScreen.tsx`.
    - `App.tsx` will now only contain the `ExpenseProvider` and the `NavigationContainer`.

## Risks / Trade-offs

- [Risk] Dependency bloat → [Mitigation] Choose lightweight libraries like `react-native-chart-kit` and keep navigation simple.
- [Risk] Chart rendering performance → [Mitigation] Memoize data transformations for the chart to avoid unnecessary re-renders.
- [Risk] Layout shifts on small screens → [Mitigation] Ensure the chart is responsive using the `Dimensions` API from React Native.
