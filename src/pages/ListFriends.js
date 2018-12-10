import React, {Component, Fragment} from 'react';
import {
    Container,
    Card,
    Table
} from 'reactstrap';
import Header from '../component/Header';
class ListFriends extends Component{
    render(){
        const style={
            container:{
                marginTop:20,
                padding:20
            },
            card:{
                padding: 20,
                margin:5,
                display:'flex',
                flexWrap:'wrap',
                flexDirection:'row'
            },
            subcard:{
                width:'50%',
                padding: 20
            }
        }
        return(
            <Fragment>
                <Header/>
                <Container style={style.container}>
                    <Card style={style.card}>
                        <h3>List of Friends</h3>
                        <Card style={style.subcard}>
                            <h5>Username</h5>
                            <Table>
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>name</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Email</td>
                                        <td>email</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>address</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>phone</td>
                                    </tr>
                                    <tr>
                                        <td>Website</td>
                                        <td>website</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Card>
                </Container>
            </Fragment>
        )
    }
}
export default ListFriends;