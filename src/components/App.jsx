import React, { Children, Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';
import { Layout } from './Layout/Layout.styled';
import { BtnSection } from './Section/Section.styled';

export class App extends Component {
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

    return (
      <Layout>
        <Section title="Please leave feedback">
          <BtnSection>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleFeedback}
            />
          </BtnSection>
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
        </Section>
      </Layout>
    );
  }
}
