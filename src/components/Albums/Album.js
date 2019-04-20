import React, { Component } from 'react'
import { Link } from 'react-router'

class Album extends Component {
  render() {
      const { data } = this.props
      const url_photo = encodeURIComponent(data.title).replace(/%20/g,'-')
    return (
      <div>
        <h3>
        <Link to={`/photo/${data.id}/${url_photo}`}>{data.title}</Link>
        </h3>
      </div>
    )
  }
}

export default Album
