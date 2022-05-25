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
					<img src="../assets/img/user/reactjs.png" width="20%"  alt="" /> 

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
