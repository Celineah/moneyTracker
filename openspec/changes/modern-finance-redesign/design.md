## Context

The app currently uses a "spreadsheet minimalist" layout with thin borders and a tabular list. This change transitions the entire UI to a "Modern Finance" aesthetic, which is more card-heavy, colorful, and emphasizes depth through soft shadows.

## Goals / Non-Goals

**Goals:**
- Transition from a table-based list to a card-based list for expenses.
- Implement a centralized `theme.ts` with pastel colors and shadow presets.
- Redesign summary sections into high-impact "Hero Cards".
- Enhance typography for better hierarchy and elegance.
- Maintain existing functionality and responsiveness.

**Non-Goals:**
- Changing the underlying data structure or storage logic.
- Adding new features (e.g., income tracking, budgeting tools) beyond visual redesign.
- Implementing dark mode (focus is strictly on the new light pastel theme).

## Decisions

- **Color Palette**: Use a soft pastel palette.
    - Background: `#FDFCFB` (Off-white/Warm)
    - Primary (Accent): `#A7C7E7` (Soft Blue)
    - Categories: `Roupa: #FADADD`, `Alimento: #C1E1C1`, `Transporte: #FFD5BA`, `Lazer: #E6E6FA`, `Contas: #C3B1E1`
- **Component Refactoring**:
    - **Cards**: All list items and summary boxes will use a standard `Card` style: `borderRadius: 20`, `backgroundColor: '#FFF'`, and a "soft shadow" (low opacity, high blur).
    - **Shadows**: Use a combination of `shadowColor`, `shadowOffset`, `shadowOpacity`, and `shadowRadius` for iOS, and `elevation` for Android, with a consistent subtle look.
- **Typography**: Prefer `Inter` or standard `System` font with careful weighting. Use larger, thinner weights for headers and bold, compact styles for labels.
- **Header/Hero**: Merge the current Header and Summary sections into a single prominent card at the top of the Home screen with a gradient or soft background color.

## Risks / Trade-offs

- [Risk] Shadow performance on Android → [Mitigation] Use conservative `elevation` values and test on actual devices if possible. Ensure layout doesn't become "heavy".
- [Risk] Low contrast in pastel colors → [Mitigation] Use darker versions of the pastel colors for text or ensure text is always high-contrast (e.g., charcoal or dark grey) against the pastel backgrounds.
- [Risk] Component fragmentation → [Mitigation] Create a reusable `Card` component and `AppText` component to enforce the new theme consistently.
