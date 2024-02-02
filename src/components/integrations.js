import React from 'react'

import PropTypes from 'prop-types'

import YouTube from './you-tube'
import './integrations.css'

const Integrations = (props) => {
  return (
    <section className="integrations-integrations">
      <div className="integrations-centered-container">
        <div className="integrations-heading">
          <span className="sub-title">{props.text}</span>
          <span className="title">{props.text1}</span>
          <span className="integrations-text2">
            <span>
              Add the Gift It Button to your e-commerce site on all of your
              favorite platforms:
            </span>
            <br></br>
          </span>
        </div>
        <div className="integrations-pills-container">
          <div className="integrations-pills">
            <div className="integrations-container">
              <YouTube></YouTube>
              <YouTube pastedImageSrc="/logos/pinterest%20logo-200h.png"></YouTube>
              <div className="integrations-container1">
                <YouTube pastedImageSrc="/logos/group%201012-200h.png"></YouTube>
              </div>
              <YouTube pastedImageSrc="/logos/group%201015-200h.png"></YouTube>
              <YouTube pastedImageSrc="/logos/layer1-200h.png"></YouTube>
              <YouTube pastedImageSrc="/logos/group-200h.png"></YouTube>
            </div>
            <div className="integrations-container2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

Integrations.defaultProps = {
  text: 'Integrations',
  text1: 'Integrated with the tools you know and love',
}

Integrations.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Integrations
