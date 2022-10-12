import styled from "styled-components";

import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Mainside from "./Mainside";
import { connect } from "react-redux";

import { Navigate } from "react-router-dom";

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Navigate to="/" />}
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>Find talented pros in record time and keep business moving!</p>
      </Section>

      <Layout>
        <Leftside />
        <Mainside />
        <Rightside />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;

  h5 {
    color: #0a66c2;
    &:hover {
      cursor: pointer;
    }
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
