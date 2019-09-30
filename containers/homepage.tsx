import React from 'react';
import content from '../content/cms_content.md';
import Layout from '../components/layout';
import { IState } from '../store/reducer';
import { connect } from 'react-redux';
import  Router  from 'next/router';

const mapStateToProps = (state: IState) => {
  return { has_results: state.search_results.length > 0 }
}

interface IProps {
  has_results: boolean
}

class Homepage extends React.Component<IProps, {}> {
  render () {
    const { attributes: { title, subtitle } } = content;
    return (
     <Layout>
      <div className="hero__headers">
        <h1 className="title">
          { title }
        </h1>
        <p className="subtitle"> { subtitle }</p>
      </div>
     </Layout>
    )
  }
}
const HomepageContainer = connect(mapStateToProps)(Homepage);

export default HomepageContainer;

