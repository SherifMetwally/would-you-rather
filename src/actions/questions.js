import { showLoading, hideLoading } from 'react-redux-loading';
import {
  getQuestion,
  addQuestionResponse,
  addQuestion,
} from '../constants/action-types';
import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { assignUserAnswer, assignUserQuestion } from './users';

export const fetchQuestions = (questions) => {
  return {
    type: getQuestion,
    questions,
  };
};

const votePoll = ({ authedUser, qid, answer }) => {
  return {
    type: addQuestionResponse,
    authedUser,
    qid,
    answer,
  };
};

export const Vot = (info) => {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(votePoll(info));
        dispatch(assignUserAnswer(info));
        dispatch(hideLoading());
      })
      .catch((e) => {
        alert('There was an error voting');
      });
  };
};

const QuestionAdd = (question) => {
  return {
    type: addQuestion,
    question,
  };
};

export const handleInsertedQuestion = ({ optionOneText, optionTwoText }) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(QuestionAdd(question));
        const { author: authedUser, id: qid } = question;
        dispatch(assignUserQuestion({ authedUser, qid }));
      })
      .then(() => dispatch(hideLoading()));
  };
};
