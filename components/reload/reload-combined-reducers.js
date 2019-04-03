import { combineReducers } from 'redux';
import bigCardReducer from '../big-card/big-card-reducer';
import thumbCardsReducer from '../thumb-cards/thumb-cards-reducer';
import loginReducer from '../login/login-reducer';
import identityReducer from '../login/identity-reducer';

const ReloadCombinedReducers = combineReducers({
  bigCardReducer,
  thumbCardsReducer,
  loginReducer,
  identityReducer
});

export default ReloadCombinedReducers;
