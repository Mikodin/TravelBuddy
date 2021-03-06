import React from 'react';

import TransactionMakerContainer from '../containers/TransactionMaker.C';
import TransactionsListContainer from '../containers/TransactionsList.C';

const TransactionsHome = ({ user }) => {
  return (
    <div>
      <TransactionMakerContainer />
      <TransactionsListContainer />
      <h3>
        {user.baseCurrency} -> {user.targetCurrency}
      </h3>
    </div>
  );
};

export default TransactionsHome;
