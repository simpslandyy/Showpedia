import { connect } from 'react-redux';
import { IState } from '../store/reducer';
import Content from '../components/content';

const mapStateToProps = (state: IState) => {
  return {search_results: state.search_results};
}

const ContentContainer = connect(mapStateToProps, null)(Content);

export default ContentContainer;