import React, { Component } from 'react'
import Loginbutton from './component/Loginbutton';
import './Loginpage.css'

export class Loginpage extends Component {
    render() {
        return (
            <div>
                <span className='btn'><Loginbutton /></span>
                <Loginbutton>Re</Loginbutton>
                
            </div>
        )
    }
}

export default Loginpage
