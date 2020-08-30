import createReducer from '../../utils/createReducer';
import * as types from '../../constants/actionTypes';

const initialState = {
    test: true,
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_TEST_SAGA_SUCCESS](state, action){
        console.log('reducer', action);
        return {
            ...state,
            test: false,
        }
    }
})