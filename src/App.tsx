import { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '@mrs-uisystem/ui-v6';
import {
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
} from '@mrs-uisystem/ui-v6';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ResponsivePageLayout } from './layouts';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState('proximas');

  // Use the appropriate theme based on mode
  const currentTheme = useMemo(
    () => (darkMode ? darkTheme : lightTheme),
    [darkMode]
  );

  // Tabs for the page header
  const pageTabs = [
    { id: 'proximas', label: 'PRÓXIMAS' },
    { id: 'historial', label: 'HISTORIAL' },
  ];

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      
      {/* Responsive Page Layout with Drawer from @mrs-uisystem/ui-v6 */}
      <ResponsivePageLayout
        pageTitle="Citas"
        tabs={pageTabs}
        activeTabId={activeTab}
        onTabChange={setActiveTab}
      >
        {/* Theme Toggle - Floating */}
        <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}>
          <Tooltip title={darkMode ? 'Light Mode' : 'Dark Mode'}>
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              color="primary"
              sx={{
                bgcolor: 'background.paper',
                boxShadow: 4,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Box>

        {/* Main Content */}
        <Stack spacing={4}>
          {/* Tab Content Display */}
          <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default' }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {activeTab === 'proximas' ? 'Próximas Citas' : 'Historial de Citas'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vista activa: {activeTab.toUpperCase()}
            </Typography>
          </Paper>

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
              <Alert 
                severity="success"
                sx={{
                  maxWidth: 500,
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  verticalAlign: 'middle',
                }}
              >
                Success! MRS components are working perfectly!
              </Alert>
              <Alert 
                severity="info"
                sx={{
                  maxWidth: 500,
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  verticalAlign: 'middle',
                }}
              >
                All components from @mrs-uisystem/ui-v6 package
              </Alert>
              <Alert 
                severity="warning"
                sx={{
                  maxWidth: 500,
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  verticalAlign: 'middle',
                }}
              >
                Using Nunito font and MRS design tokens
              </Alert>
              <Alert 
                severity="error"
                sx={{
                  maxWidth: 500,
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  verticalAlign: 'middle',
                }}
              >
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
            <Stack direction="row" spacing={4} sx={{ mb: 4, flexWrap: 'wrap' }}>
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
            <Stack direction="row" spacing={4} alignItems="center" sx={{ mb: 4, flexWrap: 'wrap' }}>
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
            <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 4, flexWrap: 'wrap' }}>
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
      </ResponsivePageLayout>
    </ThemeProvider>
  );
}

export default App;
