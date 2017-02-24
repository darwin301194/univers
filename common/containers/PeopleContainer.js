import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchPeople, fetchPeopleIfNeeded } from '../actions'
import PeopleList from '../components/People/PeopleList'
import Pagination from '../components/Pagination'

class PeopleContainer extends React.Component {
  componentDidMount() {
    this.props.actions.fetchPeopleIfNeeded()
  }

  render() {
    const { peoples } = this.props

    if (!peoples) return null
    return (
      <div>
        <PeopleList peoples={peoples}/>
        <Pagination />
      </div>
    )
  }
}

PeopleContainer.need = [
  fetchPeople
]

const mapStateToProps = state => ({
  peoples: state.people.data
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchPeopleIfNeeded }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
