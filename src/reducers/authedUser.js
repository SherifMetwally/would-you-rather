import { setUser, logout } from '../constants/action-types';


const defaultState = null;

export default function authedUser(state = defaultState, action) {
  switch (action.type) {
    case setUser:
      return action.id;
    case logout:
      return null;
    default:
      return state;
  }
}
