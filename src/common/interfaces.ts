import { FeedActionTypes } from './enums';

export interface  SvgProps {
    className: string,
    glyph: string,
}

export interface FeedBlockProps {
    glyph: string,
    variant: string,
}

export interface Candidate {
    fullName: string,
    id: number,
    profilePic: string,
}

export interface Post {
    id: number,
    message: string,
}

export interface SyncFbFeedAction {
    type: FeedActionTypes.SYNC_FB_FEED,
    payload: Post[],
}

export interface SyncTwitterFeedAction {
    type: FeedActionTypes.SYNC_TWITTER_FEED,
    payload: Post[],
}

export interface Feed {
    feed: Post[],
}

export interface Candidates {
    candidates: Candidate[],
}

export interface State {
    candidates: Candidates,
    feed: Feed,
}
