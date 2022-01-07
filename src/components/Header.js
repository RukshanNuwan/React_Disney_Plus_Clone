import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+"/>
      </Logo>
      <NavMenu>menu</NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 70px;
  padding: 0 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #090b13;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 80px;
  max-height: 70px;
  margin-top: 4px;
  padding: 0;
  display: inline-block;
  font-size: 0;

  img {
    width: 100%;
    display: block;
  }
`;

const NavMenu = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto 0 25px;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: row nowrap;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
