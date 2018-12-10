import React, {Component, Fragment} from 'react';
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardText,
    Form,
    FormGroup,
    Input,
    Button,
    Row,
    Col,
} from 'reactstrap';
class PostDetail extends Component{
    render(){
        const style={
            card:{
                padding:20
            },
            subcard:{
                padding:20,
                fontSize:14
            }
        }
        return(
            <Fragment>
                <Card style={style.card}>
                    <div style={{justifyContent:'flex-end', display:'flex'}}>
                        <Button color="warning" size="sm">Edit</Button>
                        <Button color="danger" size="sm" >Delete</Button>
                    </div>
                    <CardTitle>Username</CardTitle>
                    <br/>
                    <CardSubtitle>Title</CardSubtitle>
                    <CardText>isi postnya disini</CardText>
                    <hr/>
                    <Row>
                        <Col sm={{ size: 10, offset: 1 }}>
                            <Card style={style.subcard}>
                                <h5>Username</h5>
                                <CardSubtitle>Title Comment</CardSubtitle>
                                <CardText>isi komennya disini</CardText>
                                <div style={{justifyContent:'flex-end', display:'flex'}}>
                                    <Button color="warning" size="sm">Edit</Button>
                                    <Button color="danger" size="sm" >Delete</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <hr/>
                    <h6>Comment</h6>
                    <Form id="comment">
                        <FormGroup>
                            <Input type="text" name="title_comment" placeholder="Type your title of comment here" required />
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" name="comment" placeholder="Type your comment here" required/>
                        </FormGroup>
                        <Button color="info" size="sm" form="comment">Add Comment</Button>
                    </Form>
                </Card>
            </Fragment>
        )
    }
}
export default PostDetail;