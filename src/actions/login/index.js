import * as types from '../../constants/actionTypes';

export function testLoginActions(info) {
    return {
        type: types.LOGIN_TEST_ACTION,
        info,
    }
}

export function testLoginSaga(data) {
    return {
        type: types.LOGIN_TEST_SAGA_SUCCESS,
        data,
    }
}
