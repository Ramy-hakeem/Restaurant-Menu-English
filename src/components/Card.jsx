import React from 'react'
import { Card } from 'react-bootstrap'
import { Zoom } from 'react-reveal'

function CardFood({ id, img, title, price }) {
    return (
        <Zoom>


            <Card key={id} className="d-flex flex-row p-2 mb-2">
                <Card.Img className="img-item" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="d-flex align-items-center justify-content-between">
                        <p className="item-title">{title}</p>
                        <p className="item-price"> {price} &pound;</p>
                    </Card.Title>
                    <Card.Text>
                        <p className="item-description">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Zoom>
    )
}

export default CardFood