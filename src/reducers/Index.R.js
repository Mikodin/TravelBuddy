import { combineReducers } from 'redux';

import transactions from './Transactions.R';

const travelBuddy = combineReducers({ transactions });

export default travelBuddy;
