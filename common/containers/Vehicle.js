import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchVehiclesIfNeeded, selectedVehiclesPage } from '../actions'
import NotFoundPage from './NotFoundPage'
import VehicleList from '../components/Vehicle/VehicleList'
import Pagination from '../components/Pagination'

class Vehicle extends React.Component {
  componentDidMount() {
    this.props.actions.fetchVehiclesIfNeeded(this.props.location.query.page)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.query.page !== nextProps.location.query.page) {
      this.props.actions.fetchVehiclesIfNeeded(nextProps.location.query.page)
    }
  }

  render() {
    const {
      page,
      error,
      isFetching,
      totalCount,
      vehicles,
      location: {
        pathname
      }
    } = this.props

    if (isFetching) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    console.log(vehicles);
    return (
      <div>
        <Pagination
          totalCount={totalCount}
          pathname={pathname}
          page={parseInt(page, 10)} />
        <VehicleList vehicles={vehicles} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedVehiclesPage, vehiclesByPage } = state

  const page = selectedVehiclesPage
  const vehiclePage = vehiclesByPage[page]

  if (!vehiclePage) {
    return {
      page,
      error: null,
      isFetching: true,
      totalCount: 0,
      vehicles: []
    }
  }

  return {
    page,
    error: vehiclePage.error,
    isFetching: vehiclePage.isFetching,
    totalCount: vehiclePage.totalCount,
    vehicles: vehiclePage.vehicles
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchVehiclesIfNeeded, selectedVehiclesPage }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle)
