import { combineReducers } from 'redux';
import bigCardReducer from '../big-card/big-card-reducer';
import thumbCardsReducer from '../thumb-cards/thumb-cards-reducer';

const ReloadCombinedReducers = combineReducers({
	bigCardReducer,
	thumbCardsReducer
});

export default ReloadCombinedReducers;
