import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classNames from 'classnames'

import style from '../Common/style.css'

const SpeciesDescription = ({ description }) => (
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

const SpeciesInfo = ({ info }) => (
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

const Species = ({ species }) => (
  <li className={style.thingItem}>
    <div className={style.thingContent}>
      <div className={style.mb20}>{species.name}</div>
      <SpeciesDescription
        description={{
          classification: species.classification,
          designation: species.designation,
          average_height: species.average_height,
          skin_colors: species.skin_colors,
          hair_colors: species.hair_colors,
          eye_colors: species.eye_colors,
          average_lifespan: species.average_lifespan,
          homeworld: species.homeworld,
          language: species.language
        }} />
      <SpeciesInfo
        info={{
          people: species.people,
          films: species.films
        }} />
    </div>
  </li>
)

Species.propTypes = {
  species: PropTypes.object.isRequired
}

export default Species
