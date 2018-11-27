import * as React from 'react';
import FeedBlock from './feedblock';
import './index.scss';

const Index: React.FunctionComponent = () => (
  <div className="feed">
    <FeedBlock variant="twitter" glyph="twitter-logo" />
    <FeedBlock variant="facebook" glyph="fb-logo" />
  </div>
);

export default Index;
