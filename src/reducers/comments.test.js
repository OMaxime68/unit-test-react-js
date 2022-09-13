import commentReducer from './comments';
import { SAVE_COMMENT } from '../actions/types';

describe('Comments Reducer', () => {

    test('handles action with unknown type', () => {

        expect(commentReducer(undefined, {})).toEqual([]);
    });

    test('SAVE_COMMENT', () => {

        const action = { type: SAVE_COMMENT, payload: 'new comment'};
        expect(commentReducer([], action)).toEqual(['new comment']);

    });

});