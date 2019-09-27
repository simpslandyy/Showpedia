import React from 'react';
import content from '../content/cms_content.md';
import Layout from '../components/layout';

class Homepage extends React.Component {
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

export default Homepage;

