import api from "../network/api";

export const getPosts = () => {
    return async (dispatch) => {
      try {
        const response = await api.get("/posts");
        if (response.status === 200) {
          dispatch({
            type: "GET_POSTS_SUCCESS",
            payload: response.data,
          });
        }
      } catch (err) {
        dispatch({ type: "GET_POSTS_FAILURE", payload: err });
      }
    };
  };

  export const getPostComments = (id) => {
    return async (dispatch) => {
      try {
        const response = await api.get(`/posts/${id}/comments`);
        if (response.status === 200) {
          dispatch({
            type: "GET_POST_COMMENTS_SUCCESS",
            payload: response.data,
          });
        }
      } catch (err) {
        dispatch({ type: "GET_POST_COMMENTS_FAILURE", payload: err });
      }
    };
  };