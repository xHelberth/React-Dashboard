import React from 'react';

class BigCard extends React.Component {
    render() {
        return (
            <div class="row">
                <div className="col-xl-12 col-md-6">
                    <div className="widget bg-white">
                        <div class="row">
                            <div class="col-md-2">
                                <h5 class="text-gray">Shipment Number</h5>
                                <h6 class="text-bold mt-3">1234512</h6>
                                <h5 class="text-gray">Freight Bill Number</h5>
                                <h6 class="text-bold mt-3">3232323</h6>
                                <h5 class="text-gray">Status</h5>
                                <h6 class="text-bold mt-3">NEW</h6>
                            </div>
                            <div class="col-md-2">
                                <h5 class="text-gray">Origin</h5>
                                <h6 class="text-bold mt-3">NO.18 XINGYU ROAD,KONGGANG NEW AREA,LONGWAN DISTRICT</h6>
                            </div>
                            <div class="col-md-2">
                                <h5 class="text-gray">Transportation Provider</h5>
                                <h6 class="text-bold mt-3">CH ROBHINSON</h6>
                                <h5 class="text-gray">Expected Ship Date</h5>
                                <h6 class="text-bold mt-3">05/05/2022</h6>
                                <h5 class="text-gray">Expected Ship Date</h5>
                                <h6 class="text-bold mt-3">05/05/2022</h6>
                            </div>
                            <div class="col-md-2">
                                <h5 class="text-gray">Destination</h5>
                                <h6 class="text-bold mt-3">NO.18 XINGYU DISTRICT</h6>
                            </div>
                            <div class="col-md-2">
                                <h5 class="text-gray">Terms</h5>
                                <h6 class="text-bold mt-3">Prepaid</h6>
                                <h5 class="text-gray">Total Weight</h5>
                                <h6 class="text-bold mt-3">6565</h6>
                                <h5 class="text-gray">QTry</h5>
                                <h6 class="text-bold mt-3">15</h6>
                            </div>
                            <div class="col-md-2">
                                <h5 class="text-gray">Cost</h5>
                                <h4 className="text-primary my-4 text-left">U$D 1500.25</h4>
                                <button class="btn btn-primary">Edit</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
};

export default BigCard;
