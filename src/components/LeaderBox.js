import React from 'react';
import { connect } from 'react-redux';

const LeaderBox = (props) => {
  const { user, numOfQuestions, numOfAnswers, index } = props;

  return (
    <div className='card-box text-center'>
      <div><span className='user-rank'>Rank : {index} </span></div>
      <br></br>
      <div className='poll-body'>
        <div className=' lead-avatar-body'>
          <img
            src={user.avatarURL}
            alt={`avatar of ${user.name}`}
            className='poll-avatar mt-4'
          />
        </div>
        <div className='lead-board'>
          <h5 className='font-weight-bold pl-4 mb-4'>{user.name}</h5>
          <div className='poll-question container-fluid'>
            <div className='statistics border-bottom mb-4 pb-4'>
              <span className='font-weight-bold'>Answered Questions</span>
              <span className='font-weight-bold float-right'>
                {numOfAnswers}
              </span>
            </div>
            <div className='statistics border-bottom mb-4 pb-4'>
              <span className='font-weight-bold'>Created Questions</span>
              <span className='font-weight-bold float-right'>
                {numOfQuestions}
              </span>
              </div>
              <div className='statistics'>
              <span className='font-weight-bold'>Score </span>
              <span className='font-weight-bold float-right'>
              {numOfAnswers + numOfQuestions}
              </span>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }, { id, index }) => {
  const user = users[id];

  return {
    user,
    index,
    numOfQuestions: user && user.questions.length,
    numOfAnswers: user && Object.keys(user.answers).length,
  };
};

export default connect(mapStateToProps)(LeaderBox);
