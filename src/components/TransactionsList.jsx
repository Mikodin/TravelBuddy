import React from 'react';

import {
  ConvertUsdToTarget,
  PrettyPrintMoney,
} from '../utils/ExchangeRateUtil';

const TransactionsList = ({ transactions, onTransactionAdd }) => {
  return (
    <div>
      <ul>
        {transactions.map(xAction => (
          <li key={xAction.amount}>
            {xAction.category} {xAction.desc} ${' '}
            {PrettyPrintMoney(Number.parseFloat(xAction.amount))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
