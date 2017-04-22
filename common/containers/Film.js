import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchFilmsIfNeeded, selectedFilmsPage } from '../actions'
import NotFoundPage from './NotFoundPage'
import FilmList from '../components/Film/FilmList'
import Pagination from '../components/Pagination'

class Film extends React.Component {
  componentDidMount() {
    this.props.actions.fetchFilmsIfNeeded(this.props.location.query.page)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.query.page !== nextProps.location.query.page) {
      this.props.actions.fetchFilmsIfNeeded(nextProps.location.query.page)
    }
  }

  render() {
    const {
      page,
      error,
      isFetching,
      totalCount,
      films,
      location: {
        pathname
      }
    } = this.props;

    if (isFetching) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
      <div>
        <Pagination
          totalCount={totalCount}
          pathname={pathname}
          page={parseInt(page, 10)} />
        <FilmList films={films} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedFilmsPage, filmsByPage } = state

  const page = selectedFilmsPage
  const filmPage = filmsByPage[page]

  if (!filmPage) {
    return {
      page,
      error: null,
      isFetching: true,
      didInvalidate: false,
      totalCount: 0,
      films: []
    }
  }

  return {
    page,
    error: filmPage.error,
    isFetching: filmPage.isFetching,
    didInvalidate: filmPage.didInvalidate,
    totalCount: filmPage.totalCount,
    films: filmPage.films
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchFilmsIfNeeded, selectedFilmsPage }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Film)
