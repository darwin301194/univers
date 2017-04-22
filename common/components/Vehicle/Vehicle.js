import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classNames from 'classnames'

import style from '../Common/style.css'

const VehicleDescription = ({ description }) => (
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

const VehicleInfo = ({ info }) => (
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

const Vehicle = ({ vehicle }) => (
  <li className={style.thingItem}>
    <div className={style.thingContent}>
      <div className={style.mb20}>{vehicle.name}</div>
      <VehicleDescription
        description={{
          model: vehicle.model,
          manufacturer: vehicle.manufacturer,
          cost_in_credits: vehicle.cost_in_credits,
          length: vehicle.length,
          max_atmosphering_speed: vehicle.max_atmosphering_speed,
          crew: vehicle.crew,
          passengers: vehicle.passengers,
          population: vehicle.population,
          cargo_capacity: vehicle.cargo_capacity,
          consumables: vehicle.consumables,
          vehicle_class: vehicle.vehicle_class
        }} />
      <VehicleInfo
        info={{
          pilots: vehicle.pilots,
          films: vehicle.films
        }} />
    </div>
  </li>
)

Vehicle.propTypes = {
  vehicle: PropTypes.object.isRequired
}

export default Vehicle
