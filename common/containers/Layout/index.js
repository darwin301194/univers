import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import style from './style.css'

const Layout = ({ menu, children }) => (
  <div>
    <header>
      <nav>
        <ul className={style.navList}>
          {Object.keys(menu).map(value =>
            <li
              key={'key' + value}
              className={style.navItem}>
              <Link to={'/' + value}>{value}</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
    <div id="app-content">{children}</div>
    <footer>
      Created by darwincahyadi
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
  menu: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  menu: state.menu
})

export default connect(mapStateToProps)(Layout)
