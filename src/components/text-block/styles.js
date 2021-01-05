import styled from 'styled-components';
import { device } from '../../utils/variables';
import {
	idealTextColor
} from '../../utils/randoms';
import {
	BACKGROUND_PSEUDO,
	SQUARE_BACKGROUND
} from '../../utils/mixins';


export const TEXT_BLOCK = styled.div`
	max-width: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	flex: 1 100%;

	${props => props.backgroundColor && `
		background-color: ${props.backgroundColor};
		color: ${idealTextColor(props.backgroundColor)}
	`};


	${props => props.backgroundImage || props.isSquare ? BACKGROUND_PSEUDO('', props.backgroundImage, props.isSquare) : ''}

	@media ${device.laptop} {
		justify-content: flex-start;
		align-items: center;
	}
`;

export const WRAPPER = styled.div`
	flex: 1 auto;
	width: 100%;
	max-width: 1440px;
	padding: 0 8%;
	margin: 0 auto;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

export const CONTENT = styled.div`
	padding: 0;
`;
