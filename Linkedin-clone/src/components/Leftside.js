import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>
              Welcome, {props.user ? props.user.displayName : "there"}!
            </Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/images/item-icon.svg" alt="" />
            My items
          </span>
        </Item>
      </ArtCard>

      <ArtCard>
        <Community>
          <a>
            <div>
              <span>Groups</span>
              <span>Events</span>
              <span>Follow Hashtags</span>
            </div>
            <img src="/images/images/plus-icon.svg" alt="" />
          </a>
        </Community>
        <Discover>
          <span>Discover more</span>
        </Discover>
      </ArtCard>
    </Container>
  );
};

const Container = styled.div``;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 0 1px rgba(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  border-radius: 8px;
  transition: all 83ms;
  position: relative;
  border: none;
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 12px 12px 16px;
`;

const CardBackground = styled.div`
  background: url("images/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url(/images/images/photo.svg);
  width: 72px;
  height: 72px;
  border-radius: 50%;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 12px;
  padding-top: 12px;

  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      cursor: pointer;
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        font-size: 14px;
        line-height: 1.33;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
`;

const Item = styled.div`
  display: block;
  font-size: 14px;
  text-align: left;
  padding: 12px 5px;

  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    font-weight: 500;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;

const Community = styled.div`
  padding-bottom: 12px;
  padding-top: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px 0px 12px;

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        line-height: 1.44;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
`;

const Discover = styled.div`
  display: block;
  padding-bottom: 5px;
  padding-top: 8px;
  text-align: left;
  padding-left: 12px;
  span {
    font-weight: 700;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Leftside);
