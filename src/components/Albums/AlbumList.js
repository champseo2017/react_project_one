import React, { Component } from 'react'
import Album from './Album'

class AlbumList extends Component {
  render() {
      const { data } = this.props
    return (
      <div>
        {data ? data.map(e => {
            return(
                <Album data={e} key={e.id}/>
            )
        }): 'not data'}
      </div>/* 
อธิบายโค้ด 
การทำงานก็จะเหมือนกับไฟล์ /src/component/Users/UserList.js นะครับคือรับ props มาจาก
src/pages/User.js ที่ชื่อ data แล้วมา loop ด้วย map ก่อนที่จะ map ก็เช็คก่อนว่า data มีข้อมูลหรือไม่
จากนั้นก็ส่ง data ให้ component Album (src/component/Albums/Album.js) เพื่อแสดงผล

แต่ถ้าดูที่ browser ตอนนี้ก็จะยัง error อยู่เพราะยังไม่ได้สร้าง component ชื่อ Album ครับ

*/
    )
  }
}

export default AlbumList