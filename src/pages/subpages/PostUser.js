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
import {connect} from "react-redux";
import {fetchPostById} from '../../api/post';
import {fetchAllComment} from '../../api/comment';
import {Link} from 'react-router-dom';
class PostUser extends Component{
    constructor(props){
        super(props);
        this.state={
            post:[],
            comment:[]
        }
    }
    componentDidMount(){
        const { match } = this.props
        this.props.fetchPostById(match.params.id);
        this.props.fetchAllComment(match.params.id);
    }
    render(){
        const style={
            container:{
                marginTop:20,
                padding:20
            },
            card:{
                padding: 20,
                margin:20
            },
            subcard:{
                padding:20,
                fontSize:14,
                margin:20
            }
        }
        const {post,user, comment}=this.props;
        return(
            <Fragment>
                <Header/>
                <Container style={style.container}>
                    {post.map((post,index)=>
                        <Card style={style.card} key={index}>
                            <div style={{justifyContent:'flex-end', display:'flex'}}>
                                <Button color="warning" size="sm">Edit</Button>
                                <Button color="danger" size="sm" >Delete</Button>
                            </div>
                            <CardTitle>{post.userId === user.id ? user.name:null}</CardTitle>
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
                </Container>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    post: state.post.post,
    comment: state.comment.comment,
    user: state.user.user
  })
  
const mapDispatchToProps = dispatch => ({
    fetchPostById: (id) => dispatch(fetchPostById(id)),
    fetchAllComment: (id) => dispatch(fetchAllComment(id))
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(PostUser)