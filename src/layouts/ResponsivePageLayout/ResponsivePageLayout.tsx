/**
 * ResponsivePageLayout Component
 * Main layout component with responsive sidenav and content area
 * Based on Figma design: MRS - Material UI v.7.2.0
 *
 * AppBar/Toolbar: Persistent on ALL breakpoints
 *
 * Breakpoints:
 * - Desktop (≥1280px): Permanent sidenav, full user info
 * - Tablet (744px - 1279px): Temporary drawer, hamburger menu
 * - Mobile (<744px): Temporary drawer, simplified AppBar
 */

import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Drawer,
  Divider,
  MaterialSymbol,
} from '@mrs-uisystem/ui-v6';
import logoMiRedsalud from '../../assets/logo-miredsalud.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DrawerContent } from './DrawerContent';
import { PageHeader } from './PageHeader';
import { defaultUserData } from './navigationData';

const DRAWER_WIDTH = 256;

interface ResponsivePageLayoutProps {
  children: ReactNode;
  pageTitle: string;
  tabs?: { id: string; label: string }[];
  activeTabId?: string;
  onTabChange?: (tabId: string) => void;
}

/**
 * Logo Component - SVG logo
 */
function Logo({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  return (
    <img
      src={logoMiRedsalud}
      alt="MiREDSALUD"
      style={{
        height: variant === 'compact' ? 24 : 28,
        width: 'auto',
      }}
    />
  );
}

/**
 * AccountStack - User info display
 */
function AccountStack({
  variant = 'full',
}: {
  variant?: 'full' | 'compact';
}) {
  const user = defaultUserData;

  if (variant === 'compact') {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton size="small">
          <MaterialSymbol icon="notifications" color="action.active" />
        </IconButton>
        <Avatar
          src={user.avatarSrc}
          alt={user.name}
          sx={{ width: 32, height: 32 }}
        >
          {user.initials}
        </Avatar>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <IconButton size="small">
        <MaterialSymbol icon="notifications" color="action.active" />
      </IconButton>
      <Divider orientation="vertical" flexItem sx={{ height: 32 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar
          src={user.avatarSrc}
          alt={user.name}
          sx={{ width: 40, height: 40 }}
        >
          {user.initials}
        </Avatar>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.43 }}>
            {user.name}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.66 }}>
            {user.accountType}
          </Typography>
        </Box>
        <IconButton size="small" sx={{ ml: 0.5 }}>
          <MaterialSymbol icon="expand_more" size="small" color="action.active" />
        </IconButton>
      </Box>
    </Box>
  );
}

/**
 * ResponsivePageLayout - Main layout component
 */
export function ResponsivePageLayout({
  children,
  pageTitle,
  tabs,
  activeTabId,
  onTabChange,
}: ResponsivePageLayoutProps) {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState('citas');

  // Breakpoint detection
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); // ≥1280px
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavItemClick = (itemId: string) => {
    setSelectedNavItem(itemId);
    if (!isDesktop) {
      setDrawerOpen(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* AppBar - Persistent on ALL breakpoints */}
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64 }}>
          {/* Left: Menu button + Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'action.active' }}
            >
              <MaterialSymbol icon="menu" />
            </IconButton>
            <Logo variant={isMobile ? 'compact' : 'full'} />
          </Box>

          {/* Right: User info */}
          <AccountStack variant={isMobile ? 'compact' : 'full'} />
        </Toolbar>
      </AppBar>

      {/* Content wrapper below AppBar */}
      <Box sx={{ display: 'flex', flex: 1, pt: '64px' }}>
        {/* Desktop Permanent Drawer */}
        {isDesktop && (
          <Drawer
            variant="permanent"
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
                borderRight: 1,
                borderColor: 'divider',
                top: 64, // Below AppBar
                height: 'calc(100% - 64px)',
              },
            }}
          >
            <DrawerContent
              selectedItemId={selectedNavItem}
              onItemClick={handleNavItemClick}
              showLogo={false}
            />
          </Drawer>
        )}

        {/* Tablet/Mobile Temporary Drawer */}
        {!isDesktop && (
          <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better mobile performance
            }}
            sx={{
              '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
                top: 64, // Below AppBar
                height: 'calc(100% - 64px)',
              },
            }}
          >
            <DrawerContent
              selectedItemId={selectedNavItem}
              onItemClick={handleNavItemClick}
              onClose={handleDrawerToggle}
              showLogo={false}
            />
          </Drawer>
        )}

        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: isDesktop ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%',
            bgcolor: 'background.default',
            minHeight: 'calc(100vh - 64px)',
          }}
        >

        {/* Content Container */}
        <Box
          sx={{
            maxWidth: 1200,
            mx: 'auto',
            px: { xs: 2, sm: 3, lg: 4 },
            py: { xs: 2, sm: 3 },
          }}
        >
          {/* Page Header with breadcrumbs, title, tabs */}
          <PageHeader
            title={pageTitle}
            tabs={tabs}
            activeTabId={activeTabId}
            onTabChange={onTabChange}
            showBackButton={isMobile}
            isMobile={isMobile}
            onBackClick={() => window.history.back()}
          />

          {/* Page Content */}
          <Box sx={{ mt: 3 }}>
            {children}
          </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ResponsivePageLayout;

