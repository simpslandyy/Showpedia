import { connect } from 'react-redux';
import { postSearch, updateSearchQuery } from '../store/actions';
import Search  from '../components/search/search';
import { IState } from '../store/reducer';

const mapStateToProps = (state: IState) => {
  return {...state}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    submitSearch: () => dispatch(postSearch()),
    updateQuery: (query: string) => dispatch(updateSearchQuery(query))
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;