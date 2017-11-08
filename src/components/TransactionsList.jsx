import React from 'react';

const TransactionsList = ({ transactions, onTransactionAdd }) => {
  const addTransaction = () => {
    onTransactionAdd({ amount: 150, desc: 'Test' }).then(res =>
      console.log(res)
    );
  };

  return (
    <div>
      <button onClick={() => addTransaction()}>Add Xaction</button>
      <ul>
        {transactions.map(xAction => (
          <li key={xAction.amount}>
            {xAction.desc} {xAction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
