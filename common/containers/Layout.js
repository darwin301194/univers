import React from 'react'
import { Link } from 'react-router'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/about">
            <span>About</span>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          Created by darwincahyadi
        </footer>
      </div>
    );
  }
}
