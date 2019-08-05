import React, { Component } from 'react'
import logo from '../logo.png'
import CarouselSlider from './CarouselSlider'
import MediaObject from './MediaObject'
import TableDemo from './TableDemo'
import About from './About'
import Services from './Services'
import Contacts from './Contacts'
import Gallery from './Gallery'
import Join from './Join'
import ContatUsForm from './ContatUsForm'
import Footer from './Footer'


export default class Navigation extends Component {
    render() {
        return (
           <div>
         
           <nav className="navbar navbar-expand-sm fixed-top navbar-light" style={{"background-color":'#00b9d7'}} >
           <div className="container">
              <a href="#" className="navbar-brand text-white">
                  <img src={logo} alt="" height='50' width='50'/> PopWood</a>
                  
                   <button className="navbar-toggler" data-toggle="collapse" data-target="#navbaraid">
                      <span className="navbar-toggler-icon"></span>

                   </button>
                     
                   <div className="collapse navbar-collapse" id="navbaraid">  
                    <ul className="navbar-nav text-left ml-auto ">
                            <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link ">Service</a></li>
                            <li className="nav-item"><a href="#" className="nav-link ">About</a></li>
                            <li className="nav-item"><a href="#" className="nav-link ">Contact</a></li>
                    </ul>
                    </div>
              </div>
          
           </nav>
           <CarouselSlider/>
           <About/>
           <Services/>
           <Contacts/>
           <Gallery/>
           <Join/>
           <ContatUsForm/>
           <Footer/>
     
           </div> 
        )
    }
}
