import { combineReducers } from 'redux';

import transactions from './Transactions.R';
import user from './User.R';

const travelBuddy = combineReducers({ transactions, user });

export default travelBuddy;
