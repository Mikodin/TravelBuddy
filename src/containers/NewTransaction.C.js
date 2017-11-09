import { connect } from 'react-redux';

import { addTransactionAsync } from '../actions/Transactions.A';
import { updateCurrentFunds } from '../actions/User.A';

import NewTransaction from '../components/NewTransaction';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  addTransactionAsync,
  updateCurrentFunds,
};

const NewTransactionContainer = connect(mapStateToProps, mapDispatchToProps)(
  NewTransaction
);

export default NewTransactionContainer;
