// @flow
import * as types from 'types/room';
import { produce } from 'immer';


const initialState = {
  posts: {},
  loading: false,
  error: null,
};

export default (state = initialState, action: any = {}) => produce(state, (draft) => {
    const newDraft = draft;
    switch (action.type) {
      case types.FETCH_POSTS_REQUEST:
        newDraft.loading = true;
        break;
      case types.FETCH_POSTS_SUCCESS:
        newDraft.posts = action.payload;
        newDraft.loading = false;
        break;
      case types.FETCH_POSTS_FAILURE:
        newDraft.error = action.error;
        newDraft.loading = false;
        break;
      default:
        break;
    }
    return newDraft;
  });
