import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const Profile = (props) => {
  return (
    <div>Profile</div>
  )
}

Profile.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)