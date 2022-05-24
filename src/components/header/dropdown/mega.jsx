import React from 'react';
import { Link } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Collapse } from 'reactstrap';

class DropdownMegaMenu extends React.Component {
	render() {
		return (
			<Collapse className="collapse d-md-block me-auto" >
				<div className="navbar-nav">
					<UncontrolledDropdown className="navbar-item dropdown flex-1">
						<DropdownToggle tag="a" className="navbar-link dropdown-toggle d-flex align-items-center">
							<span className="d-lg-inline d-md-none text-gray-500">Create New</span>
							<b className="fa fa-chevron-down fa-fw text-gray-500"></b>
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem><i className="fa fa-suitcase fa-fw me-1"></i>New Project</DropdownItem>
							<DropdownItem><i className="fa fa-user fa-fw me-1"></i>Create Users</DropdownItem>
							<DropdownItem><i className="fa fa-chart-column fa-fw me-1"></i>Revenue Report</DropdownItem>
							<DropdownItem> <i className="fa fa-gear fa-fw me-1"></i>Settings</DropdownItem>
							<DropdownItem divider />
							<DropdownItem><i className="fa fa-headphones fa-fw me-1"></i>Help & Support</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>

					<UncontrolledDropdown tag="div" className="navbar-item dropdown dropdown-lg flex-1">
						<DropdownToggle tag="a" className="navbar-link dropdown-toggle d-flex align-items-center">
							<span className="d-lg-inline d-md-none text-gray-500">Mega Menu</span>
							<b className="fa fa-chevron-down fa-fw text-gray-500"></b>
						</DropdownToggle>
						<DropdownMenu className="dropdown-menu-lg">
							<div className="row">
								<div className="col-lg-3 col-md-3">
									<div className="h5 fw-bolder mb-2">EXAMPLE</div>
									<div className="row mb-3">
										<div className="col-lg-6">
											<ul className="nav d-block fw-bold">
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Option 1</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Option 2</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Option 3</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Option 4</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Option 5</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Option 6</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Option 7</Link></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-3">
									<div className="h5 fw-bolder mb-2">Applications</div>
									<div className="row">
										<div className="col-lg-6">
											<ul className="nav d-block fw-bold">
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> eCommerce</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> CRM Pages</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Email</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Calendar</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Team Contacts</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Task Board</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Email Templates</Link></li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-lg-3 col-md-3">
									<div className="h5 fw-bolder mb-2">Extra Pages</div>
									<div className="row">
										<div className="col-lg-6">
											<ul className="nav d-block fw-bold">
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Page 1</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Page 2</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Page 3</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Page 4</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Page 5</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Page 6</Link></li>
												<li><Link to="/page-option/with-mega-menu" className="text-ellipsis text-gray-800 text-decoration-none"><i className="fa fa-chevron-right fa-fw text-gray-500"></i> Page 7</Link></li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-lg-3 col-md-3 fw-bold">
									<div className="h5 fw-bolder mb-2">Paragraph</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero purus, fermentum at libero convallis, auctor dignissim mauris. Nunc laoreet pellentesque turpis sodales ornare. Nunc vestibulum nunc lorem, at sodales velit malesuada congue. Nam est tortor, tincidunt sit amet eros vitae, aliquam finibus mauris.
									</p>
									<p>
										Fusce ac ligula laoreet ante dapibus mattis. Nam auctor vulputate aliquam. Suspendisse efficitur, felis sed elementum eleifend, ipsum tellus sodales nisi, ut condimentum nisi sem in nibh. Phasellus suscipit vulputate purus at venenatis. Quisque luctus tincidunt tempor.
									</p>
								</div>
							</div>
						</DropdownMenu>
					</UncontrolledDropdown>

				</div>
			</Collapse>
		)
	}
}

export default DropdownMegaMenu;
