import React from 'react';

class SmallCard extends React.Component {
    render() {
        return (
            <div className="col-xl-2 col-md-6">
                <div className="widget widget-stats bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <div className="stats-icon"><i className={this.props.className}></i></div>
                        </div>
                        <div class="col-md-6">
                            <div className="stats-info">

                                <p class="text-dark my-1">{this.props.cost}</p>
                                <h4>{this.props.name}</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
};

export default SmallCard;
