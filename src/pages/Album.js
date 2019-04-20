import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAlbums } from '../actions'
import AlbumList from '../components/Albums/AlbumList'

class Album extends Component {
    componentDidMount(){
        const {userID} = this.props.params
        this.props.dispatch(loadAlbums(userID))/* 
        อธิบายโค้ด
        การทำงานก็จะเหมือนกับไฟล์ src/pages/User.js นะครับ แต่สิ่งที่เพิ่มเข้ามาคือ
        A. ในการ dispatch เรามีการส่ง parameter เข้าไปด้วยครับเป็น id ของ user ที่ส่งมาจากไฟล์ src/routes.js ที่ชื่อ userID
        */
    }
  render() {
      const {title} = this.props.params
      const {albums} = this.props
      const title_replace = title.replace(/-/g,' ')
      if(albums.isLoading){
        return <div>Load Albums.....Wait</div>
      }
      if(albums.isRejected){
          return <div>Not Load Albums</div>
      }
    return (
      <div>
        <h1>Album of : Mr. {title_replace}</h1>{/*B. แสดงชื่อ user ที่ได้รับ paramter ที่ส่งมาจากไฟล์ src/routes.js ที่ชื่อ title*/}
        <AlbumList data={albums.data}/>{/* 
        อธิบายโค้ด
        การทำงานก็จะเหมือนกับไฟล์ src/pages/User.js นะครับ แต่สิ่งที่เพิ่มเข้ามาคือ
        C. ส่ง props ที่ชื่อ data ให้กับ component AlbumList โดยมี value เป็น albums.data
        */}
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
        albums:state.albums
    }
}

export default connect(mapStateToProps)(Album)