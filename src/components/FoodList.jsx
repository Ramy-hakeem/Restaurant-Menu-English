import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AllStates from '../GlobalStates/AllState'
import CardFood from './Card'
export default function FoodList() {
    const { data, currentCate, searchData } = AllStates()
    console.log(searchData)
    return (
        <Row className='mb-3'>
            <Col sm="12" className=' color-body mb-5'>

                {
                    searchData ? data.filter((ele) => ele.title.match(new RegExp(searchData, "i"))).map((ele) => (
                        <CardFood id={ele.id} img={ele.imgUrl} title={ele.title} price={ele.price} />
                    ))
                        :
                        currentCate === "All" ? (
                            data.length >= 1 ? (
                                data.map((ele) => (
                                    <CardFood id={ele.id} img={ele.imgUrl} title={ele.title} price={ele.price} />
                                ))
                            ) : (
                                <h1>No food available now</h1>
                            )
                        ) : (
                            data.filter((ele) => ele.category === currentCate)
                                .map((ele) => (
                                    <CardFood id={ele.id} img={ele.imgUrl} title={ele.title} price={ele.price} />
                                ))
                        )
                }
            </Col>
        </Row >
    )
}
