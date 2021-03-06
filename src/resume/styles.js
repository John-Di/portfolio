import styled from 'styled-components';

export const Layout = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	padding: 0.65625em;

	&::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: -1;
	}

	&::after {
		content: '';
		clear: both;
		display: table;
	}
`;
