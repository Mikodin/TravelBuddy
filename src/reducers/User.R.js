const defaultState = {
  fb: null,
  baseCurrency: 'USD',
  targetCurrency: 'JPY',
  weeklyBudget: 0,
  currentFunds: 0,
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        fb: { username: action.username, password: action.password },
      });

    case 'UPDATE_CURRENT_FUNDS':
      return Object.assign({}, state, {
        currentFunds: action.currentFunds,
      });

    case 'SET_CURRENT_FUNDS':
      return Object.assign({}, state, {
        currentFunds: action.currentFunds,
      });

    case 'SET_USER':
      return Object.assign({}, action.user);

    default:
      return state;
  }
};

export default user;
