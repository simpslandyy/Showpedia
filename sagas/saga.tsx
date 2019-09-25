import { takeEvery, all, put, call, select } from 'redux-saga/effects';
import * as constant from '../store/constants';
import * as action from '../store/actions';
import * as selectors from '../store/selectors';
import * as api from '../api/index';

function* postSearch() {
  const searchQuery = yield select(selectors.getSearchQuery);
  const result = yield call(api.postSearch, searchQuery);
  yield put(action.searchFetched(result));
}

function* allSagas () {
  yield takeEvery(constant.POST_SEARCH, postSearch)
}

export default function* rootSaga() {
  yield all([
    allSagas()
  ])  
}