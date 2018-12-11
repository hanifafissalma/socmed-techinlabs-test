import React, {Component, Fragment} from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import Header from '../../component/Header';
import {connect} from 'react-redux';
import {fetchPhotoById} from '../../api/photo.js';
class PhotoDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            photo:[]
        };
    }
    componentDidMount(){
        const {match} = this.props;
        this.props.fetchPhotoById(match.params.id);
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
            photo:{
                padding:10,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
            }
        }
        const {photo} = this.props;
        return(
            <Fragment>
                <Header/>
                <Container style={style.container}>
                    <h3>Photo Detail - {photo.id}</h3>
                    <div style={style.photo}>
                        <img src={photo.url} style={{width:600, height:600}} alt="foto"/>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    photo: state.photo.photo
  })
  
const mapDispatchToProps = dispatch => ({
    fetchPhotoById: (id) => dispatch(fetchPhotoById(id))
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail)