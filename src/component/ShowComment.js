import React, {Component, Fragment} from 'react';
import {
    Card,
    CardSubtitle,
    CardText,
    Button,
    Row,
    Col,
} from 'reactstrap';
class ShowComment extends Component{
    render(){
        const subcard = {
            padding:20,
            fontSize:14,
            margin:20
        }
        const {name, email, body} = this.props;
        return(
            <Fragment>
                <Row >
                    <Col sm={{ size: 10, offset: 1 }}>
                        <Card style={subcard}>
                            <h5>{name}</h5>
                            <CardSubtitle>{email}</CardSubtitle>
                            <CardText>{body}</CardText>
                            <div style={{justifyContent:'flex-end', display:'flex'}}>
                                <Button color="warning" size="sm">Edit</Button>
                                <Button color="danger" size="sm" >Delete</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
export default ShowComment;