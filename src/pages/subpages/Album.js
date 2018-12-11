import React, {Component, Fragment} from 'react';
import {
    Container,
    Card,
    CardImg,
    CardBody,
    CardTitle
} from 'reactstrap';
import Header from '../../component/Header';
import {connect} from 'react-redux';
import {fetchAlbumById} from '../../api/album.js';
import {Link} from 'react-router-dom';
class Album extends Component{
    constructor(props){
        super(props);
        this.state={
            album:[]
        };
    }
    componentDidMount(){
        const {match} = this.props;
        this.props.fetchAlbumById(match.params.id);
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
                margin:5,
                width:'100%',
            }
        }
        const {album} = this.props;
        return(
            <Fragment>
                <Header/>
                <Container style={style.container}>
                    <h3>Album</h3>
                    <Card style={style.card}>
                    {album.map((album,index)=>
                        <Link to={`list_album/${album.albumId}`} key={index}>
                            <Card style={style.album} >
                                <CardImg top width="100%" src={album.thumbnailUrl} style={{width:250, height:250, float:'center'}} alt="Album" />
                                <CardBody>
                                    <CardTitle style={{width:250}}>{album.title}</CardTitle>
                                </CardBody>
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
    album: state.album.album
  })
  
const mapDispatchToProps = dispatch => ({
    fetchAlbumById: async (id) => await dispatch(fetchAlbumById(id))
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(Album)