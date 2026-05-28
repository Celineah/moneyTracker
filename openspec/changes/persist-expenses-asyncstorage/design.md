## Context

The expense tracker currently loses all data on refresh because it uses standard React `useState`. We need to implement a persistence layer using `@react-native-async-storage/async-storage`.

## Goals / Non-Goals

**Goals:**
- Persist the list of expenses locally on the device.
- Load expenses automatically when the app starts.
- Save expenses every time the list is modified (add/edit/delete).
- Handle potential storage errors gracefully.

**Non-Goals:**
- Syncing data to a remote server/cloud.
- Encrypting the local data (standard AsyncStorage is sufficient for this scope).
- Supporting multiple separate "profiles" or "wallets".

## Decisions

- **Dependency**: Use `@react-native-async-storage/async-storage`. It is the industry standard for simple key-value persistence in React Native/Expo.
- **Serialization**: Use `JSON.stringify` and `JSON.parse` for storing the array of expense objects.
- **Hook Integration**: Use a `useEffect` hook in `App.tsx` (or a custom hook) that listens to changes in the `expenses` state and triggers a background save operation.
- **Initial Load**: Use another `useEffect` (with an empty dependency array) to fetch the data from storage once when the component mounts.

## Risks / Trade-offs

- [Risk] Performance issues with very large datasets → [Mitigation] AsyncStorage is usually fast enough for a few hundred expense items. If the list grows extremely large, we might consider `SQLite` in the future.
- [Risk] Race conditions between multiple saves → [Mitigation] Since only the main screen modifies the data, a simple sequential save or just overwriting the key with the latest state is acceptable.
- [Risk] Corrupted JSON in storage → [Mitigation] Wrap the load logic in a `try-catch` block and provide a fallback to an empty array.
