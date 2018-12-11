import React, {Component, Fragment} from 'react';
import {
    Container,
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
import Header from '../../component/Header';
import {connect} from 'react-redux';
import {fetchPostDetail} from '../../api/post.js';
class PostDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            post:[]
        };
    }
    componentDidMount(){
        const {match} = this.props;
        this.props.fetchPostDetail(match.params.id);
    }
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
        const {post}=this.props;
        return(
            <Fragment>
                <Header/>
                <Container>
                    {/* <SubHeader/> */}
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
                </Container>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    post: state.post.post,
})
  
const mapDispatchToProps = dispatch => ({
    fetchPostDetail: (id) => dispatch(fetchPostDetail(id)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)