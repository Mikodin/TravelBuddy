export const fbLogin = (username, password) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      console.log(getState());
      localStorage.setItem('redux', JSON.stringify(getState()));
      dispatch({
        type: 'LOGIN',
        username,
        password,
      });
      resolve(true);
    });
  };
};

export const updateCurrentFunds = (currentFunds, amountToModify) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const updatedFunds =
        Number.parseFloat(currentFunds) + Number.parseFloat(amountToModify);
      console.log(currentFunds);
      console.log(amountToModify);
      console.log(updatedFunds);
      dispatch({ type: 'UPDATE_CURRENT_FUNDS', currentFunds: updatedFunds });
      resolve(true);
    });
  };
};

export const setCurrentFunds = currentFunds => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const funds = Number.parseFloat(currentFunds);
      dispatch({ type: 'SET_CURRENT_FUNDS', currentFunds: funds });
      localStorage.setItem('user', JSON.stringify(getState().user));
      resolve(true);
    });
  };
};

export const setUser = user => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: 'SET_USER', user });
      resolve(true);
    });
  };
};
