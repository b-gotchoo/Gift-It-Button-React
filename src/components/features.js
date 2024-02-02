import React from 'react'

import PropTypes from 'prop-types'

import './features.css'

const Features = (props) => {
  return (
    <section id="solutions" className="features-features">
      <div className="features-title">
        <span id="features" className="features-text">
          {props.text}
        </span>
      </div>
    </section>
  )
}

Features.defaultProps = {
  text: 'Easily integrate Gifting Giftboards, Wish Lists, and Registries for your online store.',
}

Features.propTypes = {
  text: PropTypes.string,
}

export default Features
