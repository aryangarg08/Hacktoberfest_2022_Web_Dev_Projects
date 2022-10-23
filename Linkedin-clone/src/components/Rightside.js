import React from "react";
import styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#LinkedIn</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recomendations>
          View All Recomendations
          <img src="/images/images/right-icon.svg" alt="" />
        </Recomendations>
      </FollowCard>
    </Container>
  );
};

const Container = styled.div``;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 0 1px rgba(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  border-radius: 8px;
  transition: all 83ms;
  position: relative;
  padding: 12px;
  border: none;
`;

const Title = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);

  h2 {
    font-size: 16px;
  }
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 16px 0;
    position: relative;
    font-size: 14px;

    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      color: rgba(0, 0, 0, 0.6);
      max-width: 480px;
      max-height: 32px;
      width: 125px;
      height: 25px;
      align-items: center;
      display: inline-flex;
      justify-content: center;

      &:hover {
        cursor: pointer;
        background-color: #0a66c2;
        color: white;
      }
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  width: 42px;
  height: 42px;
  background-size: contain;
  background-position: center;
  margin-right: 8px;
`;

const Recomendations = styled.div`
  font-size: 14px;
  display: flex;
  text-align: center;
  color: #0a66c2;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default Rightside;
