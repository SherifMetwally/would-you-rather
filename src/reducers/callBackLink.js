import { callBackLink } from '../constants/action-types';

const defaultState = null;

export default function setCallBackLink(state = defaultState, action) {
  switch (action.type) {
    case callBackLink:
      return action.link;
    default:
      return state;
  }
}
