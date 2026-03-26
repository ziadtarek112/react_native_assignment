# Interactive E-Commerce Product Gallery

A highly polished React Native product gallery and detail screen featuring smooth animations, shared element transitions, and optimized performance.

## Technical Stack

| Technology | Version | Purpose |
|---|---|---|
| React Native | 0.84.1 | Core framework |
| TypeScript | 5.8.3 | Type safety |
| react-native-reanimated | 4.3.0 | High-performance animations (JSI-based, runs on UI thread) |
| react-native-gesture-handler | 2.30.0 | Touch gesture handling |
| React Navigation (Native Stack) | 7.14.8 | Navigation with native transitions |
| Zustand | 5.0.12 | Lightweight state management for cart |
| react-native-safe-area-context | 5.5.2 | Safe area handling for notched devices |
| react-native-screens | 4.24.0 | Native screen primitives |

## Features

### Product Gallery (List Screen)
- **Grid Layout**: Performant 2-column `FlatList` with virtualization (`windowSize`, `maxToRenderPerBatch`, `removeClippedSubviews`)
- **Search & Filter**: Real-time product search by name and category filtering
- **Hero Transition**: Shared element transition using Reanimated's `sharedTransitionTag` — the product image smoothly animates from its grid position to the detail screen carousel
- **Cart Badge**: Animated cart icon with item count badge that bounces on each addition

### Product Detail Screen
- **Image Carousel**: Horizontal `Animated.FlatList` with `pagingEnabled` snapping, scale and opacity interpolation effects driven by `useSharedValue` and `useAnimatedStyle`
- **Staggered Entry Animations**: Detail sections (info, delivery, description, highlights) fade in sequentially using `FadeInUp` with staggered delays
- **Add to Cart**: Button with spring-based bounce animation, visual state change ("Added!"), and animated checkmark confirmation. Cart badge in the header reacts with a bounce

### State Management
- **Zustand store** (`useCartStore`): Manages cart items with `addToCart` and `removeFromCart` actions. Subscribed to by `CartBadge` (header) and `AddToCart` (detail screen) for reactive UI updates

## Architecture

```
src/
├── components/
│   ├── common/        # Shared components (CartBadge)
│   ├── detail/        # Detail screen components (Carousel, ProductInfo, AddToCart, etc.)
│   └── gallery/       # Gallery screen components (Header, ProductCard, Categories, etc.)
├── data/              # Mock product data (12 items)
├── navigation/        # Stack navigator configuration
├── screens/           # Screen-level components
├── store/             # Zustand cart store
├── types/             # TypeScript type definitions
└── utils/             # Color palette and utilities
```

## Setup & Running

```bash
# Install dependencies
npm install

# iOS
cd ios && pod install && cd ..
npx react-native run-ios

# Android
npx react-native run-android
```

## Performance Verification

Verified 60 FPS performance using the React Native Flipper Performance Monitor and the on-device FPS overlay. All carousel scroll animations, shared element hero transitions, and Add to Cart bounce animations are driven entirely by Reanimated's `useSharedValue` and `useAnimatedStyle`, which execute on the native UI thread via JSI — ensuring zero JS thread overhead during animations.

## Known Limitations & Trade-offs

1. **Shared Element Transition**: Uses Reanimated's `sharedTransitionTag` API which works well with `@react-navigation/native-stack` but may have minor visual artifacts on some Android devices during fast navigation. The `animation: 'fade'` transition was chosen over `slide_from_right` to complement the hero animation more cleanly.

2. **Carousel Image Loading**: Images are loaded from remote URLs (Unsplash) without a caching layer. In production, a solution like `react-native-fast-image` would be used for progressive loading and disk caching.

3. **Cart Persistence**: The Zustand store is in-memory only. For production, Zustand's `persist` middleware with AsyncStorage would be added for cart persistence across app restarts.

4. **Mock Data**: All 12 products use hardcoded data. The architecture is ready for API integration by replacing the static import with an async data source.

## Design Liaison Note

> **To:** Lead Product Designer
>
> **Subject:** Animation Strategy — Product Gallery & Detail Transitions
>
> Hi,
>
> I wanted to share the animation approach I used for the product gallery and detail screen transitions. For the hero image animation between the gallery grid and the detail carousel, I leveraged Reanimated's `sharedTransitionTag` API, which performs the transition entirely on the native UI thread — ensuring smooth 60 FPS even on lower-end devices. The carousel uses interpolation-based scale and opacity effects tied to the scroll position, giving a subtle depth feel as users swipe through product images. For the "Add to Cart" interaction, I implemented a multi-stage spring animation: the button bounces with configurable damping/stiffness, changes to a "success" state, and the cart badge in the header reacts with its own bounce to reinforce the action. The screen transition uses a fade animation rather than a slide to let the shared element hero take center stage. I'm happy to iterate on timing curves or add a parallax effect to the carousel in the next sprint if the team feels it would elevate the experience further.
>
> Best regards
