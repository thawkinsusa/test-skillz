import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Wizard extends Component {
    constructor() {
        super()
        this.state={
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    };

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
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
                <p>Property Name:<input value={this.state.propertyName} onChange={this.handleChange}/></p>
                <p>Address:<input value={this.state.address} onChange={this.handleChange}/></p>
                </div>
                <div className='wizard-lower-three'>
                    <p>City:<input value={this.state.city} onChange={this.handleChange}/></p>
                    <p>State:<input value={this.state.state} onChange={this.handleChange}/></p>
                    <p>Zipcode:<input value={this.state.zipcode} onChange={this.handleChange}/></p>
                </div>
                    <div className='wizard-lower-button'><button>Complete</button></div>
            </div>
        )
    }

}

export default Wizard