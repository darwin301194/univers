import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchPeoplesIfNeeded, selectedPeoplesPage } from '../actions'
import NotFoundPage from './NotFoundPage'
import PeopleList from '../components/People/PeopleList'
import Pagination from '../components/Pagination'

class People extends React.Component {
  componentDidMount() {
    this.props.actions.fetchPeoplesIfNeeded(this.props.location.query.page)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.query.page !== nextProps.location.query.page) {
      this.props.actions.fetchPeoplesIfNeeded(nextProps.location.query.page)
    }
  }

  render() {
    const {
      page,
      error,
      isFetching,
      didInvalidate,
      totalCount,
      peoples,
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
        <PeopleList peoples={peoples} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedPeoplesPage, peoplesByPage } = state

  const page = selectedPeoplesPage
  const peoplePage = peoplesByPage[page]

  if (!peoplePage) {
    return {
      page,
      error: null,
      isFetching: true,
      didInvalidate: false,
      totalCount: 0,
      peoples: []
    }
  }

  return {
    page,
    error: peoplePage.error,
    isFetching: peoplePage.isFetching,
    didInvalidate: peoplePage.didInvalidate,
    totalCount: peoplePage.totalCount,
    peoples: peoplePage.peoples
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchPeoplesIfNeeded, selectedPeoplesPage }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(People)
