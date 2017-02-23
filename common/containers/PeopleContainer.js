import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadPeople, loadPeopleIfNeeded } from '../actions'
import PeopleList from '../components/PeopleComponent/PeopleList'
import Pagination from '../components/Pagination'

class PeopleContainer extends React.Component {
  componentDidMount() {
    this.props.actions.loadPeopleIfNeeded()
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
  loadPeople
]

const mapStateToProps = state => ({
  peoples: state.people.data
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadPeopleIfNeeded }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
