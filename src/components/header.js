import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            curPage: 'main'
        }
    }
    
    render(){
        return (<>
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{background: "#4B0082"}}>
            <Navbar.Brand href="#home">Ainize</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                {/* <Link to={"/maskdetection"} style={{color : "white" ,padding : "10px"}}>Home</Link> */}
                <Link to={"/maskdetection"} style={{color : "white" ,padding : "10px"}}>MaskDetection</Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                {/* <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
        )
    }
}
export default Header