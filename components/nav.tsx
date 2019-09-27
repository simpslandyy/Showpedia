import React from 'react'
import Link from 'next/link'
import content from '../content/cms_content.md';

interface NavProps {
  // switch up whats on the right hand side of gthe nav
  // it could be a search bar, or maybe it could be a button
  // or maybe a chat button
  children?: React.ReactNode;
}

const Nav: React.FunctionComponent<NavProps> = (props) => {
  const { attributes: { nav_links, logo }} = content; 
  return (
    <nav className="navbar is-light is-transparent" role="navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img className="navbar-logo" src={logo}></img>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          { nav_links.map((link: { label: string, url: string }, idx: number) => 
            <a className="navbar-item" href={link.url} key={`${link.label}_${idx}`}> {link.label} </a>
          )}
        </div>
        <div className="navbar-end">
          {props.children}
        </div>
      </div>
    </nav>
  )
}

export default Nav;