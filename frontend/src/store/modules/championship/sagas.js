import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { startChampionshipSuccess } from '~/store/modules/championship/actions';

export function* start({ payload }) {
  try {
    const { moviesSelected } = payload;
    const response = yield call(api.post, 'championship', {
      movies: moviesSelected,
    });

    yield put(startChampionshipSuccess(response.data));

    history.push('/resultado');
  } catch (err) {
    toast.error('Falha ao gerar campeonato');
    console.tron.error(err);
  }
}

export default all([takeLatest('@championship/START_REQUEST', start)]);
