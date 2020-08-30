import {put, call} from 'redux-saga/effects';
import * as loginActions from '../../../actions/login';

export function* testHomeSaga(payload) {
    console.log('testing');
    yield put(loginActions.testLoginSaga({test: false}))
}