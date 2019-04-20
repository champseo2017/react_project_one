import React, { Component } from 'react'
import User from './User'

class UserList extends Component {
  render() {
      const { data } = this.props/* 
      A. ทำการ Destructure ค่าที่ส่งมาจาก props (src/pages/User.js)
    */
    return (
      <div>
        {data && data.map(e=>{
            return(
                <User data={e} key={e.id}/>
            )
        })}
      </div>
    )
  }
}

export default UserList
