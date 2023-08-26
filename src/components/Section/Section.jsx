import PropTypes from 'prop-types';

import { SectionDiv, SectionTitleText } from './Section.style';

export const Section = ({ title, children }) => (
  <SectionDiv>
    <SectionTitleText>{title}</SectionTitleText>
    {children}
  </SectionDiv>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
