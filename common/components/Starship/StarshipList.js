import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Starship from './Starship'
import style from '../Common/style.css'

const StarshipList = ({ starships }) => (
  <ul className={style.thingList}>
    {starships.map(starship =>
      <Starship
        key={'key' + starship.name}
        starship={starship} />
    )}
  </ul>
)

StarshipList.propTypes = {
  starships: PropTypes.array.isRequired
}

export default StarshipList
