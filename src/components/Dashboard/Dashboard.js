import React, { Component } from 'react'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    };
    
    render() {
        return (
            <div className="dash">Dashboard
            <button>Add New Property</button>
            <div>
               <title>Home Listings</title>
               <div classname='home-info-container'>
                   <p>Property Name:</p>
                   <p>Address:</p>
                   <p>City:</p>
                   <p>State:</p>
                   <p>Zipcode:</p>
                   </div> 
            </div>
            </div>
        )
    }

}

export default Dashboard