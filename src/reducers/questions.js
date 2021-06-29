import {
  getQuestion,
  addQuestionResponse,
  addQuestion,
} from '../constants/action-types';

const defaultState = {};

export default function questions(state = defaultState, action) {
  switch (action.type) {
    case getQuestion:
      return {
        ...state,
        ...action.questions,
      };
    case addQuestionResponse:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    case addQuestion:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
