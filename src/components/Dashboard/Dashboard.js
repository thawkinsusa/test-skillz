import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state={
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    };

    render() {
        return (
            <div className="dash-container">
                <div className='dash-top' >
                    <p className='dash-word'>Dashboard</p>
                    <button>
                        <Link to='/Wizard'>Add New Property
                </Link></button>
                </div>
                <hr className='hr'></hr>
                <div className='dash-home'>Home Listings</div>
                <div className='dash-info-container'>
                <div className='dash-info'>
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