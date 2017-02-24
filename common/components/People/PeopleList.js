import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import People from './People'
import style from './style.css'

const PeopleList = ({ peoples }) => (
  <ul className={style.peopleList}>
    {peoples.map(people =>
      <People
        key={'key' + people.name}
        people={people} />
    )}
  </ul>
)

PeopleList.propTypes = {
  peoples: PropTypes.array.isRequired
}

export default PeopleList
