import React, { Component } from 'react';
import {
  Button,
  Input,
  Col,
  Row,
  Label,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import '../App.css';

import {
  ConvertUsdToTarget,
  ConvertTargetToBase,
  PrettyPrintMoney,
} from '../utils/ExchangeRateUtil';

class TransactionMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      costTarget: 0,
      costBase: 0,
      description: '',
      isTargetInput: true,
    };
  }

  componentDidMount() {}

  handleCostTargetChange = event => {
    const costBase = ConvertTargetToBase(event.target.value, 113.49);
    this.setState({ costTarget: event.target.value, costBase });
  };

  handleCostBaseChange = event => {
    const costTarget = ConvertUsdToTarget(event.target.value, 113.49);
    this.setState({ costBase: event.target.value, costTarget });
  };

  handleSubmit = category => {
    this.props.updateCurrentFunds(
      this.props.user.currentFunds,
      -this.state.costBase
    );
  };

  render() {
    const { user, updateCurrentFunds, addTransactionsAsync } = this.props;
    return (
      <div className="">
        <ModalHeader toggle={this.toggle}>Add Transaction</ModalHeader>

        <ModalBody>
          {this.state.isTargetInput ? (
            <FormGroup>
              <Label for="constInput">Cost</Label>
              <Input
                id="costInput"
                type="number"
                name="cost"
                value={this.state.costTarget}
                onChange={this.handleCostTargetChange}
                placeholder="¥ 4544.6"
              />
              <h5>
                {`$ ${PrettyPrintMoney(
                  ConvertTargetToBase(this.state.costTarget, 113.49)
                )}`}
              </h5>
            </FormGroup>
          ) : (
            <FormGroup>
              <Label for="constInput">Cost</Label>
              <Input
                id="costInput"
                type="number"
                name="cost"
                value={this.state.costBase}
                onChange={this.handleCostBaseChange}
                placeholder="$ 20.00"
              />
              <h5>
                {`¥ ${PrettyPrintMoney(
                  ConvertUsdToTarget(this.state.costBase, 113.49)
                )}`}
              </h5>
            </FormGroup>
          )}

          <FormGroup>
            <Label for="descInput">Description</Label>
            <Input
              id="descInput"
              type="number"
              name="description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              placeholder="Dinner with a fine lady ;)"
            />
          </FormGroup>
          <Button
            color="primary"
            onClick={() =>
              this.setState({ isTargetInput: !this.state.isTargetInput })}
          >
            Swap
          </Button>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </ModalFooter>
      </div>
    );
  }
}

export default TransactionMaker;
