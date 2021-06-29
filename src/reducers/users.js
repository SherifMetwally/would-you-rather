import {
  userRecieved,
  assignAnswer,
  assignQuestion,
} from '../constants/action-types';

const defaultState = {};

export default function users(state = defaultState, action) {
  switch (action.type) {
    case userRecieved:
      return {
        ...state,
        ...action.users,
      };
    case assignAnswer:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case assignQuestion:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([action.qid]),
        },
      };
    default:
      return state;
  }
}
