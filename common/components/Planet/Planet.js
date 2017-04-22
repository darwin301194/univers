import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classNames from 'classnames'

import style from '../Common/style.css'

const PlanetDescription = ({ description }) => (
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

const PlanetInfo = ({ info }) => (
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

const Planet = ({ planet }) => (
  <li className={style.thingItem}>
    <div className={style.thingContent}>
      <div className={style.mb20}>{planet.name}</div>
      <PlanetDescription
        description={{
          rotation_period: planet.rotation_period,
          orbital_period: planet.orbital_period,
          diameter: planet.diameter,
          climate: planet.climate,
          gravity: planet.gravity,
          terrain: planet.terrain,
          surface_water: planet.surface_water,
          population: planet.population
        }} />
      <PlanetInfo
        info={{
          residents: planet.residents,
          films: planet.films,
        }} />
    </div>
  </li>
)

Planet.propTypes = {
  planet: PropTypes.object.isRequired
}

export default Planet
