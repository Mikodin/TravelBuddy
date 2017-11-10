const transactions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [
        ...state,
        {
          desc: action.desc,
          amount: action.amount,
          category: action.category,
        },
      ];

    default:
      return state;
  }
};

export default transactions;
