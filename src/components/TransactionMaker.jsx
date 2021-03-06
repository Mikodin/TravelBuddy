import React, { Component } from 'react';
import { Button, Input, Col, Row, FormGroup, Modal } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import '../App.css';
import NewTransactionContainer from '../containers/NewTransaction.C';

import {
  ConvertUsdToTarget,
  PrettyPrintMoney,
} from '../utils/ExchangeRateUtil';

class TransactionMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFundsInput: false,
      funds: '',
      modal: false,
    };
  }

  componentDidMount() {
    this.setState({ funds: this.props.user.currentFunds });
    if (localStorage.getItem('user')) {
      this.props.setUser(JSON.parse(localStorage.getItem('user')));
    }
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

  toggle = () => {
    this.setState({
      showFundsInput: false,
      modal: !this.state.modal,
    });
  };

  render() {
    const { user, updateCurrentFunds } = this.props;
    return (
      <div className="transaction-maker">
        <Row className="container">
          <Col xs={4} className="no-padding">
            <Button
              className="circle-btn"
              size={'sm'}
              color="danger"
              onClick={this.toggle}
            >
              -
            </Button>
            <Button size={'sm'} color="secondary" onClick={this.toggleLock}>
              {this.state.showFundsInput ? (
                <FontAwesome name="unlock" />
              ) : (
                <FontAwesome name="lock" />
              )}
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

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <NewTransactionContainer toggle={this.toggle} />
        </Modal>
      </div>
    );
  }
}

export default TransactionMaker;
