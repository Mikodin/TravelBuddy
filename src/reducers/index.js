import { combineReducers } from 'redux';

import transactions from './transactions';

const travelBuddy = combineReducers({ transactions });

export default travelBuddy;
