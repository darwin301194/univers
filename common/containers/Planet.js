import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchPlanetsIfNeeded, selectedPlanetsPage } from '../actions'
import NotFoundPage from './NotFoundPage'
import PlanetList from '../components/Planet/PlanetList'
import Pagination from '../components/Pagination'

class Planet extends React.Component {
  componentDidMount() {
    this.props.actions.fetchPlanetsIfNeeded(this.props.location.query.page)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.query.page !== nextProps.location.query.page) {
      this.props.actions.fetchPlanetsIfNeeded(nextProps.location.query.page)
    }
  }

  render() {
    const {
      page,
      error,
      isFetching,
      totalCount,
      planets,
      location: {
        pathname
      }
    } = this.props

    if (isFetching) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
      <div>
        <Pagination
          totalCount={totalCount}
          pathname={pathname}
          page={parseInt(page, 10)} />
        <PlanetList planets={planets} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedPlanetsPage, planetsByPage } = state

  const page = selectedPlanetsPage
  const planetPage = planetsByPage[page]

  if (!planetPage) {
    return {
      page,
      error: null,
      isFetching: true,
      didInvalidate: false,
      totalCount: 0,
      planets: []
    }
  }

  return {
    page,
    error: planetPage.error,
    isFetching: planetPage.isFetching,
    didInvalidate: planetPage.didInvalidate,
    totalCount: planetPage.totalCount,
    planets: planetPage.planets
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchPlanetsIfNeeded, selectedPlanetsPage }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Planet)
