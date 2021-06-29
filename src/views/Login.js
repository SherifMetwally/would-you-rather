import React, {  useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import Select from '../components/shared/Select';
import { LoginUser } from '../actions/authedUser';

function Login({ allUsers, isLogged, link }) {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

 

  const handleChange = (e) => {
    if (e.target.value !== 'Select User') {
      return setUser(e.target.value);
    }
    else {
      alert('Please Select User')
      e.target.value='johndoe'
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === 'Select User') {
      alert('please select user')
        }
    else {
    dispatch(LoginUser(user));
    localStorage.setItem('authedUser', user);
    return history.push(link || '/');
  }
  };

  if (isLogged) {
    return <Redirect to='/' />;
   }

  return (
    <div className='container-fluid'>
      <div className='col-md-5 mx-auto py-3'>
        <div className=' container-fluid text-center  '>
        <img className='logo' src={require('../images/logo.png')} alt="logo" />
          <div className='card-heading'>
          
          </div>
          <div className='mx-auto'>
          <i className="fas fa-user loginIcon" ></i>
          </div>
          <div className='login-form'>
            <h4 className='text-center'>Login</h4>
            <form onSubmit={handleSubmit}>
              <Select options={allUsers} onChange={handleChange} />
              <button
                className='btn btn-warning btn-block '
                type='submit'
                disabled={user === ''}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ users, authedUser, link }) => {
  return {
    allUsers: Object.keys(users).map((user) => {
      return user;
    }),
    isLogged: authedUser !== null,
    link,
  };
};

export default connect(mapStateToProps)(Login);
