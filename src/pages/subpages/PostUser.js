import React, {Component, Fragment} from 'react';
import {
    Container,
    Card
} from 'reactstrap';
import Header from '../../component/Header';
import SubHeader from './SubHeader';
import ShowPost from '../../component/ShowPost';
class PostUser extends Component{
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
                    <SubHeader/>
                    <Card style={style.card}>
                        <ShowPost/>
                    </Card>
                </Container>
            </Fragment>
        )
    }
}
export default PostUser;