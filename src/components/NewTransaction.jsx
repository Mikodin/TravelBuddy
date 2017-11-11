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
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

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
      costTarget: '',
      costBase: '',
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
      Number.parseFloat(this.state.costBase),
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
                  <InputGroup>
                    <InputGroupAddon>¥</InputGroupAddon>
                    <Input
                      id="costInput"
                      type="number"
                      name="cost"
                      value={this.state.costTarget}
                      onChange={this.handleCostTargetChange}
                      placeholder="4544.6"
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputGroupAddon>$</InputGroupAddon>
                    <Input
                      disabled
                      value={`${PrettyPrintMoney(
                        ConvertTargetToBase(this.state.costTarget, 113.49)
                      )}`}
                    />
                  </InputGroup>
                </FormGroup>
              ) : (
                <FormGroup>
                  <Label for="constInput">Cost</Label>

                  <InputGroup>
                    <InputGroupAddon>$</InputGroupAddon>
                    <Input
                      id="costInput"
                      type="number"
                      name="cost"
                      value={this.state.costBase}
                      onChange={this.handleCostBaseChange}
                      placeholder="20.00"
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputGroupAddon>¥</InputGroupAddon>
                    <Input
                      disabled
                      value={`${PrettyPrintMoney(
                        ConvertUsdToTarget(this.state.costBase, 113.49)
                      )}`}
                    />
                  </InputGroup>
                </FormGroup>
              )}
            </Col>

            <Col xs={3} style={{ marginTop: '48px' }}>
              <Button
                color="primary"
                onClick={() =>
                  this.setState({ isTargetInput: !this.state.isTargetInput })}
              >
                <FontAwesome name="arrow-up" />
                <FontAwesome name="arrow-down" />
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
        </ModalBody>
        <ModalFooter style={{ justifyContent: 'flex-start' }}>
          <Row>
            <Col xs={2}>
              <Button
                className={'category-button'}
                color="primary"
                onClick={() => this.handleSubmit('food')}
              >
                <FontAwesome name="cutlery" />
              </Button>
            </Col>

            <Col xs={2}>
              <Button
                className={'category-button'}
                color="primary"
                onClick={() => this.handleSubmit('alcohol')}
              >
                <FontAwesome name="beer" />
              </Button>
            </Col>

            <Col xs={2}>
              <Button
                className={'category-button'}
                color="primary"
                onClick={() => this.handleSubmit('shopping')}
              >
                <FontAwesome name="shopping-cart" />
              </Button>
            </Col>

            <Col xs={2}>
              <Button
                className={'category-button'}
                color="primary"
                onClick={() => this.handleSubmit('lodging')}
              >
                <FontAwesome name="bed" />
              </Button>
            </Col>

            <Col xs={2}>
              <Button
                className={'category-button'}
                color="primary"
                onClick={() => this.handleSubmit('travel')}
              >
                <FontAwesome name="plane" />
              </Button>
            </Col>
          </Row>
        </ModalFooter>
      </div>
    );
  }
}

export default TransactionMaker;
