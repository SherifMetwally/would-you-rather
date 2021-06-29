import { callBackLink } from '../constants/action-types';

export const setLink = (link) => {
  return {
    type: callBackLink,
    link,
  };
};
