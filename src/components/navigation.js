import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SideNav from '../components/SideNav'

const openMenu = () => {

    document.getElementsByClassName('openMenu')[0].style.visibility = "hidden"

    document.getElementsByClassName('sidenav')[0].classList.add('open');

}

const Header = ({ siteTitle }) => (
  
    <div className="navigation-container">
        <div className="logo"><Link activeClassName="active" to="/">PAUL TOMLINSON</Link></div>
        <ul className="navigation desktop">
          <li><Link activeClassName="active" to="/">Home</Link></li>
          <li><Link activeClassName="active" to="/about/">About</Link></li>
          <li><Link activeClassName="active" to="/skills/">Skills</Link></li>
          <li><Link activeClassName="active" to="/portfolio/">Portfolio</Link></li>
          {/*<li><li><Link activeClassName="active" to="/contact/">Contact</Link></li></li>*/}
          <li>
            <a href="mailto:paul@javascripting.uk"><StaticImage
              src="../images/email.png"
              width={20}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Paul Tomlinson"
              style={{ marginTop: `0.05rem` }}
            /></a>
          </li>
           <li>
            <a rel="noreferrer" target="_blank" href="http://uk.linkedin.com/in/paulrtomlinson/"><StaticImage
              src="../images/linkedin.png"
              width={20}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Paul Tomlinson"
              style={{ marginTop: `0.05rem` }}
            /></a>
          </li>
           <li>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/paultommmo"><StaticImage
              src="../images/twitter.png"
              width={20}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Paul Tomlinson"
              style={{ marginTop: `0.1rem` }}
            /></a>
          </li>

        </ul>  

        <div className="navigation mobile" role="button" tabIndex={0} onClick={openMenu} onKeyDown={openMenu}>

          <svg className="openMenu" width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="27" height="3" fill="#333"/>
              <rect y="7" width="27" height="3" fill="#333"/>
              <rect y="14" width="27" height="3" fill="#333"/>
            </svg>

        </div>

        <SideNav />
       
    </div>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
