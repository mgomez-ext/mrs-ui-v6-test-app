# MRS UI v6 Test Application

This is a test application to verify the installation and implementation of `@mrs-uisystem/ui-v6` package.

## Package Information

- **Package**: `@mrs-uisystem/ui-v6`
- **Version**: `0.7.0`
- **Published**: December 30, 2025
- **npm**: https://www.npmjs.com/package/@mrs-uisystem/ui-v6

## What's Tested

This application showcases and tests the following component categories from the MRS Design System:

### ✅ Buttons & Actions
- Button (primary, secondary, outlined, text variants)
- IconButton
- Tooltip integration

### ✅ Form Controls
- TextField
- Checkbox
- Radio & RadioGroup
- Switch
- Select & MenuItem
- FormControlLabel

### ✅ Feedback Components
- Alert (success, info, warning, error)
- CircularProgress
- LinearProgress

### ✅ Data Display
- Chip (with colors, icons, delete functionality)
- Avatar
- Badge
- Typography (all variants)
- Link

### ✅ Layout Components
- Container
- Box
- Stack (vertical and horizontal)
- Paper
- Divider

## Setup Instructions

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation Steps

1. **Create a new Vite React TypeScript project**:
   ```bash
   npm create vite@latest my-app -- --template react-ts
   cd my-app
   npm install
   ```

2. **Downgrade React to version 18** (required for MUI v6):
   ```bash
   npm install react@^18.3.0 react-dom@^18.3.0
   ```

3. **Install MRS UI and its peer dependencies**:
   ```bash
   npm install @mrs-uisystem/ui-v6@latest @mui/material@^6.5.0 @emotion/react@^11.11.0 @emotion/styled@^11.11.0 @mui/icons-material@^6.5.0
   ```

4. **Add Nunito font to `index.html`**:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap"
     rel="stylesheet"
   />
   ```

5. **Set up theme in your `App.tsx`**:
   ```tsx
   import { ThemeProvider, createTheme } from '@mui/material/styles';
   import CssBaseline from '@mui/material/CssBaseline';

   const theme = createTheme({
     palette: {
       primary: {
         main: '#00686f', // MRS verones color
         dark: '#004e53',
         contrastText: '#ffffff',
       },
       secondary: {
         main: '#99cc00',
         contrastText: '#000000de',
       },
     },
     typography: {
       fontFamily: '"Nunito", -apple-system, sans-serif',
     },
     shape: {
       borderRadius: 12,
     },
   });

   function App() {
     return (
       <ThemeProvider theme={theme}>
         <CssBaseline />
         {/* Your components here */}
       </ThemeProvider>
     );
   }
   ```

6. **Import and use components**:
   ```tsx
   import {
     Button,
     TextField,
     Alert,
     Container,
     Stack,
   } from '@mrs-uisystem/ui-v6';

   function MyComponent() {
     return (
       <Container>
         <Stack spacing={2}>
           <Button variant="contained" color="primary">
             Click me
           </Button>
           <TextField label="Your name" />
           <Alert severity="success">Success message!</Alert>
         </Stack>
       </Container>
     );
   }
   ```

## Running This Test App

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5173 (or the port shown in terminal)
```

## Available Components

The `@mrs-uisystem/ui-v6` package includes **54 production-ready components**:

### Atoms (28 components)
- Avatar, Badge, Box, Button, Checkbox, Chip, CircularProgress
- Container, Divider, FormControlLabel, FormGroup, Grid, Icon
- IconButton, LinearProgress, Link, MenuItem, Paper, Radio
- RadioGroup, Select, Skeleton, Slider, Stack, Switch
- TextField, Tooltip, Typography

### Molecules (11 components)
- Accordion, Alert, AppBar, Autocomplete, BottomNavigation
- ButtonGroup, Card, DatePicker, DateTimePicker, Dialog
- Drawer, List, ListItem, Menu, Pagination, Rating
- Snackbar, SpeedDial, Stepper, Table, Tabs, Timeline

## Key Features

✅ **54 Production-Ready Components**
✅ **Full TypeScript Support**
✅ **Material UI v6.5 Foundation**
✅ **Comprehensive Testing** (1128 tests, 100% pass rate)
✅ **Figma Code Connect Integration**
✅ **Storybook Documentation**
✅ **Dark Mode Support**
✅ **Responsive Design**
✅ **WCAG Compliant**

## Package Links

- **npm Package**: https://www.npmjs.com/package/@mrs-uisystem/ui-v6
- **GitHub Repository**: https://github.com/mgomez-ext/mrs-ui
- **Storybook Documentation**: https://mgomez-ext.github.io/mrs-ui/
- **Latest Release**: https://github.com/mgomez-ext/mrs-ui/releases/tag/v0.7.0

## Troubleshooting

### React Version Conflict

If you see peer dependency errors, ensure you're using React 18:

```bash
npm install react@^18.3.0 react-dom@^18.3.0
```

### Font Not Loading

Make sure the Nunito font is properly imported in your `index.html`.

### Theme Issues

If components don't look right, ensure you've wrapped your app with `ThemeProvider` and `CssBaseline`.

## Version History

- **v0.7.0** (Dec 30, 2025) - Figma Code Connect Integration
- **v0.6.0** (Dec 29, 2025) - Phase 6 Complete (Advanced Components)
- **v0.4.0** - Material Symbols migration complete

## License

UNLICENSED (Proprietary - MRS Design System Team)

## Support

For issues or questions, please visit the [GitHub repository](https://github.com/mgomez-ext/mrs-ui/issues).
