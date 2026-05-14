import React, {Component} from 'react'
import { Link } from 'gatsby'

class SideNav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentPage: typeof window !== 'undefined' ? window.location.pathname : null,
			openSub: null
		}
	}
	toggleSub = name => this.setState({openSub : this.state.openSub === name ? null : name})
	closeMenu = () => {
		this.setState({openSub :  null})
		document.getElementsByClassName('sidenav')[0].classList.remove('open')

		document.getElementsByClassName('openMenu')[0].style.visibility = "visible"
	}
	render() {
		return (
			<div className='sidenav'>
				<div role='button' tabIndex={0} onClick={() => this.closeMenu()} onKeyDown={() => this.closeMenu()} className='close'>&times;</div>
				<div className='nav'>
					<ul>
						
					  <li><Link activeClassName="active" to="/">Home</Link></li>
			          <li><Link activeClassName="active" to="/about/">About</Link></li>
			          {/* <li><Link activeClassName="active" to="/skills/">Skills</Link></li> */}
			          <li><Link activeClassName="active" to="/portfolio/">Portfolio</Link></li>
			          <li><a href="mailto:hello@paultommo.com">Email</a></li>
			          <li><a rel="noreferrer" target="_blank" href="http://uk.linkedin.com/in/paulrtomlinson/">LinkedIn</a></li>
			          {/* <li><a rel="noreferrer" target="_blank" href="https://app.yunojuno.com/p/paul-r-tomlinson/">Yuno Juno</a></li> */}
			          <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/paultommmo">Instagram</a></li>

					</ul>

				</div>
			</div>
		)
	}
}
export default SideNav
