import styled from 'styled-components';
import { device } from '../../utils/variables';
import Clearfix from '../../utils/Clearfix';

export const IMAGEFLOATTEXT = styled.div`
	width: 100%;
	padding: 1em 0;

	@media ${device.mobileL} {
		padding: 0 1.5em;
	}


	${Clearfix}
`;

export const CONTENT = styled.div`
	flex: 1 auto;
	@media ${device.tablet} {
		display: flex;
		flex-flow: column nowrap;
		margin-right: 12em;
		padding: 0;
	}
`;

export const WRAPPER = styled.a`
	display: block;
	transition: opacity 0.3s ease 0s;
	max-width: 10em;
	width: 33.3333%;
	margin: 1em auto 2em;
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
    width: 100%
  }

  > div {
    position: absolute !important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

	@media print {
		display: none;
	}

	@media ${device.mobileXL} {
		float: right;
		width: 150px;
		flex: 1 0 150px;
		margin: 1em 1em 2em 4em;

		${Clearfix}
	}

	@media ${device.desktop} {
		width: 150px;
		flex: 1 0 150px;
	}

	&:hover {
		opacity: 0.75;
	}

	.gatsby-image-wrapper {
		max-width: 100%;
	}
`;
