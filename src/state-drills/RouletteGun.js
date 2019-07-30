import React, { Component } from 'react';

class RouletteGun extends Component {
    constructor(props) {
        super(props)
        this.state = { chamber: null, spinningTheChamner: true}
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleClick = () => {
        this.setState({
          spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
          const randomChamber = Math.ceil(Math.random() * 8)
    
          this.setState({
            chamber: randomChamber,
            spinningTheChamber: false,
          })
        }, 2000)
      }
    
    renderDisplay() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    return (spinningTheChamber ? 
        'spinning the chamber and pulling the trigger! ...' : (
            chamber === bulletInChamber ? 'BANG!!!!!' : 'You\'re safe!'
        ))
    }

    render() {
    return (
        <div className='RouletteGun'>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>
            Pull the trigger!
        </button>
        </div>
    )
    }
}

export default RouletteGun;