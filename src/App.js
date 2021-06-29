import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// views
import Navbar from './components/Navbar';
import Homepage from './views/Homepage';
import Login from './views/Login';
import Question from './components/poll/Question';
import Leadboard from './views/LeaderBoard';
import NewQuestion from './views/Newquestion';

// actions
import { InitialHandle } from './actions/shared';
import { LoginUser } from './actions/authedUser';

// components
import NotFound from './components/Notfound';
import PrivateRouters from './routers/PrivateRouters';


export default function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(InitialHandle());

    const user = localStorage.getItem('authedUser');
    if (user) {
      dispatch(LoginUser(user));
    }
  }, [dispatch]);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <PrivateRouters path='/' exact component={Homepage} />
          <Route path='/login' component={Login} />
          <PrivateRouters
            path='/questions/:question_id'
            component={Question}
          />
          <PrivateRouters path='/leaderboard' component={Leadboard} />
          <PrivateRouters path='/add' component={NewQuestion} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  )
}
