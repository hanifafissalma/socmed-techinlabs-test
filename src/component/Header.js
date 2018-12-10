import React, {Component, Fragment} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import {Link} from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        const style={
            header:{
                backgroundColor:'#15a6b4'
            },
            brand:{
                color:'black',
                fontWeight: 'bold'
            }
        }
        return(
            <Fragment>
                <Navbar style={style.header} expand="md">
                    <NavbarBrand href="/" style={style.brand}>Socmed</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/"><Button color="info">Home</Button></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/list_friends"><Button color="info">List of Friends</Button></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Fragment>
        )
    }
}
export default Header;