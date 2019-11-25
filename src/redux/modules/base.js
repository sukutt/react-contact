import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// Action Type
const SET_VIEW = 'base/SET_VIEW';

// Action
export const setView = createAction(SET_VIEW);

const initialState = Map({
    view: 'favorite',
})

// Reducer
export default handleActions({
    [SET_VIEW]: (state, action) => state.set('view', action.payload),
}, initialState);