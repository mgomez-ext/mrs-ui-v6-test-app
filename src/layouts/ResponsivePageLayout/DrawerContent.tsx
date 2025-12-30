/**
 * DrawerContent Component
 * Navigation content for the MRS Sidenav
 * Based on Figma design: MRS - Material UI v.7.2.0
 */

import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  Divider,
  MaterialSymbol,
} from '@mrs-uisystem/ui-v6';
import { navigationData } from './navigationData';
import type { NavSection, NavItem } from './navigationData';

interface DrawerContentProps {
  selectedItemId?: string;
  onItemClick?: (itemId: string) => void;
  onClose?: () => void;
  showLogo?: boolean;
}

/**
 * Logo Component for Drawer header
 */
function Logo() {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        fontWeight: 600,
        letterSpacing: 0.5,
        display: 'flex',
        alignItems: 'baseline',
      }}
    >
      <Box component="span" sx={{ color: 'text.secondary' }}>
        Mi
      </Box>
      <Box component="span" sx={{ color: 'primary.main' }}>
        REDSALUD
      </Box>
    </Typography>
  );
}

/**
 * Navigation Item Component
 */
function NavListItem({
  item,
  selected,
  onClick,
}: {
  item: NavItem;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <>
      <ListItem
        onClick={onClick}
        sx={{
          cursor: 'pointer',
          borderRadius: 1,
          mx: 1,
          bgcolor: selected ? 'primary._states.selected' : 'transparent',
          '&:hover': {
            bgcolor: selected ? 'primary._states.selected' : 'action.hover',
          },
          py: 1,
          px: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
          <MaterialSymbol
            icon={item.icon}
            size="medium"
            color={selected ? 'primary.main' : 'action.active'}
          />
          <Typography
            variant="body1"
            sx={{
              color: selected ? 'primary.main' : 'text.primary',
              fontWeight: selected ? 600 : 400,
            }}
          >
            {item.label}
          </Typography>
        </Box>
      </ListItem>
      {item.divider && <Divider sx={{ mx: 2, my: 0.5 }} />}
    </>
  );
}

/**
 * Navigation Section Component
 */
function NavSectionComponent({
  section,
  selectedItemId,
  onItemClick,
}: {
  section: NavSection;
  selectedItemId?: string;
  onItemClick: (itemId: string) => void;
}) {
  return (
    <Box sx={{ mb: 2 }}>
      {section.title && (
        <Typography
          variant="body1"
          sx={{
            px: 2,
            py: 1,
            fontWeight: 600,
            color: 'text.secondary',
            fontSize: '1rem',
            lineHeight: '48px',
            letterSpacing: '0.1px',
          }}
        >
          {section.title}
        </Typography>
      )}
      {section.items.map((item) => (
        <NavListItem
          key={item.id}
          item={item}
          selected={selectedItemId === item.id}
          onClick={() => onItemClick(item.id)}
        />
      ))}
    </Box>
  );
}

/**
 * DrawerContent - Main content for the navigation drawer
 */
export function DrawerContent({
  selectedItemId = 'citas',
  onItemClick,
  onClose,
  showLogo = true,
}: DrawerContentProps) {
  const handleItemClick = (itemId: string) => {
    onItemClick?.(itemId);
    onClose?.();
  };

  return (
    <Box
      sx={{
        width: 256,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
      }}
    >
      {/* Logo Area - 64px height */}
      {showLogo && (
        <Box
          sx={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            px: 2,
            borderBottom: 0,
          }}
        >
          <Logo />
        </Box>
      )}

      {/* Spacing */}
      <Box sx={{ height: 16 }} />

      {/* Action Button */}
      <Box sx={{ px: 2 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<MaterialSymbol icon="add" size="small" />}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          Agendar
        </Button>
      </Box>

      {/* Spacing */}
      <Box sx={{ height: 16 }} />

      {/* Navigation List */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <List disablePadding>
          {navigationData.map((section) => (
            <NavSectionComponent
              key={section.id}
              section={section}
              selectedItemId={selectedItemId}
              onItemClick={handleItemClick}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default DrawerContent;

