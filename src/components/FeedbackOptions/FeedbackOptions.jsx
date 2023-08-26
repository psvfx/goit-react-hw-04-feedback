import { FeedbackOptionsDiv, FeedbackOptionsBtn } from './FeedbackOption.style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackOptionsDiv>
    {options.map(option => (
      <FeedbackOptionsBtn key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </FeedbackOptionsBtn>
    ))}
  </FeedbackOptionsDiv>
);
