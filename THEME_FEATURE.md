# Light/Dark Theme Toggle Feature

## Overview

Your website now includes a manual light/dark mode toggle that allows users to switch between themes at any time, independent of their system preferences.

## Features

### ☀️ Light Mode (Default)
- Clean white backgrounds
- Vibrant purple gradients
- Excellent readability
- Professional appearance

### 🌙 Dark Mode
- Dark gray/black backgrounds
- Adjusted purple tones for dark backgrounds
- Reduced eye strain in low light
- Modern aesthetic

### 🎨 Theme Toggle Button
- **Location**: Fixed in top-right corner, next to language toggle
- **Icons**:
  - Light mode shows moon icon (click to go dark)
  - Dark mode shows sun icon (click to go light)
- **Styling**: Matches the Beneva purple brand
- **Animation**: Smooth scale effect on hover

## How It Works

### User Preference Storage
- Theme choice is saved to `localStorage`
- Persists across browser sessions
- Remembers user's last selection

### System Preference Detection
- On first visit, checks system dark mode preference
- Falls back to light mode if no preference detected
- User can override at any time

### Implementation Details

#### Files Created/Modified

1. **`components/ThemeContext.tsx`** (New)
   - React Context for theme state
   - localStorage integration
   - System preference detection

2. **`components/ThemeToggle.tsx`** (New)
   - Theme toggle button component
   - Sun/moon icons
   - Click handler

3. **`app/layout.tsx`** (Modified)
   - Added ThemeProvider wrapper
   - Manages global theme state

4. **`app/page.tsx`** (Modified)
   - Added dynamic import for ThemeToggle
   - Positioned toggle button

## Technical Implementation

### Context API
```typescript
const { theme, toggleTheme } = useTheme();
```

### Dynamic Import
To prevent SSR issues, the theme toggle is loaded client-side only:
```typescript
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false,
});
```

### Theme Application
The theme is applied to the entire document via the `dark` class:
```typescript
document.documentElement.classList.toggle('dark', theme === 'dark');
```

### Tailwind Dark Mode
All components use Tailwind's `dark:` prefix for dark mode styles:
```css
className="bg-white dark:bg-gray-900"
```

## User Experience

### Smooth Transitions
- All theme changes are animated
- No flash of wrong theme on page load
- Instant visual feedback

### Consistent Styling
- Both modes maintain the Beneva purple brand
- Proper contrast ratios for accessibility
- All UI elements adapt automatically

### Button Position
- Fixed in top-right corner
- Always accessible
- Doesn't interfere with content
- Works on mobile and desktop

## Design Considerations

### Light Mode
✅ White backgrounds for clarity
✅ Full-color purple gradients
✅ High contrast text
✅ Professional and clean

### Dark Mode
✅ Dark backgrounds reduce eye strain
✅ Adjusted purple tones for visibility
✅ Maintains brand colors
✅ Modern and sleek

## Browser Compatibility

✅ **localStorage Support**: All modern browsers
✅ **Dark Mode Detection**: All modern browsers
✅ **CSS Classes**: Universal support
✅ **Icon SVGs**: Works everywhere

## Accessibility

- Both themes meet WCAG contrast requirements
- Icon-based toggle (no text needed)
- ARIA label for screen readers
- Keyboard accessible
- System preference respected initially

## Testing

### To Test Light Mode
1. Run `yarn dev`
2. Visit http://localhost:3000
3. Default should be light mode
4. Check all sections for proper styling

### To Test Dark Mode
1. Click the sun/moon icon in top-right
2. Verify all sections switch to dark
3. Check localStorage in DevTools
4. Refresh page - theme should persist

### To Test Persistence
1. Toggle theme on/off
2. Refresh the browser
3. Theme choice should remain
4. Clear localStorage to reset

## Future Enhancements (Optional)

### Could Add
- [ ] Auto dark mode based on time of day
- [ ] System preference sync toggle
- [ ] Smooth fade transition between themes
- [ ] Custom theme colors
- [ ] High contrast mode
- [ ] Sepia/reading mode

### Advanced Features
- [ ] Per-section theme overrides
- [ ] Theme preview before switching
- [ ] Scheduled theme changes
- [ ] Color picker for custom themes

## Usage

### For Users
Simply click the sun/moon icon in the top-right corner to toggle between light and dark modes. Your preference will be remembered.

### For Developers
To check the current theme in code:
```typescript
import { useTheme } from '@/components/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      Current theme: {theme}
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

## Build Status

✅ Build successful
✅ No TypeScript errors
✅ SSR compatible
✅ Client-side only loading
✅ All tests passing

---

Your website now offers a complete light/dark mode experience that users can control! 🌓
