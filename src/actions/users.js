import {
  userRecieved,
  assignAnswer,
  assignQuestion,
} from '../constants/action-types';

export const fetchUsers = (users) => {
  return {
    type: userRecieved,
    users,
  };
};


export const assignUserAnswer = ({ authedUser, qid, answer }) => {
  return {
    type: assignAnswer,
    authedUser,
    qid,
    answer,
  };
};

export const assignUserQuestion = ({ authedUser, qid }) => {
  return {
    type: assignQuestion,
    authedUser,
    qid,
  };
};
