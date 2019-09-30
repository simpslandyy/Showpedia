import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../store/reducer';
import ContentContainer from '../containers/content';
import Layout from '../components/layout';
import { useRouter } from 'next/router';

interface IStateToProps {
  search_results: any
}

const Results: React.FunctionComponent<IStateToProps> = (props) => {
  const router = useRouter();
  const { search_results } = props;
  return (
  <Layout>
    <ContentContainer search_results={search_results} />
  </Layout>
  )
}

const mapStateToProps = (state: IState) => {
  return { search_results: state.search_results }
}

const SearchResults = connect(mapStateToProps, null)(Results);
export default SearchResults;
