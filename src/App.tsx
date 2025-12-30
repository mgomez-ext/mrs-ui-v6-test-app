import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@mrs-uisystem/ui-v6';
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  Paper,
  Divider,
  Alert,
  Chip,
  IconButton,
  Tooltip,
  MaterialSymbol,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
} from '@mrs-uisystem/ui-v6';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Create theme based on mode
  const currentTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: '#00686f', // MRS verones color
            dark: '#004e53',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#99cc00',
            contrastText: '#000000de',
          },
          ...(darkMode
            ? {
                // Dark mode palette
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
                text: {
                  primary: '#ffffff',
                  secondary: 'rgba(255, 255, 255, 0.7)',
                },
              }
            : {
                // Light mode palette
                background: {
                  default: '#fafafa',
                  paper: '#ffffff',
                },
                text: {
                  primary: 'rgba(0, 0, 0, 0.87)',
                  secondary: 'rgba(0, 0, 0, 0.6)',
                },
              }),
        },
        typography: {
          fontFamily: '"Nunito", -apple-system, sans-serif',
        },
        shape: {
          borderRadius: 12,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 28,
                textTransform: 'none',
              },
            },
          },
        },
      }),
    [darkMode]
  );

  const menuItems = [
    { text: 'Home', icon: 'home' },
    { text: 'Buttons', icon: 'smart_button' },
    { text: 'Forms', icon: 'edit_note' },
    { text: 'Feedback', icon: 'feedback' },
    { text: 'Chips', icon: 'label' },
    { text: 'Typography', icon: 'text_fields' },
    { text: 'Icons', icon: 'stars' },
    { text: 'Settings', icon: 'settings' },
  ];

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {/* AppBar */}
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 2 }}
            >
              <MaterialSymbol icon="menu" color="inherit" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MRS UI v6 Test App
            </Typography>
            <Chip label="v0.7.0" size="small" sx={{ mr: 1, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
            <Tooltip title={darkMode ? 'Light Mode' : 'Dark Mode'}>
              <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 280, pt: 2 }}>
            {/* Drawer Header */}
            <Box sx={{ px: 2, pb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="apps" size="large" color="primary.main" />
                <Typography variant="h6" color="primary">
                  MRS Menu
                </Typography>
              </Box>
              <IconButton onClick={() => setDrawerOpen(false)} size="small">
                <MaterialSymbol icon="close" size="small" />
              </IconButton>
            </Box>
            <Divider />

            {/* Navigation Menu */}
            <List>
              {menuItems.map((item) => (
                <ListItem
                  key={item.text}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                    py: 1.5,
                    px: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <MaterialSymbol icon={item.icon} color="primary.main" />
                    <Typography variant="body1">{item.text}</Typography>
                  </Box>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            {/* Drawer Footer */}
            <Box sx={{ px: 2, pb: 2 }}>
              <Alert severity="info" sx={{ fontSize: '0.875rem' }}>
                Using @mrs-uisystem/ui-v6 components
              </Alert>
            </Box>
          </Box>
        </Drawer>

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Container maxWidth="lg">
            {/* Header */}
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <Typography variant="h2" component="h1" gutterBottom>
                MRS UI v6 Component Showcase
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Testing @mrs-uisystem/ui-v6@0.7.0 in {darkMode ? 'Dark' : 'Light'} Mode
              </Typography>
              <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
                <Chip label="54 Components" color="primary" size="small" />
                <Chip label="Material Symbols" color="secondary" size="small" />
                <Chip label="Figma Code Connect" color="success" size="small" />
                <Chip
                  label={darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
                  color={darkMode ? 'default' : 'warning'}
                  size="small"
                />
              </Stack>
            </Box>

        <Stack spacing={4}>
          {/* Buttons Section */}
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              MRS Buttons (Pill-shaped)
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button variant="contained" color="primary">
                Primary Button
              </Button>
              <Button variant="contained" color="secondary">
                Secondary Button
              </Button>
              <Button variant="outlined" color="primary">
                Outlined
              </Button>
              <Button variant="text">Text</Button>
              <Button
                variant="contained"
                onClick={() => setCount(count + 1)}
                startIcon={<FavoriteIcon />}
              >
                Clicks: {count}
              </Button>
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              ✅ Using MRS Button component with verones color (#00686f)
            </Typography>
          </Paper>

          {/* Form Controls */}
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              MRS Form Components
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Stack spacing={2}>
              <TextField
                label="Your Name"
                variant="outlined"
                placeholder="Enter your name..."
                fullWidth
              />
              <TextField
                label="Email Address"
                variant="outlined"
                type="email"
                placeholder="your@email.com"
                fullWidth
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={3}
                placeholder="Type your message..."
                fullWidth
              />
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              ✅ Using MRS TextField component
            </Typography>
          </Paper>

          {/* Alerts */}
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              MRS Alert Components
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Stack spacing={2}>
              <Alert severity="success">
                Success! MRS components are working perfectly!
              </Alert>
              <Alert severity="info">
                All components from @mrs-uisystem/ui-v6 package
              </Alert>
              <Alert severity="warning">
                Using Nunito font and MRS design tokens
              </Alert>
              <Alert severity="error">
                This is a demo error alert
              </Alert>
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              ✅ Using MRS Alert component
            </Typography>
          </Paper>

          {/* Chips */}
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              MRS Chip Components
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Default" />
              <Chip label="Primary" color="primary" />
              <Chip label="Secondary" color="secondary" />
              <Chip label="Success" color="success" />
              <Chip label="Error" color="error" />
              <Chip label="Clickable" onClick={() => alert('Clicked!')} color="primary" />
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              ✅ Using MRS Chip component
            </Typography>
          </Paper>

          {/* Typography */}
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              MRS Typography (Nunito Font)
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Stack spacing={2}>
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="body1">
                Body 1 - Standard text using Nunito font family
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Body 2 - Secondary text
              </Typography>
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              ✅ Using MRS Typography component with Nunito font
            </Typography>
          </Paper>

          {/* Material Symbols Icons Grid */}
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Material Symbols Icons
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {/* Popular Icons Grid */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              Popular Icons
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: 2, mb: 4 }}>
              {['home', 'favorite', 'search', 'settings', 'account_circle', 'shopping_cart', 'notifications', 'mail',
                'menu', 'close', 'check', 'info', 'warning', 'error', 'star', 'delete'].map((iconName) => (
                <Box key={iconName} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                  <MaterialSymbol icon={iconName} size="large" color="primary.main" />
                  <Typography variant="caption" sx={{ fontSize: '10px', textAlign: 'center' }}>
                    {iconName}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Fill Variants (Outlined vs Filled) */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              Fill Variants (Outlined vs Filled)
            </Typography>
            <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="favorite" size="large" fill={0} color="error.main" />
                <Typography variant="caption">Outlined (fill=0)</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="favorite" size="large" fill={1} color="error.main" />
                <Typography variant="caption">Filled (fill=1)</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="star" size="large" fill={0} color="warning.main" />
                <Typography variant="caption">Outlined (fill=0)</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="star" size="large" fill={1} color="warning.main" />
                <Typography variant="caption">Filled (fill=1)</Typography>
              </Box>
            </Stack>

            {/* Size Variants */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              Size Scales
            </Typography>
            <Stack direction="row" spacing={4} alignItems="center" sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="settings" size="small" color="primary.main" />
                <Typography variant="caption">Small (20px)</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="settings" size="medium" color="primary.main" />
                <Typography variant="caption">Medium (24px)</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="settings" size="large" color="primary.main" />
                <Typography variant="caption">Large (36px)</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="settings" size={48} color="primary.main" />
                <Typography variant="caption">Custom (48px)</Typography>
              </Box>
            </Stack>

            {/* Weight Variants */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              Weight Variants
            </Typography>
            <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 4, flexWrap: 'wrap' }}>
              {([100, 200, 300, 400, 500, 600, 700] as const).map((w) => (
                <Box key={w} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <MaterialSymbol icon="home" size="large" weight={w} color="primary.main" />
                  <Typography variant="caption">{w}</Typography>
                </Box>
              ))}
            </Stack>

            {/* Grade Variants */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              Grade Variants (Visual Weight)
            </Typography>
            <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="star" size="large" grade={-50} fill={1} color="warning.main" />
                <Typography variant="caption">Grade -50</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="star" size="large" grade={0} fill={1} color="warning.main" />
                <Typography variant="caption">Grade 0</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="star" size="large" grade={100} fill={1} color="warning.main" />
                <Typography variant="caption">Grade 100</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <MaterialSymbol icon="star" size="large" grade={200} fill={1} color="warning.main" />
                <Typography variant="caption">Grade 200</Typography>
              </Box>
            </Stack>

            {/* Clickable Icons */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              Clickable Icons with Hover Effect
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <MaterialSymbol
                icon="thumb_up"
                size="large"
                fill={count > 0 ? 1 : 0}
                color={count > 0 ? "primary.main" : "inherit"}
                onClick={() => setCount(count + 1)}
                ariaLabel="Like"
              />
              <MaterialSymbol
                icon="favorite"
                size="large"
                fill={1}
                color="error.main"
                onClick={() => alert('Favorited!')}
                ariaLabel="Favorite"
              />
              <MaterialSymbol
                icon="share"
                size="large"
                color="primary.main"
                onClick={() => alert('Share clicked!')}
                ariaLabel="Share"
              />
            </Stack>

            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              ✅ Using MRS MaterialSymbol component with variable font technology
            </Typography>
          </Paper>

          {/* Footer */}
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h5" color="primary" gutterBottom>
              ✅ All Components from @mrs-uisystem/ui-v6
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Package: @mrs-uisystem/ui-v6@0.7.0
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
              Using MRS theme, Nunito font, verones color, and Material Symbols
            </Typography>
          </Box>
        </Stack>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
