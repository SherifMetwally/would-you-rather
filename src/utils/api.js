import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js';

export const getInitialData = async () => {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return {
    users,
    questions,
  };
};

export const saveQuestion = (data) => {
  return _saveQuestion(data);
};


export const saveQuestionAnswer = (data) => {
  return _saveQuestionAnswer(data);
};
