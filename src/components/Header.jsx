import React from 'react'
import { Row } from 'react-bootstrap'

function Header() {
    return (
        <Row >
            <div className='title text-center'>PRO Resturant </div>
            <div className='d-flex justify-content-center' >
                <div className='underline'></div>
            </div>
        </Row>
    )
}

export default Header