import React from 'react';

class Panel extends React.Component {
    render() {
        return (
            <div class="row">
                <div className="col-xl-12 col-md-12">
                    <div className="widget widget-stats bg-blue">
                        <div className="row">
                            <div className="col-xl-1 col-md-1">
                                <div className="stats-icon"> <i className="fa fa-box text-sucess"></i></div>
                            </div>
                            <div className="col-xl-10 col-md-10">
                               <h3 className="text-white text-left">Manage Shipments</h3>
                            </div>
                            <div className="col-xl-1 col-md-1">
                               <h3 className="text-white">1523</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
};

export default Panel;
