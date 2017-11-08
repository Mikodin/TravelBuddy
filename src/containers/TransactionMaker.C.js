import { connect } from 'react-redux';

import { addTransactionAsync } from '../actions/Transactions.A';
import { updateCurrentFunds, setCurrentFunds } from '../actions/User.A';

import TransactionMaker from '../components/TransactionMaker';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  addTransactionAsync,
  updateCurrentFunds,
  setCurrentFunds,
};

const TransactionMakerContainer = connect(mapStateToProps, mapDispatchToProps)(
  TransactionMaker
);

export default TransactionMakerContainer;
