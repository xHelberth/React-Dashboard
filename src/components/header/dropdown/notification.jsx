import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownNotification extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
  
	render() {
		return (
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="navbar-item dropdown" tag="div">
				<DropdownToggle className="navbar-link dropdown-toggle icon" tag="a">
					<i className="fa fa-bell text-gray"></i>
					<span className="badge bg-danger rounded-pill ms-auto pb-4px">9</span>
				</DropdownToggle>
				<DropdownMenu className="dropdown-menu media-list dropdown-menu-end" end tag="div">
					<DropdownItem className="dropdown-header" tag="div" header>NOTIFICATIONS (9)</DropdownItem>
					<DropdownItem className="dropdown-item media">
						<div className="media-left">
							<i className="fa fa-bug media-object bg-gray-500"></i>
						</div>
						<div className="media-body">
							<h6 className="media-heading">Server Error Reports <i className="fa fa-exclamation-circle text-danger"></i></h6>
							<div className="text-muted fs-10px">3 minutes ago</div>
						</div>
					</DropdownItem>
					<DropdownItem className="dropdown-item media">
						<div className="media-left">
							<i className="fa fa-plus media-object bg-gray-500"></i>
						</div>
						<div className="media-body">
							<h6 className="media-heading"> New User Registered</h6>
							<div className="text-muted fs-10px">1 hour ago</div>
						</div>
					</DropdownItem>
					<DropdownItem className="dropdown-item media">
						<div className="media-left">
							<i className="fa fa-envelope media-object bg-gray-500"></i>
						</div>
						<div className="media-body">
							<h6 className="media-heading"> New Email From Rachel</h6>
							<div className="text-muted fs-10px">2 hour ago</div>
						</div>
					</DropdownItem>
					<DropdownItem className="dropdown-item text-center text-primary notify-item notify-all">
						View more
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
};

export default DropdownNotification;
