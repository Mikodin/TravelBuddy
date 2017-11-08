export const addTransaction = ({ amount, desc }) => ({
  type: 'ADD_TRANSACTION',
  amount,
  desc,
});

export const addTransactionAsync = ({ amount, desc }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(addTransaction({ amount, desc }));
      resolve(true);
    });
  };
};
