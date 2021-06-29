import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ goTo, toExecute, label, classToUse }) => {
  return (
    <Link
      to={goTo}
      className={`btn ${classToUse} btn-block custom-btn`}
      onClick={toExecute}
      disabled
    >
      {label}
    </Link>
  );
};

Button.propTypes = {
  goTo: PropTypes.string.isRequired,
  toExecute: PropTypes.func,
  label: PropTypes.string.isRequired,
  classToUse: PropTypes.string.isRequired,
};

export default Button;
