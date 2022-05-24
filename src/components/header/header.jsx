import React from 'react';
import DropdownNotification from './dropdown/notification.jsx';
import DropdownLanguage from './dropdown/language.jsx';
import DropdownProfile from './dropdown/profile.jsx';
import SearchForm from './search/form.jsx';
import DropdownMegaMenu from './dropdown/mega.jsx';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.toggleAppHeaderMegaMenuMobile = this.toggleAppHeaderMegaMenuMobile.bind(this);
		this.state = {
			appHeaderMegaMenuMobile: false,
			expand: false,
		};

	}

	toggleExpand = (e) => {
		e.preventDefault();
		this.setState(state => ({
			expand: !this.state.expand
		}));
	}

	toggleAppHeaderMegaMenuMobile() {
		this.setState({ appHeaderMegaMenuMobile: !this.state.appHeaderMegaMenuMobile });
	}
	render() {
		return (
			<div className='theme-panel'>

				<div id="header" className='app-header'>
					<div className="navbar-header">
						<button type="button" className="navbar-mobile-toggler" onClick={this.toggleAppHeaderMegaMenuMobile}>
							<span className="fa-stack fa-lg text-inverse">
								<i className="far fa-square fa-stack-2x"></i>
								<i className="fa fa-cog fa-stack-1x"></i>
							</span>
						</button>
					</div>

					<DropdownMegaMenu collapse={this.state.appHeaderMegaMenuMobile} />
					
					<div className="navbar-nav">
						<SearchForm />
						<DropdownNotification />
						<DropdownLanguage />
						<DropdownProfile />
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
