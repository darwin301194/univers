import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classNames from 'classnames'

import style from '../Common/style.css'

const StarshipDescription = ({ description }) => (
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

const StarshipInfo = ({ info }) => (
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

const Starship = ({ starship }) => (
  <li className={style.thingItem}>
    <div className={style.thingContent}>
      <div className={style.mb20}>{starship.name}</div>
      <StarshipDescription
        description={{
          model: starship.model,
          manufacturer: starship.manufacturer,
          cost_in_credits: starship.cost_in_credits,
          length: starship.length,
          max_atmosphering_speed: starship.max_atmosphering_speed,
          crew: starship.crew,
          passengers: starship.passengers,
          cargo_capacity: starship.cargo_capacity,
          consumables: starship.consumables,
          hyperdrive_rating: starship.hyperdrive_rating,
          MGLT: starship.MGLT,
          starship_class: starship.starship_class
        }} />
      <StarshipInfo
        info={{
          pilots: starship.pilots,
          films: starship.films
        }} />
    </div>
  </li>
)

Starship.propTypes = {
  starship: PropTypes.object.isRequired
}

export default Starship
