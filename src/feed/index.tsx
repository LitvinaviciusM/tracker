import * as React from 'react';
import FeedBlock from './feedblock';
import './index.scss';

const Feed: React.FunctionComponent = () => (
  <div className="feed">
    <FeedBlock variant="twitter" glyph="twitter-logo" />
    <FeedBlock variant="facebook" glyph="fb-logo" />
  </div>
);

export default Feed;
