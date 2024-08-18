'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
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

const Content = styled.div`
  margin-left: 250px;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const HamburgerButton = styled.div`
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

const Overlay = styled.div`
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

const NavItem = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
  margin: 15px 0;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

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

        <SidebarContainer isOpen={isOpen}>
          <NavItem href="#">Dashboard</NavItem>
          <NavItem href="#">Orders</NavItem>
          <NavItem href="#">Products</NavItem>
          <NavItem href="#">Settings</NavItem>
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
