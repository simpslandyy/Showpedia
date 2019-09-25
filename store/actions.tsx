import * as c from './constants';
const updateSearchQuery = (query: string) => {
  return {
    type: c.UPDATE_SEARCH,
    data: query
  }
}
const postSearch = () => {
  return {
    type: c.POST_SEARCH
  }
}

const searchFetched = (result: Array<Object>) => {
  return {
    type: c.SEARCH_FETCHED,
    data: result
  }
}


export { 
  postSearch,
  searchFetched,
  updateSearchQuery
}