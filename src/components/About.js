import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="container-fluid">
            
              <h1 className="text-center text-capitalize pt-4">about us</h1>
              <hr className="w-25 mx-auto pt-4"></hr>  

                  <div className="row mb-5" >
              <div className="col-lg-6 col-md-6 col-12">
                  <img className="img-fluid" src="https://cbsla.files.wordpress.com/2013/10/palm-trees-wind.jpg?w=1500" />
              </div>  
              
               <div className="col-lg-6 col-md-6 col-12">
                   <h1>Who am I?</h1>
                   <hr/>
                   <p> Wind is the flow of gases on a large scale. On the surface of the Earth, wind consists of the bulk movement of air.
                        In outer space, solar wind is the movement of gases or charged particles from the Sun through space, 
                        while planetary wind is the outgassing of light chemical elements from a planet's atmosphere into space.
                         Winds are commonly classified by their spatial scale, their speed, the types of forces that cause them,
                          the regions in which they occur, and their effect. The strongest observed winds on a planet in the Solar System occur on Neptune and Saturn. Winds have various aspects: velocity (wind speed); the density of the gas involved; energy content or wind energy. Wind is also an important means of transportation for seeds and small birds; with time things can travel thousands of miles in the wind.  
                   </p>
                  <button className='btn bg-primary text-white'>This Is Shoew</button>
              </div>
                  
            </div>

            </div>
        )
    }
}
