import React from 'react';
import { HeaderWrapper, Logo, NavLinks, NavLink, AuthButtons, Button } from './styles';  // Import styles

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Logo</Logo>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/profile">Profile</NavLink>
        <NavLink href="/shop">Shop</NavLink>
      </NavLinks>
      <AuthButtons>
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </AuthButtons>
    </HeaderWrapper>
  );
};

export default Header;
