import styled from 'styled-components';
import { device } from '../../utils/variables';
import Clearfix from '../../utils/Clearfix';
import { ListReset } from '../../utils/Resets';

export const LIST = styled.ul`
  ${ListReset}
  margin: -${props => props.gutterOffset / 2}em -${props => props.gutterOffset / 2}em;

  @media screen and ${device.tablet} {
    margin: -${props => props.gutterOffset}em -${props => props.gutterOffset}em;
  }

  ${Clearfix}
`;

export const ITEM = styled.li`
  ${ListReset}
  display: inline-block;
  vertical-align: bottom;
  padding: ${props => props.gutter}em;
  float: left;
  margin: auto;
  width: 100%;
`;