import React, { Component } from 'react'
import { Link } from "react-router-dom";
import House from '../House/House'
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
    };

    componentDidUpdate(prevProps, prevState) {
        offscreenBuffering(prevProps.product !== this.state.houses){
            this.setState({
                houses: this.props.houses
            })
            this.render()
        }
    }

    render() {
        console.log(this.state.inventory)
        const mappedHouses = this.state.houses.length ? this.state.houses.map(house => {
            return <House house={house} key={house.id} updateHouses={this.props.updateHouses} />
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