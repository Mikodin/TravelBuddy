export const addTransaction = ({ amount, desc }) => ({
  type: 'ADD_TRANSACTION',
  amount,
  desc,
});

export const addTransactionAsync = (amount, desc, category) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const date = new Date();
      dispatch({
        type: 'ADD_TRANSACTION',
        amount,
        desc,
        category,
        date,
      });
      resolve(true);
    });
  };
};
