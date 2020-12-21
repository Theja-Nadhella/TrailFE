import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="App-header">
                    <div><b>TIME CARD SERVICE</b></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent