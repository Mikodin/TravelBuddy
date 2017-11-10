import React, { Component } from 'react';
import {
  Button,
  Input,
  Col,
  Row,
  Label,
  FormGroup,
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

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handleSubmit = category => {
    this.props.updateCurrentFunds(
      this.props.user.currentFunds,
      -this.state.costBase
    );

    this.props.addTransactionAsync(
      this.state.costBase,
      this.state.description,
      category
    );

    this.props.toggle();
  };

  render() {
    return (
      <div className="">
        <ModalHeader toggle={this.toggle}>Add Transaction</ModalHeader>

        <ModalBody>
          <Row>
            <Col xs={9}>
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
            </Col>

            <Col xs={3}>
              <Button
                color="primary"
                onClick={() =>
                  this.setState({ isTargetInput: !this.state.isTargetInput })}
              >
                Swap
              </Button>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <FormGroup>
                <Label for="descInput">Description</Label>
                <Input
                  id="descInput"
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                  placeholder="Dinner with a fine lady ;)"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={3}>
              <Button
                className={'category-button'}
                color="primary"
                onClick={() => this.handleSubmit('Food')}
              >
                Food
              </Button>
            </Col>

            <Col xs={3}>
              <Button
                className={'category-button'}
                color="primary"
                onClick={() => this.handleSubmit('Food')}
              >
                Travel
              </Button>
            </Col>

            <Col xs={3}>
              <Button
                className={'category-button'}
                color="primary"
                onClick={() => this.handleSubmit('Food')}
              >
                Lodging
              </Button>
            </Col>

            <Col xs={3}>
              <Button
                className={'category-button'}
                color="primary"
                onClick={() => this.handleSubmit('Food')}
              >
                Booze
              </Button>
            </Col>
          </Row>
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
