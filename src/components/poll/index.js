import React from 'react';
import Button from '../shared/Button';
import { connect } from 'react-redux';
import { PollFormat } from '../../utils/helpers';

const Poll = (props) => {
  const { question } = props;
  return (
    <div className='card-box'>
      <div className='card-heading'>
        <h5 className='font-weight-bold pl-3'>{question.name} asks:</h5>
      </div>
      <div className='poll-body'>
        <div className=' poll-avatar-body'>
          <img
            src={question.avatarURL}
            alt={`avatar of ${question.name}`}
            className='poll-avatar'
          />
        </div>
        <div className='login-form'>
          <div className='poll-question container-fluid'>
            <h5 className='text-center'>Would you Rather?</h5>
            <span>
              ... {question.optionOne.text} ... {question.optionTwo.text}
            </span>
          </div>
          <Button
            goTo={`/questions/${question.id}`}
            label='View Poll'
            classToUse='btn-warning container-fluid'
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ questions, users }, { id }) => {
  const question = questions[id];
  return {
    question: PollFormat(question, users[question.author]),
  };
};

export default connect(mapStateToProps)(Poll);
