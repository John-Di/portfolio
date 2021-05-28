import styled from 'styled-components';
import { device } from '../../../utils/variables';
import { ButtonReset, ListReset, LinkReset } from '../../../utils/Resets';
import FullSizeOverlay from '../../../utils/FullSizeOverlay';
import {
  conditionalProp, PropMap
} from '../../../utils/AssessProps';
import {
  FlexCentered,
  ResponsiveLine
} from '../../../utils/Flex';


const ToggleTransitions = ({ isActive, primaryColor, primaryContrast }) => `
  color: ${primaryColor};

  ${conditionalProp(isActive,
  `color: ${primaryContrast};`)}
`;

export const MENU = styled.div`
  grid-area: nav;
  width: 100%;
  height: 100%;
`;

export const TOGGLE = styled.button`
  ${ButtonReset}
  ${FlexCentered}
  cursor: pointer;
  ${PropMap.bind(this, ToggleTransitions)}
  transition: color 0.25s 0.05s;

  @media screen and ${device.tablet} {
    display: none;
  }
`;

const MobileNav = ({
  flyoutHeight,
  isMenuOpen
}) => `
  position: absolute;
  height: ${flyoutHeight / 16}em;;
  left: 0;
  right: 0;
  overflow: hidden;

  ul {
    position: absolute;
    top: -${flyoutHeight / 16}em;
    transition: top 0.25s 0s;
  }

  ${conditionalProp(isMenuOpen, `

    &::before {
      opacity: 1;
    }

    ul {
      top: 0;
    }
  `)};
`;

export const NAV = styled.nav`
  width: 100%;
  height: 100%;

  @media screen and ${device.max_tablet} {
    ${PropMap.bind(this, MobileNav)}
  }
`;

export const ITEMS = styled.ul`
  ${ListReset}
  ${ResponsiveLine}
  width: 100%;

  @media screen and ${device.max_tablet} {
    background: white;
  }

  @media screen and ${device.tablet} {
    height: 100%;
    justify-content: ${props => props.desktopNavAlignment};
  }

  li {
    margin-bottom: 0;
  }
`;

export const ITEM = styled.li`
  ${ListReset}

  @media screen and ${device.max_tablet} {
    width: 100%;
  }

  @media screen and ${device.tablet} {
    height: 100%;
  }

  > a {
    height: 4em;
    width: 100%;

    @media screen and ${device.tablet} {
      width: 4em;
    }
  }
`;

