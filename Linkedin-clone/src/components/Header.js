import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import React from "react";
import { connect } from "react-redux";
import { signOutAPI } from "../actions";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="/home">
                <img src="/images/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a href="/home">
                <img src="/images/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a href="/home">
                <img src="/images/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a href="/home">
                <img src="/images/images/nav-messaging.svg" alt="" />
                <span>Messages</span>
              </a>
            </NavList>

            <NavList>
              <a href="/home">
                <img src="/images/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>

            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button
                    style={{ padding: 0 }}
                    variant="text"
                    {...bindTrigger(popupState)}
                  >
                    <User>
                      <a>
                        {props.user && props.user.photoURL ? (
                          <img src={props.user.photoURL} alt="" />
                        ) : (
                          <img src="/images/images/user.svg" alt="" />
                        )}
                        <span>
                          Me
                          <img src="/images/images/down-icon.svg" alt="" />
                        </span>
                      </a>
                    </User>
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      style={{ color: "darkred" }}
                      onClick={() => props.signOut()}
                    >
                      Log out
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>

            <Work>
              <a>
                <img src="/images/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0px 24px;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 3px;
      width: 250px;
      box-shadow: none;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.9);
      padding: 0px 8px 0px 40px;
      line-height: 1.75;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  margin: 0;
  border-radius: 0 2px 2px 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);

      @media (max-width: 768px) {
        bottom: 0;
      }
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  a&.active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const User = styled(NavList)`
  a > img {
    height: 28px;
    border-radius: 50%;
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.22);
  @media (max-width: 768px) {
    display: none;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
