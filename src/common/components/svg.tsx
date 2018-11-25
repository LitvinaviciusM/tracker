import * as React from 'react';

interface SvgProps {
  className: string,
  glyph: string,
}

const Svg: React.FunctionComponent<SvgProps> = ({ glyph, className }) => (
  <img
    src={require(`../../svg/${glyph}.svg`)}
    alt={glyph}
    className={className}
  />
);

export default Svg;
