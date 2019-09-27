import React from 'react';
import Head from 'next/head';
import SearchContainer from '../containers/search';
import Nav from '../components/nav';

interface IProps {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<IProps> = (props) => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className="hero is-fullheight">
      <div className="hero-head">
        <Nav>
          <SearchContainer />
        </Nav>
      </div>

      <div className="hero-body">
        <div className="container hero__container">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

export default Layout;