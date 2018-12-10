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
import {connect} from 'react-redux';
import {fetchAllPost} from '../api/post.js';
import {fetchAllComment} from '../api/comment.js';
class ShowPost extends Component{
    constructor(props){
        super(props);
        this.state={
            post:[],
            comment:[]
        }
    }
    componentDidMount(){
        this.props.fetchAllPost();
        this.props.fetchAllComment(1);
    }
    render(){
        const style={
            card:{
                padding:20,
                margin:20
            },
            subcard:{
                padding:20,
                fontSize:14,
                margin:20
            }
        }
        const {post, user, comment} = this.props;
        return(
            <Fragment>
                {post.map((post,index)=>
                    <Card style={style.card} key={index}>
                        <div style={{justifyContent:'flex-end', display:'flex'}}>
                            <Button color="primary" size="sm">Show Details</Button>
                            <Button color="warning" size="sm">Edit</Button>
                            <Button color="danger" size="sm" >Delete</Button>
                        </div>
                        <CardTitle>{post.userId}</CardTitle>
                        <br/>
                        <CardSubtitle>{post.title}</CardSubtitle>
                        <CardText>{post.body}</CardText>
                        <hr/>
                        {comment.map((comment,index)=>
                            <Row key={index}>
                                <Col sm={{ size: 10, offset: 1 }}>
                                    <Card style={style.subcard}>
                                        <h5>{comment.name}</h5>
                                        <CardSubtitle>{comment.email}</CardSubtitle>
                                        <CardText>{comment.body}</CardText>
                                        <div style={{justifyContent:'flex-end', display:'flex'}}>
                                            <Button color="warning" size="sm">Edit</Button>
                                            <Button color="danger" size="sm" >Delete</Button>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        )}
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
                )}
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    post: state.post.post,
    user: state.user.user,
    comment: state.comment.comment
  })
  
const mapDispatchToProps = dispatch => ({
    fetchAllPost: () => dispatch(fetchAllPost()),
    fetchAllComment: (id) => dispatch(fetchAllComment(id))
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(ShowPost)