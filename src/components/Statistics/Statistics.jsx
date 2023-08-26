import { StatisticsText } from './Statistics.style';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <StatisticsText>Good: {good}</StatisticsText>
    <StatisticsText>Neutral: {neutral}</StatisticsText>
    <StatisticsText>Bad: {bad}</StatisticsText>
    <StatisticsText>Total: {total}</StatisticsText>
    <StatisticsText>Positive feedback: {positivePercentage}%</StatisticsText>
  </div>
);
