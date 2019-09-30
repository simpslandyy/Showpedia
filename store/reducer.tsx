import * as constant from './constants';
import { Reducer } from 'redux';
import Router from "next/router";

export interface IState {
  search_results: Array<object> | [];
  search_query: string | null;
}

export const initialState: IState = {
  search_results: [],
  search_query: null
}

const reducer: Reducer<IState> = (
  state = initialState, 
  payload: { type: string, data?: any }
  )  => {
  switch(payload.type) {
    case constant.UPDATE_SEARCH:
      let updated_search = {...state};
      updated_search.search_query = payload.data;
      return updated_search;

    case constant.SEARCH_FETCHED:
      let search_fetched = {...state}
      search_fetched.search_results = payload.data;
      search_fetched.search_query = "";
      Router.push('/search_results')
      return search_fetched;
    
    default:
      return state;
  }
}

export default reducer;


