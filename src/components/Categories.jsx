import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import AllStates from '../GlobalStates/AllState'
import { Roll } from "react-reveal"
function Categories() {
    const [cat, setCat] = useState([])
    const { data, setCurrentCate, setSearchData } = AllStates()
    useEffect(() => {
        data.map((ele) => {
            setCat((prev) => Array.from(new Set([...Array.from(prev), ele.category])))
        })
    }, [data])
    return (
        <Row className='my-2' >
            <Col xm="12" className='d-flex justify-content-center' >
                <div className='d-flex justify-content-center'>
                    <Roll>
                        <button style={{ border: "1px solid #b45b35" }}
                            className='btn m-2 py-1 px-4'
                            onClick={() => { setCurrentCate("All"); setSearchData(null) }}>
                            All
                        </button>
                    </Roll>
                    {
                        cat.map((ele) => (
                            <Roll>
                                <button key={ele} style={{ border: "1px solid #b45b35" }}
                                    className='btn m-2 py-1 px-4'
                                    onClick={() => { setCurrentCate(ele); setSearchData(null) }}
                                >
                                    {ele}
                                </button>
                            </Roll>
                        ))
                    }

                </div>
            </Col>
        </Row>
    )
}

export default Categories