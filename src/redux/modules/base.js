import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// Action Type
const SET_VIEW = 'base/SET_VIEW';
const SEARCH = 'base/SEARCH';

// Action
export const setView = createAction(SET_VIEW);
export const search = createAction(SEARCH);

const initialState = Map({
    view: 'favorite',
    keyword: '',
})

// Reducer
export default handleActions({
    [SET_VIEW]: (state, action) => state.set('view', action.payload),
    [SEARCH]: (state, action) => {
        return state.set('keyword', action.payload);
    }
}, initialState);