import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

// import individual reducer
import userData from './reducer-user-data';

const reducers = combineReducers({
	form: formReducer,
	userData
});

export default reducers;