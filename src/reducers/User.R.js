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
      return Object.assign({}, defaultState, {
        fb: { username: action.username, password: action.password },
      });

    default:
      return state;
  }
};

export default user;
