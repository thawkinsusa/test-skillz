import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            property: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    };

    handleChange = (e) => {
        let { name, value } = e.target
        console.log('handlechange', this.handleChange)
        this.setState({ [name]: value })
    };

    clear = () => {
        this.setState({
            property: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        })
    }

    saveHouse = () => {
        let { property,
            address, 
            city,
            state,
            zipcode } = this.state
        axios.post("/api/houses", { property, address, city, state, zipcode }).then(res => {
            this.props.componentDidMount()
        })
        // this.clear()
    }
  
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
                    <p>Property Name:<input value={this.state.property} onChange={(e)=>this.handleChange(e)} name='property'/></p>
                    <p>Address:<input value={this.state.address} onChange={(e)=>this.handleChange(e)}  name='address'/></p>
                </div>
                <div className='wizard-lower-three'>
                    <p>city:<input value={this.state.city} onChange={(e)=>this.handleChange(e)} name='city' /></p>
                    <p>State:<input value={this.state.state} onChange={(e)=>this.handleChange(e)} name='state'/></p>
                    <p>Zipcode:<input value={this.state.zipcode} onChange={(e)=>this.handleChange(e)} name='zipcode' /></p>
                </div>
                <button className="cancel-button" onClick={this.clear}>Cancel</button>
                <button className="add-button" onClick={this.saveHouse}>Add House</button>
            </div>
        )
    }

}

export default Wizard