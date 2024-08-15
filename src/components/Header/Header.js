import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet, Link } from "react-router-dom";

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {actionCreators} from '../../state/index' ;
import {useDispatch, useSelector} from 'react-redux';



const Header= (props) => {
  const dispatch = useDispatch();

  const theme = useSelector(state => {
    return state.theme = localStorage.getItem('theme');
  });

  const [isChecked, setIsChecked] =useState(true);

  const checkHandler = ()=>{
    setIsChecked(previousState => !previousState);
    isChecked ? dark() :light();
  }

  const dark = () =>{
    dispatch(actionCreators.ChangeTheme('dark'))
  }

  const light = () =>{
    dispatch(actionCreators.ChangeTheme('light'))
  }
  const userLogin = true;
        return <>
    <Navbar collapseOnSelect  expand="lg" className= {theme ==='light' ? 'bg-primary':'bg-body-tertiary'}>
      <Container>
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link > <Link to="/" className="text-decoration-none text-dark">Home</Link></Nav.Link>
            <Nav.Link ><Link className="text-decoration-none text-dark" to="/section2">Table & List</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item ><Link to="/section1">Section1</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/count">Count</Link></NavDropdown.Item>

              <NavDropdown.Item >
              <Link to="/section2">Section2</Link>
              </NavDropdown.Item>
              <NavDropdown.Item ><Link to="/timer">Timer</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <Link to="/form">Form</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link > <Link to="/loader" className="text-decoration-none text-dark">Axios with Loader</Link></Nav.Link>
            <Nav.Link > <Link to="/reducer" className="text-decoration-none text-dark">Reducer</Link></Nav.Link>
            <Nav.Link > <Link to="/usereference" className="text-decoration-none text-dark">useRef</Link></Nav.Link>
            <Nav.Link > <Link to="/customHook" className="text-decoration-none text-dark">CustomHook</Link></Nav.Link>

          </Nav>
          <Nav>
            {userLogin ?
            <Nav.Link href="#deets">Hey ashis </Nav.Link>:
            <Nav.Link href="#deets">Login</Nav.Link>
            }
          </Nav>
        
        
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={checkHandler} value={isChecked}/>
            <label className="form-check-label">switch </label>
          </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    
        </>
    
}

export default Header;