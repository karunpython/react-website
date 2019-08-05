import React, { Component } from 'react'

export default class ContatUsForm extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">Conatat Us</h1>
                <hr className="w-25 mx-auto pt-5" ></hr>

            <div className="w-50 mx-auto">
             <form>
               <div className="form-group">
                   <label for="name">Your Name:</label> 
                   <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
               </div>

               <div className="form-group">
                   <label for="email">Email address:</label> 
                   <input type="email" className="form-control" id="email" placeholder="Enter email id"/>
               </div>

               <div className="form-group">
                   <label for="mobile">Mobile No:</label> 
                   <input type="number" className="form-control" id="mobile" placeholder="Enter mobile number"/>
               </div>

               <div className="form-group">
                   <label for="area">Address:</label> 
                   <textarea className="form-control" id="area" placeholder="Enter Something about"/>
               </div>
               
               <button className="btn btn-primary">Submit</button>

             </form>
             </div>

            </div>
        )
    }
}
