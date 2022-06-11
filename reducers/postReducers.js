const initialState = {
    posts: [],
    comments: []
  };
  
  const postReducers = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POSTS_SUCCESS":
        return {
            ...state,
            posts: action.payload,
        };
        case "GET_POSTS_FAILURE":
        return {
            ...state,
        };
        case "GET_POST_COMMENTS_SUCCESS":
        return {
            ...state,
            comments: action.payload,
        };
        case "GET_POST_COMMENTS_FAILURE":
        return {
            ...state,
        };
        default: 
        return state;
    }
  };
  
  export default postReducers;
  