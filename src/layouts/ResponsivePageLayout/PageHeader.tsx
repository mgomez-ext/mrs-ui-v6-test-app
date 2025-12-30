/**
 * PageHeader Component
 * Responsive page header with breadcrumbs, title, and tabs
 * Based on Figma design: MRS - Material UI v.7.2.0
 */

import { Box, Typography, Button, IconButton, MaterialSymbol } from '@mrs-uisystem/ui-v6';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface TabItem {
  id: string;
  label: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  tabs?: TabItem[];
  activeTabId?: string;
  onTabChange?: (tabId: string) => void;
  onBackClick?: () => void;
  onHelpClick?: () => void;
  showBackButton?: boolean; // For mobile view
  isMobile?: boolean;
}

/**
 * Breadcrumbs Component
 */
function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {items.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {index > 0 && (
            <Typography variant="body1" color="text.secondary">
              /
            </Typography>
          )}
          {item.href ? (
            <Typography
              variant="body1"
              sx={{
                color: 'primary.main',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {item.label}
            </Typography>
          ) : (
            <Typography variant="body1" color="text.secondary">
              {item.label}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

/**
 * Collapsed Breadcrumbs with ellipsis
 */
function CollapsedBreadcrumbs() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <MaterialSymbol icon="add" size="small" color="text.secondary" />
      <Typography variant="body1" color="text.secondary">
        /
      </Typography>
      <Box
        sx={{
          bgcolor: 'action.hover',
          borderRadius: 0.5,
          px: 1,
          py: 0.25,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2" color="text.primary">
          ...
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary">
        /
      </Typography>
      <MaterialSymbol icon="add" size="small" color="text.secondary" />
      <Typography
        variant="body1"
        sx={{
          color: 'primary.main',
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        Link
      </Typography>
    </Box>
  );
}

/**
 * PageHeader - Main component
 */
export function PageHeader({
  title,
  breadcrumbs,
  tabs,
  activeTabId,
  onTabChange,
  onBackClick,
  onHelpClick,
  showBackButton = false,
  isMobile = false,
}: PageHeaderProps) {
  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    onTabChange?.(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Back Button (Mobile only) */}
      {showBackButton && (
        <Box sx={{ mb: 1 }}>
          <Button
            variant="text"
            color="primary"
            size="small"
            startIcon={<MaterialSymbol icon="arrow_back" size="small" />}
            onClick={onBackClick}
            sx={{
              textTransform: 'lowercase',
              fontWeight: 600,
              ml: -1,
            }}
          >
            volver
          </Button>
        </Box>
      )}

      {/* Title Row */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          py: isMobile ? 1 : 2,
          gap: 2,
        }}
      >
        {/* Left Side: Breadcrumbs + Title */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Breadcrumbs (Desktop/Tablet only) */}
          {!showBackButton && breadcrumbs && breadcrumbs.length > 0 && (
            <Box sx={{ mb: 1 }}>
              <Breadcrumbs items={breadcrumbs} />
            </Box>
          )}

          {/* Collapsed Breadcrumbs (Desktop/Tablet) */}
          {!showBackButton && !breadcrumbs && (
            <Box sx={{ mb: 1 }}>
              <CollapsedBreadcrumbs />
            </Box>
          )}

          {/* Page Title */}
          <Typography
            variant={isMobile ? 'h6' : 'h4'}
            sx={{
              fontWeight: isMobile ? 600 : 400,
              color: 'text.primary',
              lineHeight: isMobile ? 1.6 : 1.235,
              letterSpacing: isMobile ? '0.15px' : '0.25px',
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Right Side: Help Icon */}
        <Box sx={{ display: 'flex', alignItems: 'center', pt: isMobile ? 0 : 4 }}>
          <IconButton
            size="medium"
            color="default"
            onClick={onHelpClick}
            sx={{ color: 'action.active' }}
          >
            <MaterialSymbol icon="help" size="medium" />
          </IconButton>
        </Box>
      </Box>

      {/* Tabs */}
      {tabs && tabs.length > 0 && (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 1 }}>
          <Tabs
            value={activeTabId || tabs[0]?.id}
            onChange={handleTabChange}
            variant={isMobile ? 'fullWidth' : 'standard'}
            sx={{
              '& .MuiTab-root': {
                textTransform: 'uppercase',
                fontWeight: 600,
                fontSize: '0.875rem',
                letterSpacing: '0.4px',
                minWidth: isMobile ? 'auto' : 90,
              },
              '& .Mui-selected': {
                color: 'primary.main',
              },
            }}
          >
            {tabs.map((tab) => (
              <Tab key={tab.id} label={tab.label} value={tab.id} />
            ))}
          </Tabs>
        </Box>
      )}
    </Box>
  );
}

export default PageHeader;

