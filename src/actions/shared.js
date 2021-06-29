import { getInitialData } from '../utils/api';
import { fetchUsers } from './users';
import { fetchQuestions } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export const InitialHandle = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(fetchUsers(users));
      dispatch(fetchQuestions(questions));
      dispatch(hideLoading());
    });
  };
};
