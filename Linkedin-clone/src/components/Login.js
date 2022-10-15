import styled from "styled-components";

import { connect } from "react-redux";

import { signInAPI } from "../actions";

import React from "react";

import { Navigate } from "react-router";

const Login = (props) => {
  return (
    <Container>
      {props.user && <Navigate to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/images/login-logo.svg" alt="Login" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community!</h1>
          <img src="/images/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const SignIn = styled.a`
  color: #0a66c2;
  font-size: 16px;
  padding: 10px 24px;
  transition-duration: 250ms;
  box-shadow: inset 0 0 0 1px #0a66c2;
  border-radius: 15px;
  font-weight: 600;
  line-height: 40px;
  text-decoration: none;

  &:hover {
    background-color: #0a66c2;
    color: white;
    border: 0px white;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    padding: 6px 20px;
  }
`;

const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0px 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  margin-right: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    padding: 6px 20px;
  }
`;

const Section = styled.div`
  align-content: start;
  display: flex;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0px;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    font-size: 56px;
    width: 55%;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;

    @media (max-width: 768px) {
      font-size: 20px;
      width: 100%;
      text-align: center;
      line-height: 2px;
      height: 35px;
    }

    @media (max-width: 381px) {
      font-size: 16px;
    }
  }

  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -3px;
    top: 49px;
    right: -150px;

    @media (max-width: 768px) {
      height: initial;
      width: initial;
      position: initial;
      bottom: -20px;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
    align-items: center;
    width: 100%;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 35px;
  background-color: #fff;
  height: 56px;
  align-items: center;
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(207, 207, 207, 0.2);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
