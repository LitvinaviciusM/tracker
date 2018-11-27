import { Post, SyncTwitterFeedAction, SyncFbFeedAction } from '../common/interfaces';
import { FeedActionTypes } from '../common/enums';

export function syncTwitterFeed(feed: Post[]): SyncTwitterFeedAction {
    return {
        type: FeedActionTypes.SYNC_TWITTER_FEED,
        payload: feed,
    }
}

export function syncFbFeed(feed: Post[]): SyncFbFeedAction {
    return {
        type: FeedActionTypes.SYNC_FB_FEED,
        payload: feed,
    }
}
