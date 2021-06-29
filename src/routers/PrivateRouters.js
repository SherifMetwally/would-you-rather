import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { setLink } from '../actions/callBackLink';

const PrivateRouters = ({ isLogged, path, component, dispatch, ...rest }) => {
  const location = useLocation();
  const oldPath = location.pathname;

  useEffect(() => {
    if (!isLogged) {
      dispatch(setLink(oldPath));
    }
  }, [dispatch, isLogged, oldPath]);

  if(isLogged) {
    return <Route path={path} {...rest} component={component} />;
  }

    return <Redirect to='/login' />
};

PrivateRouters.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

const mapStateToProps = ({ authedUser }) => ({
    isLogged: authedUser !== null
});

export default connect(mapStateToProps)(PrivateRouters);
