import React, { useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AllStates from '../GlobalStates/AllState';
function NavBar() {
    const [search, setSearch] = useState()
    const { setSearchData } = AllStates()
    const searchHandler = (e) => {
        e.preventDefault()
        setSearchData(search)
        setSearch("")
    }
    const toHome = () => {
        setSearchData("")
    }
    return (
        <Navbar expand="lg" bg='dark' variant='dark'>
            <Container >
                <Navbar.Brand href="/">
                    <div className='brand-color' onClick={toHome}>MENUE</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="me-2 "
                            onChange={(e) => { setSearch(e.target.value) }}
                            value={search}
                        />
                        <button className='btn-search' onClick={searchHandler}>Search</button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar