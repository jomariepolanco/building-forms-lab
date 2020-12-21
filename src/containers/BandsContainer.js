import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map(band => <li>{band.name}</li>)
  }


  render() {
    console.log(this.props.bands)
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const msp = state => {
  return {
    bands: state.bands
  }
}

const mdp = dispatch => ({
  addBand: band => dispatch({type: 'ADD_BAND', band})
})

export default connect(msp, mdp)(BandsContainer)
