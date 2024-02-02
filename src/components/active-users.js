import React from 'react'

import PropTypes from 'prop-types'

import './active-users.css'

const ActiveUsers = (props) => {
  return (
    <div className="active-users-active-users metrics">
      <span className="active-users-text">{props.statistic}</span>
    </div>
  )
}

ActiveUsers.defaultProps = {
  caption: 'Caption',
  statistic: 'Description',
}

ActiveUsers.propTypes = {
  caption: PropTypes.string,
  statistic: PropTypes.string,
}

export default ActiveUsers
