import React, { Component } from 'react'

export default class Join extends Component {
    render() {
        return (
            <div className="container-fluid bg-primary mb-5">
                <article className="py-5" >
                    <div className="text-center text-white">
                    <h3 className="display-4">Want To Join</h3>
                    <p>Be a part of medicine</p>
                    <button className="btn btn-warning" data-toggle="modal" data-target="#myModal">Join Now</button>
                    </div>

                    <div className="modal fade" id="myModal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                               <div className="modal-header">
                                 <h3 className="modal-title">SignUp</h3>
                                 <button type="button"  className="close" data-dismiss="modal">&times;</button>
                               </div>

                               <div className="modal-body">
                                      
                                      <form>
                                         <div className="form-group">
                                            <label for="email">Email address:</label>
                                            <input type="email"  className="form-control" id="email"/>
                                         </div>

                                         <div className="form-group">
                                            <label for="pwd">Password:</label>
                                            <input type="password"  className="form-control" id="pwd"/>
                                         </div>

                                         <button className="btn btn-primary">Submit</button>

                                      </form>

                                   </div> 

                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>    

                            </div>
                        </div>
                    </div>


                </article>
            </div>
        )
    }
}
