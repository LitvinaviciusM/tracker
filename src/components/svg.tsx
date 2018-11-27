import * as React from 'react';
import { SvgProps } from '../common/interfaces';

const Svg: React.FunctionComponent<SvgProps> = ({ glyph, className }) => (
  <img
    src={require(`../svg/${glyph}.svg`)}
    alt={glyph}
    className={className}
  />
);

export default Svg;
