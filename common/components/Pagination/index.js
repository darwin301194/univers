import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classNames from 'classnames'

import style from './style.css'

const Pagination = ({ page, pathname, totalCount }) => {
  const maxPagination = Math.ceil(totalCount / 10)
  let pagination = []
  for (let i = 1; i <= maxPagination; i++) {
    if (page === i) {
      pagination.push(
        <li
          className={style.paginationItem}
          key={'key' + i}>
          {i}
        </li>
      )
    } else {
      pagination.push(
        <li
          className={style.paginationItem}
          key={'key' + i}>
          <Link to={pathname + '?page=' + i}>{i}</Link>
        </li>
      )
    }
  }

  return <ul className={style.paginationList}>{pagination}</ul>
}

Pagination.propTypes = {
  page: React.PropTypes.number.isRequired,
  pathname: React.PropTypes.string.isRequired,
  totalCount: React.PropTypes.number.isRequired
}

export default Pagination
