import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getArticlesAPI } from "../actions";
import { useEffect, useState } from "react";
import PostModal from "./PostModal";

const Mainside = (props) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <Container>
      <ShareBox>
        Share
        <div>
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoURL} alt="" />
          ) : (
            <img src="/images/images/user.svg" alt="" />
          )}
          <button onClick={handleClick}>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/images/photo.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/images/photo.svg" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/images/photo.svg" alt="" />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        {props.articles.length > 0 &&
          props.articles.map((article, key) => (
            <Article key={key}>
              <SharedActor>
                <a>
                  <img src={article.actor.image} alt="" />
                  <div>
                    <span>{article.actor.title}</span>
                    <span>{article.actor.description}</span>
                    <span>
                      {article.actor.date.toDate().toLocaleDateString()}
                    </span>
                  </div>
                </a>
                <button>
                  <img src="/images/images/ellipsis-svgrepo-com.svg" alt="" />
                </button>
              </SharedActor>
              <Description>{article.content}</Description>

              <SocialActions>
                <button>
                  <img
                    src="/images/images/like.png"
                    alt=""
                    style={{ width: "29px" }}
                  />
                  <span>Like</span>
                </button>
                <button>
                  <img
                    src="/images/images/comment.png"
                    alt=""
                    style={{ width: "29px" }}
                  />
                  <span>Comment</span>
                </button>
                <button>
                  <img
                    src="/images/images/share.png"
                    alt=""
                    style={{ width: "25px" }}
                  />
                  <span>Share</span>
                </button>
                <button>
                  <img
                    src="/images/images/save.png"
                    alt=""
                    style={{ width: "25px" }}
                  />
                  <span>Save</span>
                </button>
              </SocialActions>
            </Article>
          ))}
      </div>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/images/user.svg" alt="" />
              <div>
                <span>Someone</span>
                <span>something@gmail.com</span>
                <span>1/08/2022</span>
              </div>
            </a>
            <button>
              <img src="/images/images/ellipsis-svgrepo-com.svg" alt="" />
            </button>
          </SharedActor>
          <Description>What is the perfect image size to post on linkedIn?🤔</Description>
          <SharedImg>
            <a>
              <img
                src="https://sarahclaysocial.com/wp-content/uploads/2021/06/What-size-images-to-post-to-LinkedIn-with-Sarah-Clay.png"
                alt=""
              />
            </a>
          </SharedImg>
          <SocialActions>
            <button>
              <img
                src="/images/images/like.png"
                alt=""
                style={{ width: "29px" }}
              />
              <span>Like</span>
            </button>
            <button>
              <img
                src="/images/images/comment.png"
                alt=""
                style={{ width: "29px" }}
              />
              <span>Comment</span>
            </button>
            <button>
              <img
                src="/images/images/share.png"
                alt=""
                style={{ width: "25px" }}
              />
              <span>Share</span>
            </button>
            <button>
              <img
                src="/images/images/save.png"
                alt=""
                style={{ width: "25px" }}
              />
              <span>Save</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div``;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  bottom-margin: 8px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  border: none;
  box-shadow: 0px 0px 0 1px rgba(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #957b8b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: bold;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
          width: 30px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      overflow: hidden;
      margin-left: 8px;

      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 2) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    background: transparent;
    border: none;
    padding-top: 8px;
    right: 12px;
    top: 0;
    outline: none;

    img {
      width: 50%;
    }
  }
`;

const Description = styled.div`
  margin-bottom: 10px;

  padding: 0 16px;
  overflow: hidden;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  overflow: hidden;
  width: 100%;
  display: block;
  position: relative;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialActions = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;

  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.05);
    }

    span {
      color: #0a66c2;
      margin-left: 8px;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mainside);
