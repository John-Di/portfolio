import React from "react";
import Section from '../../components/section';
import TextMediaBlock from '../../components/text-media-block';
import ChicCTA from '../../components/chic-cta';
import ResponsivePair from '../../layouts/responsive-pair';
import { jsxCloneArray } from '../../utils/dom-builder';
import {
  randomColor,
  randomImage,
  randomIntegerEx
} from '../../utils/randoms';
import BasicContrast from '../../utils/BasicContrast';
import { size, device } from '../../utils/variables';

const breakpoints = [
  {
    bp: `${device.mobileXL} and ${device.max_laptopL}`,
    alternates: true
  },
  {
    bp: `${device.laptopL}`,
    alternates: false
  }
];

export default function TwoPairSection(isFullWidth, maxWidth = size.laptopL, hasPadding) {
  isFullWidth = isFullWidth.hasOwnProperty('isFullWidth') ? isFullWidth.isFullWidth : isFullWidth;
  hasPadding = !isFullWidth;
  return (
    <Section maxWidth={isFullWidth ? `100%` : maxWidth} hasPadding={hasPadding} className="two-pair-section"
      heading={(<h1>Two Pair Section</h1>)}
      subheading={(<h2>({isFullWidth ? `Two Full Width` : `Two Page Width`})</h2>)}>
      <ResponsivePair
        adjacentBreakpoints={
          [
            {
              bp: `${device.laptopL}`
            }
          ]}
        items={
          jsxCloneArray(2, (length, _, index) => {
            let backgroundColor = randomColor();
            return (
              <TextMediaBlock
                backgroundColor={backgroundColor}
                backgroundImage={randomImage(randomIntegerEx(0, 10000), 1920, 1920)}
                adjacentBreakpoints={breakpoints}
                isEven={index % 2 === 0}
              >
                <h2>Text Media Block {index + 1}/{length}</h2>
                <p>Just for the time being...</p>
                <ChicCTA
                  backgroundColor={backgroundColor}
                  textColor={BasicContrast(backgroundColor)}
                >Learn More</ChicCTA>
              </TextMediaBlock>
            )
          })
        } />
    </Section >
  );

};
