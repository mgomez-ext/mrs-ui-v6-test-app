import { useState } from 'react';
import {
  Container,
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  Chip,
  Paper,
  Divider,
  Alert,
  IconButton,
  Tooltip,
} from '@mrs-uisystem/ui-v6';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ComponentShowcaseProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

function ComponentShowcase({ darkMode, onToggleDarkMode }: ComponentShowcaseProps) {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: 'center', position: 'relative' }}>
        {/* Dark Mode Toggle */}
        <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
          <Tooltip title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            <IconButton onClick={onToggleDarkMode} color="primary" size="large">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Box>

        <Typography variant="h2" component="h1" gutterBottom>
          MRS UI v6 Test App
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Testing @mrs-uisystem/ui-v6@0.7.0 in {darkMode ? 'Dark' : 'Light'} Mode
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
          <Chip label="v0.7.0" color="primary" size="small" />
          <Chip
            label={darkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
            color="secondary"
            size="small"
          />
        </Stack>
      </Box>

      <Stack spacing={4}>
        {/* Buttons Section */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Buttons & Actions
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
              Outlined Button
            </Button>
            <Button variant="text">Text Button</Button>
            <Button
              variant="contained"
              onClick={() => setCount(count + 1)}
              startIcon={<FavoriteIcon />}
            >
              Clicks: {count}
            </Button>
          </Stack>
        </Paper>

        {/* Form Section */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Form Controls
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
              label="Email"
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
              placeholder="Type your message here..."
              fullWidth
            />
          </Stack>
        </Paper>

        {/* Alerts Section */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Feedback Components
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack spacing={2}>
            <Alert severity="success">
              Success! Your package is working perfectly with MRS Design System styling.
            </Alert>
            <Alert severity="info">
              Info: All components are using Nunito font and verones color (#00686f).
            </Alert>
            <Alert severity="warning">
              Warning: Make sure to test in both light and dark modes!
            </Alert>
            <Alert severity="error">
              Error: This is just a demo error message to show styling.
            </Alert>
          </Stack>
        </Paper>

        {/* Chips Section */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Chips & Badges
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip label="Default Chip" />
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Success" color="success" />
            <Chip label="Error" color="error" />
            <Chip label="Deletable" onDelete={() => alert('Delete clicked!')} />
            <Chip label="Clickable" onClick={() => alert('Chip clicked!')} color="primary" />
          </Stack>
        </Paper>

        {/* Typography Section */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Typography (Nunito Font)
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack spacing={2}>
            <Typography variant="h1">Heading 1 - Nunito Bold</Typography>
            <Typography variant="h2">Heading 2 - Nunito SemiBold</Typography>
            <Typography variant="h4">Heading 4 - Nunito SemiBold</Typography>
            <Typography variant="body1">
              Body 1 - This is the standard body text using Nunito Regular font at 16px.
              The MRS Design System uses Nunito throughout for consistency.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Body 2 - Secondary text with reduced opacity for hierarchy.
            </Typography>
          </Stack>
        </Paper>

        {/* Footer */}
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            ✅ All MRS UI Components Working!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Package: @mrs-uisystem/ui-v6@0.7.0
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
            Using Nunito font, verones color (#00686f), and pill-shaped buttons
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}

export default ComponentShowcase;
