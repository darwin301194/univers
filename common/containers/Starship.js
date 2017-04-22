import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchStarshipsIfNeeded, selectedStarshipsPage } from '../actions'
import NotFoundPage from './NotFoundPage'
import StarshipList from '../components/Starship/StarshipList'
import Pagination from '../components/Pagination'

class Starship extends React.Component {
  componentDidMount() {
    this.props.actions.fetchStarshipsIfNeeded(this.props.location.query.page)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.query.page !== nextProps.location.query.page) {
      this.props.actions.fetchStarshipsIfNeeded(nextProps.location.query.page)
    }
  }

  render() {
    const {
      page,
      error,
      isFetching,
      totalCount,
      starships,
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
        <StarshipList starships={starships} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedStarshipsPage, starshipsByPage } = state

  const page = selectedStarshipsPage
  const starshipPage = starshipsByPage[page]

  if (!starshipPage) {
    return {
      page,
      error: null,
      isFetching: true,
      didInvalidate: false,
      totalCount: 0,
      starships: []
    }
  }

  return {
    page,
    error: starshipPage.error,
    isFetching: starshipPage.isFetching,
    didInvalidate: starshipPage.didInvalidate,
    totalCount: starshipPage.totalCount,
    starships: starshipPage.starships
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchStarshipsIfNeeded, selectedStarshipsPage }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Starship)
