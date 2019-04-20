import React, { Component } from 'react'
import { Link } from 'react-router'
class User extends Component {
  render() {
      const { data } = this.props
      
      const url_username = encodeURIComponent(data.name).replace(/%20/g,'-')
      
    return (
      <div>
          <h3>
            <Link to={`/album/${data.id}/${url_username}`}>{data.name}</Link>{/* 
แก้ไขไฟล์ /src/component/Users/User.js โดยบรรทัด <Link ...แก้จากเดิม>
<Link to={`/album/${data.id`}> เป็น <Link to={`/album/${data.id}/${data.name}`}> 
เพราะเรามีการส่ง parameter อีกตัวไปด้วย (เป็นชื่อ user ครับ)
*/}
          </h3>
      </div>
    )
  }
}

export default User