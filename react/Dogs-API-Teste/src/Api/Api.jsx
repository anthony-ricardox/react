import React from 'react'
import UsePost from '../EndPoints/UsePost'
import TokenPost from '../EndPoints/TokenPost'
import PhotoPost from '../EndPoints/PhotoPost'
import PhotoGet from '../EndPoints/PhotoGet'

const Api = () => {
  return (
    <div>
      <h2>USE POST</h2>
      <UsePost/>

      <h2>TOKEN POST</h2>
      <TokenPost/>

      <h2>PHOTO POST</h2>
      <PhotoPost/>

      <h2>PHOTO GET</h2>
      <PhotoGet/>
    </div>
  )
}

export default Api
