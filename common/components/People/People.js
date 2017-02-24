import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classNames from 'classnames'

import style from './style.css'

const PeopleDescription = ({ description }) => (
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

const PeopleInfo = ({ info }) => (
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

const People = ({ people }) => (
  <li className={style.peopleItem}>
    <div className={style.peopleContent}>
      <div className={style.mb20}>{people.name}</div>
      <PeopleDescription
        description={{
          height: people.height,
          mass: people.mass,
          hair_color: people.hair_color,
          skin_color: people.skin_color,
          eye_color: people.eye_color,
          birth_year: people.birth_year,
          gender: people.gender
        }} />
      <PeopleInfo
        info={{
          films: people.films,
          species: people.species,
          vehicles: people.vehicles,
          starships: people.startships
        }} />
    </div>
  </li>
)

People.propTypes = {
  people: PropTypes.object.isRequired
}

export default People
