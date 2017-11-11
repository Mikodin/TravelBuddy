import React, { Component } from 'react';

import { Col, Row } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import '../App.css';

import {
  ConvertUsdToTarget,
  PrettyPrintMoney,
} from '../utils/ExchangeRateUtil';

class TransactionsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (localStorage.getItem('transactions')) {
      this.props.setTransactions(
        JSON.parse(localStorage.getItem('transactions'))
      );
    }
  }

  render() {
    const { transactions, onTransactionAdd } = this.props;
    return (
      <div className="transaction-list container">
        {transactions.map(xAction => (
          <Row className="transaction" key={xAction.date}>
            <Col xs={2} style={{ paddingTop: '10px' }}>
              <FontAwesome name={xAction.icon} style={{ fontSize: '1.5em' }} />
            </Col>

            <Col xs={6} style={{ paddingTop: '10px' }}>
              <span>{xAction.desc}</span>
            </Col>

            <Col xs={4}>
              <Row>
                <span>$ {PrettyPrintMoney(xAction.amount)}</span>
              </Row>
              <Row>
                <span style={{ fontSize: '.8em' }}>
                  ¥{' '}
                  {PrettyPrintMoney(ConvertUsdToTarget(xAction.amount, 113.49))}
                </span>
              </Row>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}

export default TransactionsList;
