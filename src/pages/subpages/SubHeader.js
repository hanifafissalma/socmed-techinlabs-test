import React, {Component, Fragment} from 'react';
import { 
    Nav, 
    NavItem,
    NavLink,
    Col,
    Row
} from 'reactstrap';
class SubHeader extends Component{
    render(){
        return(
            <Fragment>
                <Row>
                    <Col sm={{ size: 4, offset: 5 }}>
                        <Nav>
                            <NavItem>
                                <NavLink href="#">Post</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Album</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
                <hr/>
            </Fragment>
        )
    }
}
export default SubHeader;