import React from 'react';
import { Provider } from 'react-redux';
import Home from '../containers/homepage';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from '../store/reducer';
import allSagas from '../sagas/saga';
import '../assets/stylesheets/main.scss';


const saga = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(saga));

saga.run(allSagas);

store.subscribe(() => console.log(store.getState()));

import * as action from '../store/actions'

const Index = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default Index;