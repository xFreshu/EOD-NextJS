import styled from 'styled-components';
import { NavItemProps, SidebarStyledProps } from './Sidebar.types';

export const Container = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div<SidebarStyledProps>`
  width: 250px;
  height: 100vh;
  background-color: #f7f7f7;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

export const Content = styled.div`
  margin-left: 250px;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const HamburgerButton = styled.div`
  display: none;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 1001;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Overlay = styled.div<SidebarStyledProps>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

export const NavItem = styled.a<NavItemProps>`
  color: ${({ active }) => (active ? 'yourActiveColor' : 'yourNormalColor')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;
