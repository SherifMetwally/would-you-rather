import React, { Component } from 'react';
import {  MDBContainer,  MDBTabPane,  MDBTabContent,  MDBNav,  MDBNavItem,  MDBNavLink,} from 'mdbreact';
import { connect } from 'react-redux';
import Poll from '../components/poll';

class Homepage extends Component {
  state = {
    activeItem: '1',
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    const { answered, unanswered } = this.props;

    return (
      <div className='container-fluid'>
        <div className=''>
          <MDBContainer>
            <MDBNav className='nav-tabs mt-5'>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to='#'
                  active={this.state.activeItem === '1'}
                  onClick={this.toggle('1')}
                  role='tab'
                >
                  Unanwered Questions
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to='#'
                  active={this.state.activeItem === '2'}
                  onClick={this.toggle('2')}
                  role='tab'
                >
                  Answered Questions
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.activeItem}>
              <MDBTabPane tabId='1' role='tabpanel'>
                {unanswered && unanswered.length !== 0 ? (
                  unanswered.map((id) => <Poll key={id} id={id} />)
                ) : (
                  <h3 className='mt-5'>Nothing to show here currently</h3>
                )}
              </MDBTabPane>
              <MDBTabPane tabId='2' role='tabpanel'>
                {answered && answered.map((id) => <Poll key={id} id={id} />)}
              </MDBTabPane>
            </MDBTabContent>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  const user = users[authedUser];

  return {
    answered: user
      ? Object.keys(questions)
          .filter((question) => Object.keys(user.answers).includes(question))
          .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      : null,
    unanswered: user
      ? Object.keys(questions)
          .filter((question) => !Object.keys(user.answers).includes(question))
          .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      : null,
  };
};

export default connect(mapStateToProps)(Homepage);
