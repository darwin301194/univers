import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Vehicle from './Vehicle'
import style from '../Common/style.css'

const VehicleList = ({ vehicles }) => (
  <ul className={style.thingList}>
    {vehicles.map(vehicle =>
      <Vehicle
        key={'key' + vehicle.name}
        vehicle={vehicle} />
    )}
  </ul>
)

VehicleList.propTypes = {
  vehicles: PropTypes.array.isRequired
}

export default VehicleList
