import React from "react";
import Swatch from '../swatch';
import {
  VALUE
} from './styles';

export default function ColorSwatch({
  id,
  name = "Color",
  value = 'white',
  gap = 0.25,
  toggleSwatch,
  isCurrent,
  type
}) {
  let inputID = id || `${name}-${value}`;
  return (
    <Swatch
      type={type}
      id={inputID}
      gap={gap}
      name={name}
      isCurrent={isCurrent}
      backgroundColor={value}
      toggleSwatch={toggleSwatch}
    >
      <VALUE
        isHidden={true}
      >{value}</VALUE>
    </Swatch>
  );
}
