export const addTransaction = ({ amount, desc }) => ({
  type: 'ADD_TRANSACTION',
  amount,
  desc,
});

export const addTransactionAsync = (amount, desc, category) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      console.log(amount);
      dispatch({
        type: 'ADD_TRANSACTION',
        amount,
        desc,
        category,
      });
      resolve(true);
    });
  };
};
