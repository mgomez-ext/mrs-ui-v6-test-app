/**
 * Navigation Data Structure for MRS Responsive Layout
 * Based on Figma design: MRS - Material UI v.7.2.0
 */

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  divider?: boolean;
}

export interface NavSection {
  id: string;
  title?: string; // Section header (e.g., "Mi salud")
  items: NavItem[];
}

/**
 * Navigation menu structure matching Figma design
 */
export const navigationData: NavSection[] = [
  {
    id: 'main',
    items: [
      { id: 'inicio', label: 'Inicio', icon: 'home' },
      { id: 'citas', label: 'Citas', icon: 'event' },
    ],
  },
  {
    id: 'health',
    title: 'Mi salud',
    items: [
      { id: 'ordenes', label: 'Órdenes', icon: 'order_approve', divider: true },
      { id: 'recetas', label: 'Recetas', icon: 'medication', divider: true },
      { id: 'resultados', label: 'Resultados', icon: 'biotech', divider: true },
      { id: 'cirugias', label: 'Cirugías', icon: 'local_hospital', divider: true },
      { id: 'historial', label: 'Historial', icon: 'lab_profile', divider: true },
      { id: 'salud-preventiva', label: 'Salud preventiva', icon: 'heart_check', divider: true },
    ],
  },
  {
    id: 'pricing',
    title: 'Precios y coberturas',
    items: [
      { id: 'cotizador', label: 'Cotizador', icon: 'paid' },
      { id: 'planes', label: 'Planes y seguros', icon: 'health_and_safety' },
    ],
  },
  {
    id: 'account',
    title: 'Cuenta',
    items: [
      { id: 'datos', label: 'Mis datos', icon: 'account_circle' },
    ],
  },
];

/**
 * User data for AccountStack
 */
export interface UserData {
  name: string;
  accountType: string;
  avatarSrc?: string;
  initials?: string;
}

export const defaultUserData: UserData = {
  name: 'Paula Sapúlveda',
  accountType: 'Cuenta principal',
  avatarSrc: 'https://i.pravatar.cc/150?img=5',
  initials: 'PS',
};

