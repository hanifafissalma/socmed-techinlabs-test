import React, {Component, Fragment} from 'react';
import {
    Container,
    Card,
    CardImg,
    CardBody,
    CardTitle
} from 'reactstrap';
import Header from '../../component/Header';
import SubHeader from './SubHeader';
class Album extends Component{
    render(){
        const style={
            container:{
                marginTop:20,
                padding:20
            },
            card:{
                padding: 20,
                display:'flex',
                flexWrap:'wrap',
                flexDirection:'row'
            },
            album:{
                padding:10,
                margin:5,
                width:'30%',
                display:'flex', 
            }
        }
        return(
            <Fragment>
                <Header/>
                <Container style={style.container}>
                    <SubHeader/>
                    <Card style={style.card}>
                        <Card style={style.album}>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Album Title</CardTitle>
                            </CardBody>
                        </Card>
                    </Card>
                </Container>
            </Fragment>
        )
    }
}
export default Album;