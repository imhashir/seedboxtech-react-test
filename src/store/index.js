import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
	// Specify here name, actionsBlacklist, actionsCreators and other options
});

export default function configureStore() {
	return createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk))
	);
}