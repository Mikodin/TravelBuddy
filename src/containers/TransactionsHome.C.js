import { connect } from 'react-redux';
import TransactionsHome from '../components/TransactionsHome';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {};

const TransactionsHomeContainer = connect(mapStateToProps, mapDispatchToProps)(
  TransactionsHome
);

export default TransactionsHomeContainer;
