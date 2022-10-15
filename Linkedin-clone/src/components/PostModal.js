import styled from "styled-components";
import { useState } from "react";
import React from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import {postArticleAPI } from "../actions";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");

  const reset = (e) => {
    setEditorText("");
    props.handleClick(e);
  };

  const postArticle = (e) => {
    e.preventDefault();
    if(e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    props.postArticle(payload);
    reset(e);
  }

  return (
    <>
      {props.showModal === true && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(event) => reset(event)}>
                <img src="/images/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/images/user.svg" alt="" />
                )}
                <span>{props.user ? props.user.displayName : ""}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                  onChange={(e) => setEditorText(e.target.value)}
                ></textarea>
              </Editor>
            </SharedContent>
            <SharedCreation>
              <AttachAssets>
                <AssetButton>
                  <img
                    src="https://img.icons8.com/material-outlined/30/000000/image.png"
                    alt=""
                  />
                </AssetButton>
                <AssetButton>
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/30/000000/video.png"
                    alt=""
                  />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/comments--v1.png"
                    alt=""
                  />
                  Anyone
                </AssetButton>
              </ShareComment>

              <PostButton disabled={!editorText ? true : false} onClick={(event)=>postArticle(event)}>
                Post
              </PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  color: black;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    color: rgba(0, 0, 0, 0.5);

    svg,
    img {
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 50%;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 8px;
  }
`;

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
  margin-right: 8px;
`;

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;

  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.45);

  img {
    margin-right: 4px;
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.disabled ? "rgba(0,0,0,0.5)" : "#0a66c2"};
  color: white;
  border: none;
  padding-right: 24px;
  padding-left: 24px;

  &:hover {
    background-color: #0a4182;
    cursor: pointer;
  }
`;

const Editor = styled.div`
  padding: 12px 24px;

  textarea {
    width: 100%;
    border: none;
    min-height: 100px;
    resize: none;
    outline: none;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
