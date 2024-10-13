import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  color: #fff;
`;

const Nav = styled.nav`
  a {
    color: #fff;
    margin-right: 15px;
    text-decoration: none;
  }
`;

const Content = styled.main`
  padding: 20px;
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Dashboard</Link>
          <Link to="/customers">Clientes</Link>
          <Link to="/settings">Configurações</Link>
        </Nav>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
