import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Wizard extends Component {
    constructor(props) {
        super(props)
    };
    
    render() {
        return (
            <div className="wizard-container">
                <div className='wizard-top'>
                    Add New Property Listing
                <button>
                <Link to='/'>cancel</Link>
                </button>
                </div>
                <div className='wizard-edit'>
                <p>Property Name</p>
                <p>Address</p>
                </div>
                <div className='wizard-lower-three'>
                    <p>City</p>
                    <p>State</p>
                    <p>Zip</p>
                </div>
                    <div className='wizard-lower-button'><button>Complete</button></div>
            </div>
        )
    }

}

export default Wizard