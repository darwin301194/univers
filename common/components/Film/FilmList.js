import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Film from './Film'
import style from '../Common/style.css'

const FilmList = ({ films }) => (
  <ul className={style.thingList}>
    {films.map(film =>
      <Film
        key={'key' + film.title}
        film={film} />
    )}
  </ul>
)

FilmList.propTypes = {
  films: PropTypes.array.isRequired
}

export default FilmList
