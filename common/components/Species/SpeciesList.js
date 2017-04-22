import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Species from './Species'
import style from '../Common/style.css'

const SpeciesList = ({ species }) => (
  <ul className={style.thingList}>
    {species.map(species =>
      <Species
        key={'key' + species.name}
        species={species} />
    )}
  </ul>
)

SpeciesList.propTypes = {
  species: PropTypes.array.isRequired
}

export default SpeciesList
