export const addTransaction = ({ amount, desc }) => ({
  type: 'ADD_TRANSACTION',
  amount,
  desc,
});

export const addTransactionAsync = (amount, desc, category) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const date = new Date();
      let icon;
      switch (category) {
        case 'food':
          icon = 'cutlery';
          break;
        case 'alcohol':
          icon = 'beer';
          break;
        case 'shopping':
          icon = 'shopping-cart';
          break;
        case 'lodging':
          icon = 'bed';
          break;
        case 'travel':
          icon = 'plane';
          break;
      }
      dispatch({
        type: 'ADD_TRANSACTION',
        amount,
        desc,
        category,
        date,
        icon,
      });
      resolve(true);
    });
  };
};
