import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchSpeciesIfNeeded, selectedSpeciesPage } from '../actions'
import NotFoundPage from './NotFoundPage'
import SpeciesList from '../components/Species/SpeciesList'
import Pagination from '../components/Pagination'

class Species extends React.Component {
  componentDidMount() {
    this.props.actions.fetchSpeciesIfNeeded(this.props.location.query.page)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.query.page !== nextProps.location.query.page) {
      this.props.actions.fetchSpeciesIfNeeded(nextProps.location.query.page)
    }
  }

  render() {
    const {
      page,
      error,
      isFetching,
      totalCount,
      species,
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
        <SpeciesList species={species} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedSpeciesPage, speciesByPage } = state

  const page = selectedSpeciesPage
  const speciesPage = speciesByPage[page]

  if (!speciesPage) {
    return {
      page,
      error: null,
      isFetching: true,
      didInvalidate: false,
      totalCount: 0,
      species: []
    }
  }

  return {
    page,
    error: speciesPage.error,
    isFetching: speciesPage.isFetching,
    didInvalidate: speciesPage.didInvalidate,
    totalCount: speciesPage.totalCount,
    species: speciesPage.species
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchSpeciesIfNeeded, selectedSpeciesPage }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Species)
