import React from 'react';

import TransactionMakerContainer from '../containers/TransactionMaker.C';

const TransactionsHome = ({ user }) => {
  return (
    <div>
      <TransactionMakerContainer />
      <h3>
        {user.baseCurrency} -> {user.targetCurrency}
      </h3>
    </div>
  );
};

export default TransactionsHome;
