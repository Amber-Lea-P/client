import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const Profiles = (props) => {
  return (
    <div>Profiles</div>
  )
}

Profiles.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles)