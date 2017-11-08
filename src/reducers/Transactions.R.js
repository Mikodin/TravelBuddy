const transactions = (
  state = [{ amount: 100, desc: 'InitialXAction' }],
  action
) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [
        ...state,
        {
          desc: action.desc,
          amount: action.amount,
        },
      ];

    default:
      return state;
  }
};

export default transactions;
