import { connect } from 'react-redux';

import { addTransactionAsync } from '../actions/Transactions.A';
import {
  updateCurrentFunds,
  setCurrentFunds,
  setUser,
} from '../actions/User.A';

import TransactionMaker from '../components/TransactionMaker';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  addTransactionAsync,
  updateCurrentFunds,
  setCurrentFunds,
  setUser,
};

const TransactionMakerContainer = connect(mapStateToProps, mapDispatchToProps)(
  TransactionMaker
);

export default TransactionMakerContainer;
