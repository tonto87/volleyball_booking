import styled from 'styled-components';

// Header container
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
`;

// Logo section
export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

// Navigation links container
export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

// Individual link styling
export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

// Authentication buttons container
export const AuthButtons = styled.div`
  display: flex;
  gap: 10px;
`;

// Button styling
export const Button = styled.button`
  padding: 10px 20px;
  background-color: #f39c12;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #e67e22;
  }
`;
