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
} from 'reactstrap';
import ShowComment from './ShowComment';
import {connect} from 'react-redux';
import {fetchAllPost} from '../api/post.js';
import {fetchAllComment} from '../api/comment.js';
import {Link} from 'react-router-dom';
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
            }
        }
        const {post, user, comment} = this.props;
        return(
            <Fragment>
                {post.map((post,index)=>
                    <Card style={style.card} key={index}>
                        <div style={{justifyContent:'flex-end', display:'flex'}}>
                            <Link to={`/post/${post.id}`}><Button color="primary" size="sm">Show Details</Button></Link>
                            <Button color="warning" size="sm">Edit</Button>
                            <Button color="danger" size="sm" >Delete</Button>
                        </div>
                        <CardTitle>{post.userId === user.id ? user.name : null}</CardTitle>
                        <br/>
                        <CardSubtitle>{post.title}</CardSubtitle>
                        <CardText>{post.body}</CardText>
                        <hr/>
                        {comment.map((comment,index)=>
                            <ShowComment
                                key={index}
                                name={comment.name}
                                email={comment.email}
                                body={comment.body}
                            />
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
    fetchAllComment: (id) => dispatch(fetchAllComment(id)),
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(ShowPost)