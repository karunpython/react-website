import React, { Component } from 'react'

export default class Contacts extends Component {
    render() {
        return (
            <div className="container-fluid bg-primary">
                
               <article className="py-5 text-center text-white">
                   <div>
                      <h3 className="display-4">+91 8920828585</h3>
                      <p>If you want best services call us now.</p>
                       <button className="btn btn-warning">Contact Now</button>
                   </div>

               </article>

            </div>
        )
    }
}
