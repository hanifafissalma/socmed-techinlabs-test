import React, {Component, Fragment} from 'react';
import {
    Container,
    Card,
    Table,
    Button
} from 'reactstrap';
import Header from '../component/Header';
import {fetchAllUser} from '../api/user.js';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class ListFriends extends Component{
    constructor(props){
        super(props);
        this.state={
            user:[]
        }
    }
    componentDidMount(){
        this.props.fetchAllUser();
    }
    render(){
        const style={
            container:{
                marginTop:20,
                padding:20
            },
            card:{
                padding: 20,
                margin:10,
                display:'flex',
                flexWrap:'wrap',
                flexDirection:'row'
            },
            subcard:{
                padding: 20,
                margin:30
            }
        }
        const user = this.props.user;
        return(
            <Fragment>
                <Header/>
                <Container style={style.container}>
                    <h3>List of Friends</h3>
                    <Card style={style.card}>
                        {user.map((user, index)=>
                            <Card style={style.subcard} key={index}>
                                <h5>{user.username}</h5>
                                <Table>
                                    <thead>
                                        <tr>
                                            <td><b>Name</b></td>
                                            <td>{user.name}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b>Email</b></td>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Address</b></td>
                                            <td>{user.address.street} - {user.address.city} - {user.address.zipcode}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Phone</b></td>
                                            <td>{user.phone}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Website</b></td>
                                            <td>{user.website}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Link to={`user/${user.id}`}><Button color="info" block>See Posts</Button></Link>
                                <br/>
                                <Link to={`album/${user.id}`}><Button color="info" block>See Album</Button></Link>
                            </Card>
                        )}
                    </Card>
                </Container>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    user: state.user.user
  })
  
const mapDispatchToProps = dispatch => ({
    fetchAllUser: async () => await dispatch(fetchAllUser())
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(ListFriends)
