import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import SearchContainer from './search';
import content from '../content/cms_content.md';


class Home extends React.Component {
  render () {
    const { attributes: { title, subtitle } } = content;
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
    
        <div className="hero is-fullheight">
          <div className="hero-head">
            <Nav><SearchContainer/></Nav>
          </div>
            <div className="hero-body">
              <div className="container hero__container">
                <div className="hero__headers">
                  <h1 className="title">
                    { title }
                  </h1>
                  <p className="subtitle"> { subtitle }</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Home