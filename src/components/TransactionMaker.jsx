import React, { Component } from 'react';
import { Button, Input, Col, Row, Label, FormGroup } from 'reactstrap';

import '../App.css';

import {
  ConvertUsdToTarget,
  PrettyPrintMoney,
} from '../utils/ExchangeRateUtil';

class TransactionMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFundsInput: true,
      funds: 0,
    };
  }

  componentDidMount() {
    this.setState({ funds: this.props.user.currentFunds });
  }

  handleFundsChange = event => {
    this.props.setCurrentFunds(event.target.value).then(res => {});
    this.setState({ funds: event.target.value });
  };

  toggleLock = () => {
    this.setState({
      showFundsInput: !this.state.showFundsInput,
      funds: this.props.user.currentFunds,
    });
  };

  render() {
    const { user, updateCurrentFunds, addTransactionsAsync } = this.props;
    return (
      <div className="transaction-maker">
        <Row className="container">
          <Col xs={4} className="no-padding">
            <Button
              size={'sm'}
              color="danger"
              onClick={() => updateCurrentFunds(user.currentFunds, -20)}
            >
              -
            </Button>
            <Button size={'sm'} color="secondary" onClick={this.toggleLock}>
              {this.state.showFundsInput ? 'Lock' : 'Unlock'}
            </Button>
          </Col>

          <Col xs={6} className="no-padding">
            <Row>
              {this.state.showFundsInput ? (
                <FormGroup>
                  <Input
                    id="fundsInput"
                    type="number"
                    name="funds"
                    value={this.state.funds}
                    onChange={this.handleFundsChange}
                    placeholder="$1,000,000"
                  />
                </FormGroup>
              ) : (
                <h4>$ {`${PrettyPrintMoney(user.currentFunds)}`}</h4>
              )}
            </Row>
            <Row>
              <h5>
                ¥{' '}
                {`${PrettyPrintMoney(
                  ConvertUsdToTarget(user.currentFunds, 113.49)
                )}`}
              </h5>
            </Row>
          </Col>

          <Col xs={1} className="no-padding">
            <Button
              disabled
              size={'sm'}
              color="success"
              onClick={() => updateCurrentFunds(user.currentFunds, 20)}
            >
              +
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TransactionMaker;