import MegaMenu from '../mega-menu';
import ContentBlock from '../content-block';
import Section from '../section';
import ResponsivePair from '../../layouts/responsive-pair';
import {
  jsxCloneArray,
  arrayToJSXList
} from '../../utils/dom-builder';
import {
  randomColor,
  randomImage,
  randomIntegerEx
} from '../../utils/randoms';
import IdealTextColor from '../../utils/IdealTextColor';
import React, {
  useState,
  useRef
} from "react";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import {
  HEADER,
  NAV,
  UL,
  LI,
  NAVLINK,
  ICON,
  DIV,
  TOGGLE
} from './styles';

const nav = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/resume/",
    label: "Resume"
  },
  {
    href: "/style-guide/",
    label: "Style Guide"
  }
];
let alignment = [
  'flex-start',
  'center',
  'flex-end'
]

const Header = ({ accentColor, whiteOnHover }) => {
  const [menuIndex, setMenuIndex] = useState(-1);
  const updateMenuIndex = index => setMenuIndex(!!~index && index === menuIndex ? -1 : index);
  let navAccent = accentColor || randomColor(),
    textColor = IdealTextColor(accentColor);

  const drawerEl = useRef(null);

  const onMenuToggle = index => {
    updateMenuIndex(index);
    return menuIndex;
  };

  if (!!drawerEl.current) {
    const observer = new IntersectionObserver(
      ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
      { threshold: [1] }
    );

    observer.observe(drawerEl.current.closest('header'));
  }


  const megaMenu = !!~menuIndex &&
    <MegaMenu>
      <Section maxWidth={`100%`} hasPadding={true} hasMarginLarge={false} className="some-mega-menu">
        <ResponsivePair
          items={
            jsxCloneArray(2, (l, _, i) => (
              <ResponsivePair
                items={
                  jsxCloneArray(4, (m, _, j) => {
                    let backgroundColor = randomColor();
                    let index = m * i + j;

                    return (
                      <ContentBlock
                        backgroundColor={backgroundColor}
                        backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
                        isEven={index % 2 === 0}
                        isSquare={true}
                        overlay={true}

                      >
                      </ContentBlock>
                    )
                  })
                }
              />
            ))
          }
        />
      </Section >
    </MegaMenu>;
  return (
    <HEADER
      isMenuOpen={!!~menuIndex}
      textColor={textColor}
      accentColor={navAccent}
      textColorEmphasis={textColor}
      whiteOnHover={whiteOnHover}
    >
      <NAV>
        <TOGGLE
          isActive={!!~menuIndex}
          iconColor={textColor}
          iconColorEmphasis={navAccent}
          onClick={() => onMenuToggle(0)}
        >
          <ICON icon={faBars} />
        </TOGGLE>
        <DIV
          ref={drawerEl}
          isMenuOpen={!!~menuIndex}
          height={!!~menuIndex ? drawerEl.current.scrollHeight : 0}
        >
          <UL
            isMenuOpen={!!~menuIndex}
            desktopNavAlignment={alignment[randomIntegerEx(0, alignment.length)]}
          >
            {
              arrayToJSXList(nav, (item, i) => (
                <LI
                  textColor={textColor}
                  accentColor={navAccent}
                  textColorEmphasis={textColor}
                  whiteOnHover={whiteOnHover}
                >
                  <NAVLINK
                    to={item.href}
                    onClick={() => onMenuToggle(i + 1)}
                    activeClassName="active"
                  >
                    {item.label}
                  </NAVLINK>
                </LI>
              ))
            }
          </UL>
          {/* {megaMenu} */}
        </DIV>
      </NAV>
    </HEADER>
  )
}

export default Header;