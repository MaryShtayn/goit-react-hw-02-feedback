import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsListStyled, StatisticsTitle } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsListStyled className="statistics__list">
        <li className="statistics__item" good={good}>
          Good: {good}
        </li>
        <li className="statistics__item" neutral={neutral}>
          Neutral: {neutral}
        </li>
        <li className="statistics__item" bad={bad}>
          Bad: {bad}
        </li>
        <li className="statistics__item" total={total}>
          Total: {total}
        </li>
        <li className="statistics__item">
          Positive feedback: {positivePercentage}%
        </li>
      </StatisticsListStyled>
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
