import { GET_ARTICLES } from "../actions/actionType";

export const initState = {
    articles: [],
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;