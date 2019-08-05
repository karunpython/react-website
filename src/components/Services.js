import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">Services</h1>
                <hr className="w-25 mx-auto" ></hr>

                <div className="row mb-5 pt-4 text-center">

                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card" >
                            <img className="card-img-top w-100" height="200px" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/0CE4/production/_106000330_prestwickweather.jpg" />
                            <div className="card-body">
                                <h4 className="card-title">Storm Gareth advances with floods and 75mph winds</h4>
                                <p className="card-text">The Met Office warned of continued travel disruption until 15:00 covering much of the west coast.
                                      BBC Scotland Weather said winds rgyll and Bute, Central, Dumfries and Galloway, Scottish Borders, Skye and Lochaber, Tayside, West Central Scotland and Western Isles.</p>
                                <a href="" className="btn btn-primary">See Profile</a>    
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card" >
                            <img className="card-img-top w-100" height="200px" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/0CE4/production/_106000330_prestwickweather.jpg" />
                            <div className="card-body">
                                <h4 className="card-title">Storm Gareth advances with floods and 75mph winds</h4>
                                <p className="card-text">The Metected many parts with alerts in place in southern and western areas.
                                      Sepa put out flood alerts for nine areas: Ayrshire and Arran, Argyll and Bute, Central, Dumfries and Galloway, Scottish Borders, Skye and Lochaber, Tayside, West Central Scotland and Western Isles.</p>
                            
                                      <a href="" className="btn btn-primary">See Profile</a> 
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card" >
                            <img className="card-img-top w-100" height="200px" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/0CE4/production/_106000330_prestwickweather.jpg" />
                            <div className="card-body">
                                <h4 className="card-title">Storm Gareth advances with floods and 75mph winds</h4>
                                <p className="card-text">The Met Office warned of continued travel disruption until 15:00 covering much of the west coast.
                                      BBC Scotland Weather said, Argyll and Bute, Central, Dumfries and Galloway, Scottish Borders, Skye and Lochaber, Tayside, West Central Scotland and Western Isles.</p>
                                      <a href="" className="btn btn-primary">See Profile</a> 
                            </div>
                        </div>
                    </div>

                </div>
           
            </div>
        )
    }
}
