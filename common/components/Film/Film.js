import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classNames from 'classnames'

import style from '../Common/style.css'

const FilmDescription = ({ description }) => (
  <div className={style.mb20}>
    {Object.entries(description).map(value =>
      <div
        key={'key' + value}
        className={classNames(style.clearfix, style.mb5)}>
        <span className={style.pullLeft}>{value[0]}:</span>
        <span className={style.pullRight}>{value[1]}</span>
      </div>
    )}
  </div>
)

const FilmInfo = ({ info }) => (
  <div>
    {Object.entries(info).map(value =>
      <div
        key={'key' + value}
        className={classNames(style.clearfix, style.mb5)}>
        <span className={style.pullLeft}>{value[0]}:</span>
        {Array.isArray(value[1]) ? value[1].map(link =>
          <Link
            key={'key' + link}
            to={link}
            className={classNames(style.pullRight, style.mb5)}>
            {link}
          </Link>
        ) : null}
      </div>
    )}
  </div>
)

const Film = ({ film }) => (
  <li className={style.thingItem}>
    <div className={style.thingContent}>
      <div className={style.mb20}>{film.title}</div>
      <FilmDescription
        description={{
          episode_id: film.episode_id,
          opening_crawl: film.opening_crawl,
          director: film.director,
          producer: film.producer,
          release_date: film.release_date
        }} />
      <FilmInfo
        info={{
          characters: film.characters,
          planets: film.planets,
          starships: film.starships,
          vehicles: film.vehicles,
          species: film.species
        }} />
    </div>
  </li>
)

Film.propTypes = {
  film: PropTypes.object.isRequired
}

export default Film
