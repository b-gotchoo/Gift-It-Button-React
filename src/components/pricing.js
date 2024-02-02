import React from 'react'

import PropTypes from 'prop-types'

import './pricing.css'

const Pricing = (props) => {
  return (
    <section className="pricing-pricing">
      <div className="pricing-centered-container">
        <div className="pricing-heading">
          <span className="pricing-text title">{props.text}</span>
          <span className="pricing-text01">{props.text1}</span>
          <div className="pricing-selection">
            <span className="pricing-text02">{props.text2}</span>
            <span className="pricing-text03">{props.text3}</span>
          </div>
        </div>
        <div className="pricing-cards">
          <div className="pricing-card">
            <span className="pricing-text04">
              <span className="pricing-text05">Get Started For Free</span>
              <br></br>
            </span>
            <span className="pricing-text07">
              <span className="pricing-text08">Pay per gift transaction.</span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </span>
            <div className="pricing-get-started template-button">
              <span className="pricing-text13">{props.text7}</span>
            </div>
            <span className="pricing-text14">{props.text4}</span>
            <div className="pricing-bullet-points">
              <div className="pricing-point">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="pricing-icon"
                >
                  <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="pricing-text15">{props.text8}</span>
              </div>
              <div className="pricing-point1">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="pricing-icon02"
                >
                  <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="pricing-text16">{props.text9}</span>
              </div>
            </div>
          </div>
          <div className="pricing-card1">
            <span className="pricing-text17">{props.text5}</span>
            <span className="pricing-text18">
              <span>
                Enhance your gifting features with premium add-ons and services.
              </span>
              <br></br>
              <br></br>
            </span>
            <div className="pricing-get-started1 template-button">
              <span className="pricing-text22">
                <span>View Add-ons</span>
                <br></br>
              </span>
            </div>
            <span className="pricing-text25">{props.text6}</span>
            <div className="pricing-bullet-points1">
              <div className="pricing-point2">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="pricing-icon04"
                >
                  <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="pricing-text26">{props.text10}</span>
              </div>
              <div className="pricing-point3">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="pricing-icon06"
                >
                  <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="pricing-text27">{props.text11}</span>
              </div>
              <div className="pricing-point4">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="pricing-icon08"
                >
                  <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="pricing-text28">{props.text12}</span>
              </div>
              <div className="pricing-point5">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="pricing-icon10"
                >
                  <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="pricing-text29">{props.text13}</span>
              </div>
            </div>
          </div>
          <div className="pricing-card2">
            <span className="pricing-text30">
              <span className="pricing-text31">Enterprise</span>
              <br></br>
              <span>Plans</span>
              <br></br>
            </span>
            <span className="pricing-text35">
              <span>
                Volume based discounts and custom solutions are available.
                Contact us and let&apos;s dream up something big!
              </span>
              <br></br>
            </span>
            <div className="pricing-get-started2 template-button">
              <span className="pricing-text38">
                <span>Reach out</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Pricing.defaultProps = {
  text: 'Pricing for all kind of businesses',
  text7: 'Start for free',
  text8: 'Sed ut pespiciatis unde omnis',
  text5: 'Premium Add-ons',
  text2: 'Monthly',
  text3: 'Yearly',
  text13: 'Sed ut pespiciatis unde omnis',
  text9: 'Sed ut pespiciatis unde omnis',
  text4: "What's included",
  text6: "What's included",
  text11: 'Sed ut pespiciatis unde omnis',
  text12: 'Sed ut pespiciatis unde omnis',
  text10: 'Sed ut pespiciatis unde omnis',
  text1:
    'Gifting solutions for any e-commerce needs with pricing options to accommodate everyone.',
}

Pricing.propTypes = {
  text: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text13: PropTypes.string,
  text9: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  text10: PropTypes.string,
  text1: PropTypes.string,
}

export default Pricing
