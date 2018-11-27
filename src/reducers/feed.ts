import { Feed, SyncFbFeedAction, SyncTwitterFeedAction } from '../common/interfaces';
import { FeedActionTypes } from '../common/enums';

type Action = SyncFbFeedAction | SyncTwitterFeedAction;

export const initialState: Feed = {
    feed: [],
};

export function reducer(state: Feed = initialState, action: Action) {
    switch (action.type) {
        case FeedActionTypes.SYNC_FB_FEED:
          return {
              ...state,
              ...action.payload,
          };
        case FeedActionTypes.SYNC_TWITTER_FEED:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
