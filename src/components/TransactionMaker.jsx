import React, { Component } from 'react';
import { Button, Input, Col, Row, Label, FormGroup } from 'reactstrap';

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
    this.setState({ showFundsInput: !this.state.showFundsInput });
  };

  render() {
    const { user, updateCurrentFunds, addTransactionsAsync } = this.props;
    return (
      <div>
        <Row>
          <Col lg={1}>
            <Button
              color="danger"
              onClick={() => updateCurrentFunds(user.currentFunds, -20)}
            >
              -
            </Button>
          </Col>

          <Col lg={2}>
            <Button color="secondary" onClick={this.toggleLock}>
              {this.state.showFundsInput ? 'Lock' : 'Unlock'}
            </Button>
          </Col>
          <Col lg={8}>
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
                <h3>$ {`${PrettyPrintMoney(user.currentFunds)}`}</h3>
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
          <Col lg={1}>
            <Button
              disabled
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
