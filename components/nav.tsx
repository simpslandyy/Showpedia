import React from 'react'
import Link from 'next/link'

interface NavProps {
  // switch up whats on the right hand side of gthe nav
  // it could be a search bar, or maybe it could be a button
  // or maybe a chat button
  children?: React.ReactNode;
}

const Nav: React.FunctionComponent<NavProps> = (props) => {
  return (
    <nav className="navbar is-light is-transparent" role="navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img className="navbar-logo" src="https://bulma.io/images/bulma-logo.png"></img>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">About Me</a>
          <a className="navbar-item" href="https://github.com/simpslandyy" target="_blank">GitHub</a>
          <a className="navbar-item">My Top 10</a>
        </div>
        <div className="navbar-end">
          {props.children}
        </div>
      </div>
    </nav>
  )
}

export default Nav;