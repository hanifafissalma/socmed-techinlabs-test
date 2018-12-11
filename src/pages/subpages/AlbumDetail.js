import React, {Component, Fragment} from 'react';
import {
    Container,
    Card,
    CardImg,
} from 'reactstrap';
import Header from '../../component/Header';
import {connect} from 'react-redux';
import {fetchPhotoByAlbum} from '../../api/photo.js';
import {Link} from 'react-router-dom';
class AlbumDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            photo:[]
        }
    }
    componentDidMount(){
        const{match} = this.props;
        this.props.fetchPhotoByAlbum(match.params.id);
    }
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
                margin:10,
                width:'100%',
            }
        }
        const {photo} = this.props;
        return(
            <Fragment>
                <Header/>
                <Container style={style.container}>
                    <h3>Album Detail</h3>
                    <Card style={style.card} >
                        {photo.map((photo,index)=>
                            <Link to={`/photo/${photo.id}`}>
                                <Card style={style.album} key={index}>
                                    <CardImg top width="100%" src={photo.thumbnailUrl} style={{width: 250, height:250}} alt="Card image cap" />
                                </Card>
                            </Link>
                        )}
                    </Card> 
                </Container>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    photo: state.photo.photo
  })
  
const mapDispatchToProps = dispatch => ({
    fetchPhotoByAlbum: (id) => dispatch(fetchPhotoByAlbum(id))
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail)