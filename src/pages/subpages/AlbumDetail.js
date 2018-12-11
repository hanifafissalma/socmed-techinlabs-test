import React, {Component, Fragment} from 'react';
import {
    Container,
    Card,
    CardImg,
} from 'reactstrap';
import Header from '../../component/Header';
class AlbumDetail extends Component{
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
                    <h3>Album Detail</h3>
                    <Card style={style.card}>
                        <Card style={style.album}>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </Card>
                    </Card>
                </Container>
            </Fragment>
        )
    }
}
export default AlbumDetail;