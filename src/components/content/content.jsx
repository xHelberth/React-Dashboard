import React from 'react';
import { withRouter } from 'react-router-dom';
import SmallCard from '../cards/small-card';
import BigCard from '../cards/big-card';
import Panel from '../cards/panel';

class Content extends React.Component {

	render() {
		return (
			<div className='app-content'>
				<div className="row">
					<SmallCard className={"fa fa-money text-primary"} cost={"15,002"} name={"Total Shipment"} />
					<SmallCard className={"fa fa-chart-column text-warning"} cost={"$65,033"} name={"Total Cost"} />
					<SmallCard className={"fa fa-chart-column text-warning"} cost={"$65,033"} name={"Consolidation"} />
					<SmallCard className={"fa fa-chart-column text-warning"} cost={"$65,033"} name={"Total Cost"} />
					<SmallCard className={"fa fa-chart-column text-warning"} cost={"$65,033"} name={"Total Cost"} />
					<SmallCard className={"fa fa-chart-column text-warning"} cost={"$65,033"} name={"Total Cost"} />
				</div>
				<div >
					<Panel />
				</div>
				<div >
					<BigCard />
					<BigCard />
					<BigCard />
				</div>


			</div>
		)
	}
}

export default withRouter(Content);