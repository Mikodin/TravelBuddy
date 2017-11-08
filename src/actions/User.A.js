export const fbLogin = ({ username, password }) => ({
  type: 'LOGIN',
  username,
  password,
});

export const fbLoginAsync = ({ username, password }) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(fbLogin({ username, password }));
      resolve({ username, password });
    });
  };
};
