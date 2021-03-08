import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { ListReset } from '../../utils/Resets';
import { device } from '../../utils/variables';

export const LIST = styled.ul`
  ${ListReset}
  margin: -${props => props.gutterOffset / 2}em -${props => props.gutterOffset / 2}em;

  @media ${device.tablet} {
    margin: -${props => props.gutterOffset / 2}em -${props => props.gutterOffset}em;
  }

  ${Clearfix}
`;

export const ITEM = styled.li`
  ${ListReset}
  display: inline-block;
  vertical-align: bottom;
  margin: ${props => props.gutter}em;
`;