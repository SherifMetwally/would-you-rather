import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authedUser';

class Navbar extends Component {
  logoutUser = () => {
    localStorage.removeItem('authedUser');
    this.props.dispatch(logoutUser());
    this.props.history.push('/');
  };
  render() {
    const { isLogged, user } = this.props;
    return (
      <nav className='mb-1 navbar navbar-expand-lg dark'>
        <div className='container-fluid'>
          <div
            className='collapse navbar-collapse'
            id='navbarSupportedContent-555'
          >
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <NavLink className='nav-link' to='/'>
                  Home
                  <span className='sr-only'>(current)</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/add'>
                  New Question
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/leaderboard'>
                  LeaderBoard
                </NavLink>
              </li>
            </ul>
            <ul className='navbar-nav ml-auto nav-flex-icons'>
              {isLogged ? (
                <Fragment>
                  <li className='nav-item avatar'>
                    <span className='mr-3 text-white'>{user && user.name}</span>
                    <img
                      src={user && user.avatarURL}
                      className='rounded-circle z-depth-0'
                      alt={`Avatar of ${user && user.name}`}
                      height='35'
                    />
                  </li>
                  <li className='nav-item'>
                    <button
                      className='nav-link logout-btn'
                      onClick={this.logoutUser}
                    >
                      Logout
                    </button>
                  </li>
                </Fragment>
              ) : (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/login'>
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    isLogged: authedUser !== null,
    user: users[authedUser],
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
