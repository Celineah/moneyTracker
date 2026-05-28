## Why

Currently, all expense data is stored in-memory, which means it is lost every time the app is refreshed or reopened. Implementing local persistence with AsyncStorage will provide a reliable user experience by ensuring that financial records are preserved across sessions.

## What Changes

- Install `@react-native-async-storage/async-storage` dependency.
- Create a storage utility to handle saving and loading expense data.
- Integrate the storage utility into the main application state logic to automatically persist changes.
- Load stored expenses on app startup.

## Capabilities

### New Capabilities
- `local-data-persistence`: Manages the reading and writing of application data to local device storage.

### Modified Capabilities
- `expense-management`: Requirements will be updated to include the expectation that data MUST be preserved across application sessions.

## Impact

- `package.json`: Addition of `@react-native-async-storage/async-storage`.
- `App.tsx`: Logic updated to load and save data using AsyncStorage.
- New utility file (e.g., `utils/storage.ts`) for AsyncStorage operations.
