import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import css from './Section.module.css';

export class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const title = 'Please leave feedback';
    return (
      <div>
        <h2 className={css.title} title={title}>
          {title}
        </h2>
        <div className={css.btnSection}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </div>
        <div>
          {total === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </div>
      </div>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  // options: PropTypes.array.isRequired,
  // onLeaveFeedback: PropTypes.func.isRequired,
  // good: PropTypes.number.isRequired,
  // neutral: PropTypes.number.isRequired,
  // bad: PropTypes.number.isRequired,
  // total: PropTypes.func.isRequired,
  // positivePercentage: PropTypes.func.isRequired,
};
