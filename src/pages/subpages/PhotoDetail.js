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
class PhotoDetail extends Component{
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
            photo:{
                padding:10,
                margin:5,
                width:'100%',
                float:'center'
            }
        }
        return(
            <Fragment>
                <Header/>
                <Container style={style.container}>
                    <SubHeader/>
                    <div style={style.photo}>
                        <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="foto"/>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
export default PhotoDetail;