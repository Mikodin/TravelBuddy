import React from 'react';

import { Col, Row } from 'reactstrap';
import '../App.css';

import {
  ConvertUsdToTarget,
  PrettyPrintMoney,
} from '../utils/ExchangeRateUtil';

const TransactionsList = ({ transactions, onTransactionAdd }) => {
  return (
    <div className="transaction-list container">
      {transactions.map(xAction => (
        <Row key={xAction.date.toLocaleTimeString()}>
          <Col xs={2}>
            <span>{xAction.category}</span>
          </Col>

          <Col xs={6}>
            <span>{xAction.desc}</span>
          </Col>

          <Col xs={4}>
            <span>{PrettyPrintMoney(xAction.amount)}</span>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default TransactionsList;
