import {takeLatest} from 'redux-saga/effects';
import * as types from '../../../constants/actionTypes';
import {testHomeSaga} from './homeSaga';

export const loginSaga = [
    takeLatest(types.LOGIN_TEST_ACTION, testHomeSaga)
]