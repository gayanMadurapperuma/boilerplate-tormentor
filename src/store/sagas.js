import {all} from 'redux-saga/effects';
import {loginSaga} from '../features/login/sagas';

export default function* rootSaga() {
    yield all([...loginSaga]);
}