import React from 'react'
import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { label } from './Selects'

const Horarios = () => {

    return (
        <div>
            <select className="custom-select d-inline-block" style={{height: "50px" }}>
                <option defaultValue> {label}</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select> 
        </div>
    )
}

export default Horarios
