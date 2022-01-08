import styled from "styled-components";
import {signInWithPopup} from 'firebase/auth';
import {auth, provider} from "../firebase";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {selectUserName, selectUserPhoto, setUserLoginDetails} from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const setUser = (user) => {
    dispatch(setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    }));
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+"/>
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <img src="/images/home-icon.svg" alt="HOME"/>
              <span>HOME</span>
            </a>
            <a href="/">
              <img src="/images/search-icon.svg" alt="SEARCH"/>
              <span>SEARCH</span>
            </a>
            <a href="/">
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST"/>
              <span>WATCHLIST</span>
            </a>
            <a href="/">
              <img src="/images/original-icon.svg" alt="ORIGINALS"/>
              <span>ORIGINALS</span>
            </a>
            <a href="/">
              <img src="/images/movie-icon.svg" alt="MOVIES"/>
              <span>MOVIES</span>
            </a>
            <a href="/">
              <img src="/images/series-icon.svg" alt="SERIES"/>
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src={userPhoto} alt={userName}/>
        </>
      )}
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

  a {
    padding: 0 12px;
    display: flex;
    align-items: center;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      position: relative;
      padding: 2px 0;
      color: #f9f9f9;
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      white-space: nowrap;

      &:before {
        position: absolute;
        right: 0;
        bottom: -6px;
        left: 0;
        height: 2px;
        width: auto;
        background-color: #f9f9f9;
        border-radius: 0 0 4px 4px;
        content: '';
        opacity: 0;
        visibility: hidden;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:before {
        opacity: 1 !important;
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  padding: 8px 16px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    cursor: pointer;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

export default Header;
