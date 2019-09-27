import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../store/reducer';
import ContentContainer from '../containers/content';
import Layout from '../components/layout';

interface IStateToProps {
  search_results: any
}

const Results: React.FunctionComponent<IStateToProps> = (props) => (
  <Layout>
    <ContentContainer search_results={props.search_results} />
  </Layout>
)

const mapStateToProps = (state: IState) => {
  return { search_results: state.search_results }
}

const SearchResults = connect(mapStateToProps)(Results);
export default SearchResults;
