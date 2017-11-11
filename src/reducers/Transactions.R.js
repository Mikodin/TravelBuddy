const transactions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [
        ...state,
        {
          desc: action.desc,
          amount: action.amount,
          category: action.category,
          date: action.date,
          icon: action.icon,
        },
      ];

    default:
      return state;
  }
};

export default transactions;
