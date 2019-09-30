import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import withRedux from "next-redux-wrapper";
import App from 'next/app';

// import HomepageContainer from '../containers/homepage';
import reducer, { initialState } from '../store/reducer';
import allSagas from '../sagas/saga';
import '../assets/stylesheets/main.scss';

interface IProps {
  pageProps: any
  store: Store
}

const initStore = initialState => {
  const saga = createSagaMiddleware();
  const store = createStore(reducer, initialState, applyMiddleware(saga));
  saga.run(allSagas);
  store.subscribe(() => console.log(store.getState()));
  return store;
}

class MyApp extends App<IProps> {
  static async getInitialProps({ Component, ctx}) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps };
  }

  render () {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(initStore)(MyApp);
