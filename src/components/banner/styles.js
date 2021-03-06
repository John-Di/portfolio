import styled from 'styled-components';
import { device } from '../../utils/variables';
import { SECTION } from '../section/styles';

SECTION.hasPadding = true;
export const BANNER = styled(SECTION)`
	max-width: 100%;
	min-height: 50vh;
	
	text-align: ${props => props.textAlignment || 'center'};

	@media screen and ${device.tablet} {
		text-align: ${props => props.textAlignment || 'left'};
	}

	p {
		@media screen and ${device.mobileL} {
			line-height: 1.25;
		}
	}
`;
