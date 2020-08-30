import {HOME_TEST_ACTION} from '../../constants/actionTypes';

export function testHomeAction(info) {
    return {
        type: HOME_TEST_ACTION,
        info,
    }
}