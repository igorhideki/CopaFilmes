import { all } from 'redux-saga/effects';

import championship from './championship/sagas';

export default function* rootSaga() {
  return yield all([championship]);
}
