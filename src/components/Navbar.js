import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  componentDidMount() {
    this.addZendeskButton();
    // this.addWhatsAppButton();
  }

  addZendeskButton() {
    const s = document.createElement('script');
    s.id = "ze-snippet";
    s.type = 'text/javascript';
    s.async = true;
    s.src = "https://static.zdassets.com/ekr/snippet.js?key=a3e33d57-d670-49b8-96b5-e31fd575c8a4";
    if (this.instance)
      this.instance.appendChild(s);
  }

  // addWhatsAppButton() {
  //   const s = document.createElement('script');
  //   s.id = "ws-snippet";
  //   s.type = 'text/javascript';
  //   s.async = true;
  //   s.innerHTML = "(function () {\r\n      var options = {\r\n        whatsapp: \"+919227501199\", \/\/ WhatsApp number\r\n        call_to_action: \"Message us\", \/\/ Call to action\r\n        position: \"right\", \/\/ Position may be \'right\' or \'left\'\r\n      };\r\n      var proto = document.location.protocol, host = \"getbutton.io\", url = proto + \"\/\/static.\" + host;\r\n      var s = document.createElement(\'script\'); s.type = \'text\/javascript\'; s.async = true; s.src = url + \'\/widget-send-button\/js\/init.js\';\r\n      s.onload = function () { WhWidgetSendButton.init(host, proto, options); };\r\n      var x = document.getElementsByTagName(\'script\')[0]; x.parentNode.insertBefore(s, x);\r\n    })();";
  //   if (this.instance)
  //     this.instance.appendChild(s);
  // }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        ref={el => (this.instance = el)}
        className="navbar is-fixed-top has-background-black has-text-white-ter"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
              <p className="vyber-logo">VYBER</p>
            </Link>

            {/* Hamburger menu */}
            <a href="#0"
              className={`navbar-burger burger ${this.state.navBarActiveClass} has-background-black has-text-white-ter`}
              data-target="navMenu"
              onClick={this.toggleHamburger}
            >
              <span />
              <span />
              <span />
            </a>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass} has-background-black has-text-white-ter`}
          >
            {/* <div className="navbar-start menu has-text-centered">
              <div className="menu-list" style={{ display: 'flex', alignItems: 'center' }}>
                <Link className="navbar-item" to="/">
                  Home
                </Link>
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/products">
                  Products
                </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
                <Link className="navbar-item" to="/contact/examples">
                  Form Examples
                </Link>
              </div>
            </div> */}
            <div className="navbar-end menu has-text-centered">
              <div className="menu-list" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a
                  className="navbar-item"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon size="lg" icon={faFacebook} />
                </a>
                <a
                  className="navbar-item"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon size="lg" icon={faInstagram} />
                </a>
                <a
                  className="navbar-item"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon size="lg" icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
