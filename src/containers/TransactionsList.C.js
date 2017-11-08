import { connect } from 'react-redux';
import { addTransactionAsync } from '../actions/Index.A';
import TransactionsList from '../components/TransactionsList';

const mapStateToProps = state => ({
  transactions: state.transactions,
});

const mapDispatchToProps = {
  onTransactionAdd: addTransactionAsync,
};

const VisibleTransactions = connect(mapStateToProps, mapDispatchToProps)(
  TransactionsList
);

export default VisibleTransactions;
