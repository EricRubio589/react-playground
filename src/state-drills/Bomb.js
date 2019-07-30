import React, { Component } from 'react';


class Bomb extends Component {
    constructor(props){
        super(props)
        this.state = { count: 0 }
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    counter() {
        const {count} = this.state
        return  (count >= 8 ? 'BOOM!!!' : (count % 2 === 0 ? 'tick' : 'tock'))
    }

    render() {
        return (
            <div>
                <p>{this.counter()}</p>
            </div>
        )
    }
}

export default Bomb;