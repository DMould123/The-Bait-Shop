import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1a1a;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
  max-width: 150px;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #1a1a1a;
    padding: 1rem;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e6e6e6;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const LanguageToggle = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ToggleButton = styled.button`
  background: ${({ active }) => (active ? '#ffffff' : 'transparent')};
  color: ${({ active }) => (active ? '#1a1a1a' : '#ffffff')};
  border: 1px solid white;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e6e6e6;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
