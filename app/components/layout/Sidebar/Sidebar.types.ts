import { ReactNode } from 'react';

export interface SidebarStyledProps {
  isOpen?: boolean;
  children?: ReactNode;
}

export interface NavItemProps {
  active?: boolean;
  children: ReactNode;
}
