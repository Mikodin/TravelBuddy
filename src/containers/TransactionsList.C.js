import { connect } from 'react-redux';
import { addTransactionAsync } from '../actions/Transactions.A';
import TransactionsList from '../components/TransactionsList';

const mapStateToProps = state => ({
  transactions: state.transactions,
});

const mapDispatchToProps = {
  onTransactionAdd: addTransactionAsync,
};

const TransactionsListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TransactionsList
);

export default TransactionsListContainer;
