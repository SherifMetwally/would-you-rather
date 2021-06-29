import { setUser, logout } from '../constants/action-types';

export const LoginUser = (id) => {
  return {
    type: setUser,
    id,
  };
};

export const logoutUser = () => {
  return {
    type: logout,
  };
};
