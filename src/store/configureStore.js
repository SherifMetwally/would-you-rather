import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// reducers
import users from '../reducers/users';
import questions from '../reducers/questions';
import authedUser from '../reducers/authedUser';
import link from '../reducers/callBackLink';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        authedUser,
        users,
        questions,
        link,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};