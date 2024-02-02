import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Gift-It-Button</title>
        <meta property="og:title" content="Gift-It-Button" />
      </Helmet>
      <div className="home-menu">
        <div id="mobile-menu" className="home-mobile-navigation">
          <AppComponent></AppComponent>
          <div className="home-links">
            <a href="#how-it-works" className="home-text Link">
              Solutions
            </a>
            <a href="#how-it-works" className="home-link Link">
              How it works
            </a>
            <a href="#pricing" className="home-link01 Link">
              Prices
            </a>
            <span className="home-sign-in Link">Sign in</span>
            <div className="home-get-started">
              <span className="home-text001">Get started</span>
            </div>
          </div>
          <div id="close-mobile-menu" className="home-close-mobile-menu">
            <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
              <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
            </svg>
          </div>
        </div>
        <div className="home-desktop-navigation">
          <nav className="home-centered">
            <div className="home-left">
              <AppComponent></AppComponent>
              <div className="home-links1">
                <a href="#features" className="home-text002 Link">
                  Solutions
                </a>
                <a href="#how-it-works" className="home-link02 Link">
                  How it works
                </a>
                <a href="#pricing" className="home-link03 Link">
                  Prices
                </a>
              </div>
            </div>
            <div className="home-right">
              <a
                href="https://forms.gle/kx29hjYrUG9PDcKJ8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-sign-in1 Link"
              >
                Sign in
              </a>
              <a
                href="https://forms.gle/kx29hjYrUG9PDcKJ8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link04"
              >
                <div className="home-get-started01">
                  <span className="home-text003">Get started</span>
                </div>
              </a>
              <div id="open-mobile-menu" className="home-burger-menu">
                <img
                  alt="pastedImage"
                  src="/pastedimage-yxbd.svg"
                  className="home-mobile-menu-button"
                />
              </div>
            </div>
          </nav>
        </div>
        <div>
          <div className="home-container2">
            <Script
              html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <div className="home-hero">
        <div className="home-container3">
          <h1 className="home-text004">
            <span>
              Unlock
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Gifting Revenue with </span>
            <span>
              the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Gift it Button.</span>
          </h1>
          <p className="home-text011">
            Easily integrate GOTCHOO&apos;s Gifting Technology on your
            e-commerce platform. Get up and running in minutes! 
          </p>
          <a
            href="https://forms.gle/kx29hjYrUG9PDcKJ8"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link05"
          >
            <div className="home-get-started02">
              <span className="home-text012">Get started</span>
            </div>
          </a>
        </div>
        <img
          alt="image"
          src="/product%20page1-1300w.png"
          className="home-image"
        />
      </div>
      <section id="solutions" className="home-features">
        <div className="home-title">
          <span id="features" className="home-text013">
            Easily integrate Gifting Giftboards, Wish Lists, and Registries for
            your online store.
          </span>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container4">
            <div className="home-left1">
              <span className="sub-title">
                Turn maybes into purchases with gifting transactions.
              </span>
              <span className="home-text015 title">
                Send gifts with the Giftboard
              </span>
              <span className="home-text016">
                Enable your customers to send your products as gifts in just a
                few clicks. They won&apos;t even need to provide their
                recipient&apos;s shipping address! 
              </span>
              <a
                href="https://forms.gle/kx29hjYrUG9PDcKJ8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06"
              >
                <div className="home-get-started03 template-button">
                  <span className="home-text017">Get started</span>
                </div>
              </a>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/screen%20shot%202024-02-01%20at%2010.39.24%20am-1200w.png"
                className="home-image01"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="/test-1200w.png"
                className="home-cards-image"
              />
            </div>
            <div className="home-right1">
              <span className="sub-title">
                Site stickiness &amp; engagement, with wish lists.
              </span>
              <h2 className="home-text019 title">Save gifts with Wish Lists</h2>
              <div className="home-category">
                <span className="home-text020">
                  <span>Increase customer satisfaction</span>
                  <br></br>
                </span>
                <span className="home-text023">
                  <span>
                    40% of shoppers think their shopping experience would be
                    better if retailers offered a wishlist
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>where they can save items they’re interested in.</span>
                  <br></br>
                </span>
              </div>
              <div className="home-category1">
                <span className="home-text028">
                  Powerful systems management
                </span>
                <span className="home-text029">
                  Leverage GOTCHOO&apos;s powerful gifting technology services
                  via our easy to use API and enable wish lists for customers.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-container5">
            <div className="home-left2">
              <span className="home-text030">
                Visits and return visits with registries.
              </span>
              <h2 className="home-text031 title">
                Receive gifts with Registries
              </h2>
              <span className="home-text032">
                Enable your products to be added to registries and become a part
                of a $300+ Billion registry gift market.
              </span>
              <a
                href="https://forms.gle/kx29hjYrUG9PDcKJ8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link07"
              >
                <div className="home-get-started04 template-button">
                  <span className="home-text033">Get started</span>
                </div>
              </a>
            </div>
            <div className="home-container6">
              <img
                alt="image"
                src="/registry-500w.png"
                className="home-image02"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="home-integrations">
        <div className="home-centered-container1">
          <div className="home-heading">
            <span className="sub-title">Integrations</span>
            <span className="title">
              Integrated with the tools you know and love
            </span>
            <span className="home-text036">
              <span>
                Add the Gift It Button to your e-commerce site on all of your
                favorite platforms:
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-pills-container">
            <div className="home-pills">
              <div className="home-you-tube">
                <img
                  alt="image"
                  src="/javascript-200h.png"
                  className="home-image03"
                />
              </div>
              <div className="home-you-tube1">
                <img
                  alt="image"
                  src="/shopify-ecommerce-platform%20new-200h.jpg"
                  className="home-image04"
                />
              </div>
              <div className="home-you-tube2">
                <img
                  alt="image"
                  src="/wordpress-logo-200h.png"
                  className="home-image05"
                />
              </div>
              <div className="home-you-tube3">
                <img
                  alt="image"
                  src="/squarespace_logo-200h.png"
                  className="home-image06"
                />
              </div>
              <div className="home-you-tube4">
                <img
                  alt="image"
                  src="/twitch-logo-200h.png"
                  className="home-image07"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works">
        <div className="home-centered-container2">
          <div className="home-heading1">
            <span className="home-text039">How it works</span>
            <span className="home-text040 title">
              Generating gifting revenue has never been easier.
            </span>
          </div>
          <div className="home-category2">
            <div className="home-headng">
              <span className="home-text041">
                1 — Sign up
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text042">
                Sign-up for an account and link your store.
              </span>
              <a
                href="https://forms.gle/kx29hjYrUG9PDcKJ8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08"
              >
                <div className="home-get-started05 template-button">
                  <span className="home-text043">Get started</span>
                </div>
              </a>
            </div>
            <div className="home-pasted-image">
              <img
                alt="image"
                src="/screen%20shot%202024-02-01%20at%2010.23.49%20am-300w.png"
                className="home-image08"
              />
            </div>
            <div className="home-container7"></div>
          </div>
          <div className="home-row">
            <div className="home-category3">
              <div className="home-headng1">
                <span className="home-text044">2 — Pick your Plug-In</span>
                <span className="home-text045">
                  Pick the plugin that works best for you. We&apos;re available
                  for wherever and whatever you build.
                </span>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1573495782488-ac161d6b25f8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDczfHxmb3JtJTIwd2VifGVufDB8fHx8MTcwNjgxOTEwMHww&amp;ixlib=rb-4.0.3&amp;w=1000"
                className="home-image09"
              />
            </div>
            <div className="home-category4">
              <div className="home-headng2">
                <span className="home-text046">3. Select products</span>
                <span className="home-text047">
                  Choose the products or services you&apos;d like to offer as
                  gifts and you&apos;re ready to go!
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-3c4o-1200w.png"
                className="home-pasted-image1"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="home-pricing">
        <div className="home-centered-container3">
          <div className="home-heading2">
            <span className="home-text048 title">
              Pricing for all kind of businesses
            </span>
            <span className="home-text049">
              Gifting solutions for any e-commerce needs with pricing options to
              accommodate everyone.
            </span>
          </div>
          <div className="home-cards">
            <div className="home-card">
              <span className="home-text050">
                <span className="home-text051">Get Started For Free</span>
                <br></br>
              </span>
              <span className="home-text053">
                <span className="home-text054">Pay per gift transaction.</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </span>
              <a
                href="https://forms.gle/kx29hjYrUG9PDcKJ8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                <div className="home-get-started06 template-button">
                  <span className="home-text059">Start for free</span>
                </div>
              </a>
              <span className="home-text060">
                5% service fee per gift order
              </span>
              <div className="home-bullet-points">
                <div className="home-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon02"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text061">
                    Enable gift transactions with Giftboards
                  </span>
                </div>
                <div className="home-point1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text062">
                    Increase visits and stickiness with Wish Lists
                  </span>
                </div>
                <div className="home-point2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text063">
                    Generate revenue by making your products available for
                    Registries
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <span className="home-text064">Premium Add-ons</span>
              <span className="home-text065">
                <span>
                  Enhance your gifting features with premium add-ons and
                  services.
                </span>
                <br></br>
                <br></br>
              </span>
              <a
                href="https://forms.gle/kx29hjYrUG9PDcKJ8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                <div className="home-get-started07 template-button">
                  <span className="home-text069">
                    <span>View Add-ons</span>
                    <br></br>
                  </span>
                </div>
              </a>
              <span className="home-text072">What&apos;s included</span>
              <div className="home-bullet-points1">
                <div className="home-point3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text073">
                    Enhanced analytics &amp; reporting
                  </span>
                </div>
                <div className="home-point4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text074">
                    Custom branding &amp; integration
                  </span>
                </div>
                <div className="home-point5">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text075">Advanced tools</span>
                </div>
                <div className="home-point6">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text076">Marketplace add-ons</span>
                </div>
              </div>
            </div>
            <div className="home-card2">
              <span className="home-text077">
                <span className="home-text078">Enterprise</span>
                <br></br>
                <span>Plans</span>
                <br></br>
              </span>
              <span className="home-text082">
                <span>
                  Volume based discounts and custom solutions are available.
                  Contact us and let&apos;s dream up something big!
                </span>
                <br></br>
              </span>
              <a
                href="https://forms.gle/kx29hjYrUG9PDcKJ8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                <div className="home-get-started08 template-button">
                  <span className="home-text085">
                    <span>Reach out</span>
                    <br></br>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading3">
            <span className="home-text088 title">
              <span>
                Generate
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>gift sales now </span>
              <span>with GOTCHOO!</span>
            </span>
            <span className="home-text093">
              Enable Giftboards, Wish Lists, and Registries in minutes. Start
              for free, and start getting gifting sales today!
            </span>
            <a
              href="https://forms.gle/kx29hjYrUG9PDcKJ8"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link12"
            >
              <div className="home-get-started09 template-button">
                <span className="home-text094">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </a>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1582004531564-50f300aae039?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGVjb21tZXJjZXxlbnwwfHx8fDE3MDY4MTkyNDl8MA&amp;ixlib=rb-4.0.3&amp;w=1200"
            className="home-image10"
          />
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <div className="home-left3">
            <span className="home-text097">Subscribe to our newsletter</span>
            <div className="home-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-subscribe">
                <span className="home-text098">Subscribe</span>
              </div>
            </div>
            <span className="home-text099">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </span>
            <div className="home-contact">
              <span className="home-text100">Contact</span>
              <a
                href="mailto:use@active-app.com?subject=Support"
                className="home-link13"
              >
                <span className="home-text101">hello@gotchoo.com</span>
                <br></br>
                <br></br>
              </a>
            </div>
          </div>
        </div>
        <div className="home-bottom">
          <span className="home-text104">Copyright © GOTCHOO Inc. - 2024</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
