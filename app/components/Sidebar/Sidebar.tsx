'use client';

import React, { useState } from 'react';
import {
  Container,
  Overlay,
  SidebarContainer,
  HamburgerButton,
  Content,
} from './Sidebar.styled';
import { FaBars } from 'react-icons/fa';
import ActiveLink from './ActiveLink';

const ResponsiveSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <HamburgerButton onClick={toggleSidebar}>
          <FaBars size={30} color="#333" />
        </HamburgerButton>
        //TODO
        <SidebarContainer isOpen={isOpen}>
          <ActiveLink href="/profil">Mój profil</ActiveLink>
          <ActiveLink href="/dashboard">Dashboard</ActiveLink>
        </SidebarContainer>
        <Overlay isOpen={isOpen} onClick={toggleSidebar} />
        <Content>
          <h1>Page Content</h1>
          <p>This is where your main content will be displayed.</p>
        </Content>
      </Container>
    </>
  );
};

export default ResponsiveSidebar;
