# Installation Guide

## Quick Start

### 1. Install Dependencies

Run the following command in the Frontend directory:

```bash
npm install
```

This will install all required packages including:
- **framer-motion** - For smooth animations
- **lucide-react** - For beautiful icons
- **react-intersection-observer** - For scroll animations
- **Tailwind CSS v4** - For styling

### 2. Run Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

## New Dependencies Added

The following packages have been added for the PMS page and enhanced UI:

- `framer-motion@^11.0.0` - Animation library
- `lucide-react@^0.344.0` - Icon library
- `react-intersection-observer@^9.8.0` - Scroll detection

## Navigation Structure

Your navbar now includes:
1. **Home** - Landing page
2. **About Us** - Company information
3. **Solutions** - Services overview
4. **PMS** - Portfolio Management Services ✨ (NEW)
5. **Contact** - Contact form
6. **Login** - User authentication
7. **Signup** - User registration

## Troubleshooting

### If you see module not found errors:
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### If the dev server doesn't start:
```bash
# Check if port 5173 is available
# Or specify a different port
npm run dev -- --port 3000
```

## Next Steps

After installation, you can:
- Customize the PMS page content
- Add backend integration for Login/Signup
- Configure environment variables
- Set up API endpoints
