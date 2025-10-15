# Vionix Wealth Management - Project Structure

## Overview
This document outlines the refactored project structure with separated page components for better maintainability and organization.

## Directory Structure

```
Frontend/
├── src/
│   ├── pages/                    # Page components directory
│   │   ├── HomePage.jsx          # Home/Landing page
│   │   ├── AboutPage.jsx         # About Us page
│   │   ├── SolutionsPage.jsx     # Solutions page
│   │   ├── ContactPage.jsx       # Contact page
│   │   ├── index.js              # Central export file
│   │   └── README.md             # Pages documentation
│   ├── components/               # Reusable components (future)
│   ├── App.jsx                   # Main app with routing logic
│   ├── index.css                 # Global styles with Tailwind
│   └── main.jsx                  # Entry point
├── .postcssrc.json               # PostCSS configuration
├── .stylelintrc.json             # Stylelint configuration
├── vite.config.js                # Vite configuration
└── package.json                  # Dependencies

```

## Key Files

### App.jsx (Enhanced)
- **Navbar Component**: Professional animated navigation with:
  - Scroll-responsive design (shrinks on scroll)
  - Gradient text logo with hover effects
  - Icon-enhanced navigation items
  - Active state with gradient backgrounds
  - Smooth hover animations and underlines
  - Separated auth buttons (Login/Sign Up)
  - Animated hamburger menu for mobile
  - Slide-down mobile menu with staggered animations
  - Shine effect on Sign Up button
- **Footer Component**: Site footer with links and contact info
- **App Component**: Main component with state management and routing

### Pages Directory
All page content has been moved to separate files:

1. **HomePage.jsx** - Complete hero section with:
   - Animated backgrounds
   - Company statistics
   - Why Choose Vionix section
   - Core services preview
   - Client testimonials
   - Call-to-action sections

2. **AboutPage.jsx** - Company information:
   - Mission and vision
   - Operating models (Complete Control & Managed Service)
   - Technology highlights

3. **SolutionsPage.jsx** - Services and features:
   - Portfolio construction
   - Risk management
   - Performance analytics
   - ESG integration

4. **ContactPage.jsx** - Contact information:
   - Contact form
   - Office details
   - Phone and email

5. **LoginPage.jsx** - User authentication:
   - Email/password login form
   - Social login (Google, Facebook)
   - Remember me option
   - Forgot password link

6. **SignupPage.jsx** - User registration:
   - Full registration form
   - Password confirmation
   - Terms of service agreement
   - Social signup options

### Styling

#### index.css
- Tailwind CSS v4 with `@tailwindcss/vite` plugin
- Custom theme colors defined in `@theme` block
- Custom animations and utilities
- Component classes using `@apply`

**Custom Colors:**
- `primary-600`: #4f46e5 (Indigo)
- `primary-800`: #3730a3 (Dark Indigo)
- `secondary-400`: #fbbf24 (Amber)
- `secondary-500`: #f59e0b (Orange)

## CSS Linter Warnings

The warnings about `@theme` and `@apply` are **expected and safe to ignore**. These are valid Tailwind CSS v4 directives that the standard CSS linter doesn't recognize.

Configuration files have been added to suppress these warnings:
- `.stylelintrc.json` - Configures Stylelint to ignore Tailwind directives
- `.postcssrc.json` - PostCSS configuration for Tailwind

## Benefits of This Structure

1. **Separation of Concerns**: Each page is in its own file
2. **Maintainability**: Easier to find and update specific pages
3. **Scalability**: Simple to add new pages
4. **Reusability**: Shared components (Navbar, Footer) in App.jsx
5. **Clean Code**: App.jsx reduced from 800+ lines to 138 lines

## Adding New Pages

1. Create new page component in `src/pages/`
2. Export it from `src/pages/index.js`
3. Import in `App.jsx`
4. Add route case in `renderSection()` function
5. Add navigation item to Navbar

Example:
```javascript
// In pages/index.js
export { default as NewPage } from './NewPage';

// In App.jsx
import { HomePage, AboutPage, SolutionsPage, ContactPage, NewPage } from './pages';

// In renderSection()
case 'newpage':
  return <NewPage />;
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Notes

- All pages use Tailwind CSS for styling
- Animations are defined in `index.css`
- The app uses a simple state-based routing system (no React Router needed for now)
- Mobile-responsive design included in all pages
