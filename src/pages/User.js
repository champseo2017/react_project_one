import React, { Component } from 'react'
import UserList from '../components/Users/UserList'
import {connect} from 'react-redux'
import { loadUsers } from '../actions'

class User extends Component {
    componentDidMount(){
      this.props.dispatch(loadUsers())
    } 
  render() {
    const { users } = this.props
    if(users.isLoading){
      return <div>Load Users......Wait</div>
    }else if(users.isRejected){
      return <div>Data not Connect</div>
    }
    return (
      <div>
        <h1>Users</h1>
        <UserList data={users.data}/> 
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(User)