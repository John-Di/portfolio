import styled from 'styled-components';
import { FlexCentered } from '../../utils/Flex';
import {
  conditionalProp
} from '../../utils/AssessProps';
import VisuallyHidden from '../../utils/VisuallyHidden';
import { ListReset } from '../../utils/Resets';

export const SWATCH = styled.li`
  ${ListReset}
  display: inline-block;
  float: left;
  vertical-align: bottom;
  margin: 0 ${props => props.gutter}em;
`;

export const INPUT = styled.input`
  ${VisuallyHidden}
`;

export const LABEL = styled.label`
  cursor: pointer;
  ${FlexCentered}
  ${props => conditionalProp(props.backgroundColor, `background-color: ${props.backgroundColor};`)};
  width: 2.5em;
  height: 2.5em;
  border: 1px solid black;
  margin: 0;

  &.current,
  &:hover,
  focus {
    outline: 1px solid black;
    border: 2px solid ${props => props.borderColor};
  }
`;

export const VALUE = styled.span`
  ${props => conditionalProp(props.isHidden, VisuallyHidden)}
  ${props => conditionalProp(props.case, `text-transform: ${props.case}`)}
`;