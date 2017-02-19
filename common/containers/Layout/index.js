import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import style from './style.css'

const Layout = ({menu, children}) => {
  const menus = Object.keys(menu).map(value =>
    <li key={'key' + value}>
      <Link className={style.navLink} to={'/' + value}>{value}</Link>
    </li>
  )

  return (
    <div>
      <header>
        <nav>
          <ul className={style.navList}>{menus}</ul>
        </nav>
        <Link to="/about">
          <span className={style.item}>About</span>
        </Link>
      </header>
      <div id="app-content">{children}</div>
      <footer>
        Created by darwincahyadi
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  menu: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  menu: state.menu
})

export default connect(mapStateToProps)(Layout)
