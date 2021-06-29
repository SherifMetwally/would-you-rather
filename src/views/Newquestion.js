import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextBox from '../components/shared/TextBox';
import { withRouter } from 'react-router-dom';
import { handleInsertedQuestion } from '../actions/questions';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  };

  handleOpOne = (e) => this.setState({ optionOneText: e.target.value });

  handleOpTwo = (e) => this.setState({ optionTwoText: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    this.props.dispatch(handleInsertedQuestion({ optionOneText, optionTwoText }));
    return this.props.history.push('/');
  };
  render() {
    const { optionOneText, optionTwoText } = this.state;

    return (
      <div className='container'>
        <div className='col-md-6 mx-auto my-auto'>
          <div className='card-box'>
            <div className='card-heading'>

            </div>
            <div className='poll-body'>
              <div className='side-box'>
                <div className='poll-question container-fluid text-center'>
                <img className='logo' src={require('../images/logo.png')} alt="logo" />
                </div>
                <form onSubmit={this.handleSubmit}>
                  <TextBox
                    type='text'
                    placeholder='Do this'
                    value={optionOneText}
                    name='optionOneText'
                    onChange={this.handleOpOne}
                  />
                  <p className='line-on-side text-center'>
                    <span className='line-span text-center'>OR</span>
                  </p>
                  <TextBox
                    type='text'
                    placeholder='or this ..'
                    value={optionTwoText}
                    name='optionTwoText'
                    onChange={this.handleOpTwo}
                  />
                  <button
                    className='btn btn-warning btn-block'
                    type='submit'
                    disabled={optionOneText === '' || optionTwoText === ''}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(NewQuestion));
