import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import DashboardAction from './DashboardAction'

export const Dashboard = (props) => {
  return (
    <div>Welcome UserName
    <DashboardAction></DashboardAction>
    </div>
  )
}

Dashboard.propTypes = {
  
};

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)