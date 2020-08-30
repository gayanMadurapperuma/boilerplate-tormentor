import createReducer from '../../utils/createReducer';
import * as types from '../../constants/actionTypes';

const initialState = {
    testHome: true,
};

export const homeReducer = createReducer(initialState, {
    [types.HOME_TEST_ACTION](state, action){
        return {
            ...state,
            testHome: false,
        }
    }
})