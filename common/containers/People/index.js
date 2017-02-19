import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadPeople, loadPeopleIfNeeded } from '../../actions'

class People extends React.Component {
  componentDidMount() {
    this.props.actions.loadPeopleIfNeeded()
  }

  render() {
    return (
      <div className="people">
        Luke Skywalker
      </div>
    )
  }
}

People.need = [
  loadPeople
]

const mapStateToProps = state => ({
  people: state.people
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadPeopleIfNeeded }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(People)
