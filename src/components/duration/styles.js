import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SPAN } from '../../layouts/resume-layout/styles';


export const DURATION = styled(SPAN)`
	margin-left: 0.5em;
	margin-right: 0.25em;
	font-size: 0.875em;
	position: relative;
`;

export const ICON = styled.span`
	display: inline-block;
	margin-right: 0.25em;
	position: relative;
`;

export const WRAPPER = styled(SPAN)`
	margin-left: 0;
	position: relative;
	display: inline-block;
`;

export const FONTAWESOMEICON = styled(FontAwesomeIcon)`
	height: 100%;
	width: 100%;
`;
