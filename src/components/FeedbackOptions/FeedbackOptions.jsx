import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => {
    return (
      <Button
        className="feedback__btn"
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    );
  });
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
