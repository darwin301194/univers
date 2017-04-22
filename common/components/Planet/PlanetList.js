import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Planet from './Planet'
import style from '../Common/style.css'

const PlanetList = ({ planets }) => (
  <ul className={style.thingList}>
    {planets.map(planet =>
      <Planet
        key={'key' + planet.name}
        planet={planet} />
    )}
  </ul>
)

PlanetList.propTypes = {
  planets: PropTypes.array.isRequired
}

export default PlanetList
