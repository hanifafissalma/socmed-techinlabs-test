import React, {Component, Fragment} from 'react';
import Header from '../component/Header';
import ShowPost from '../component/ShowPost';
import{
    Container,
    Card,
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap';
import {connect} from 'react-redux';
import {addPost} from '../api/post';
var serialize = require('form-serialize');
class Home extends Component{
    handleSubmit(e){
        e.preventDefault();
        var form = document.querySelector('#post');
        var obj = serialize(form, { hash: true });
        this.props.addPost(obj);
    }
    render(){
        const style={
            container:{
                marginTop:20,
                padding:20
            },
            card:{
                padding: 20
            }
        }
        return(
            <Fragment>
                <Header/>
                <Container style={style.container}>
                    <Card style={style.card}>
                        <h5>Post About You</h5>
                        <Form id="post" onSubmit={(e)=>this.handleSubmit(e)}>
                            <FormGroup>
                                <Input type="hidden" name="userId" placeholder="1" required />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="title" placeholder="title?" required />
                            </FormGroup>
                            <FormGroup>
                                <Input type="textarea" name="body" placeholder="What do you think?" required />
                            </FormGroup>
                            <Button form="post" color="info">Post</Button>
                        </Form>
                        <br/>
                        <ShowPost/>
                    </Card>
                </Container>
            </Fragment>
        )
    }
}
  
const mapDispatchToProps = dispatch => ({
    addPost: (input) => dispatch(addPost(input))
})
  
export default connect(null, mapDispatchToProps)(Home)