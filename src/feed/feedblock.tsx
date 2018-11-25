import * as React from 'react';
import Svg from '../common/components/svg';

interface FeedBlockProps {
    variant: string,
    glyph: string,
}

const FeedBlock: React.FunctionComponent<FeedBlockProps> = ({
  variant,
  glyph,
}) => (
  <section className={`feed-block feed-block--${variant}`}>
    <h3 className="feed-block__header">
      <Svg glyph={glyph} className="logo" />
      {variant}
    </h3>
    <div className="feed-block__content">
      Content
    </div>
  </section>
);

export default FeedBlock;
