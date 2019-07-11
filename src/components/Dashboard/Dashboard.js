import React, { Component } from 'react'
import { Link } from "react-router-dom";
import House from '../House/House'
import axios from 'axios';
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: [],
            housesMapped: []
        }
    };
    
    componentDidMount () {
    axios
     .get('/api/houses')
      .then(res => {
        console.log('res db response', res)
        this.setState({houses: res.data})
        console.log('houses data', this.state.houses)
      })
      }



    render() {
        console.log(this.state.inventory)
        const mappedHouses = this.state.housesMapped.length ? this.state.housesMapped.map(houses => {
            return <House houses={houses} key={houses.id} updateHouses={this.props.updateHouses} />
        }) : console.log('test false')
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