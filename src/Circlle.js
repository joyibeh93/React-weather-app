import React from 'react'
import { Circles } from 'react-loader-spinner'

function Circlle() {
  return (
    <div>
        <Circles
            height="80"
            width="80"
            color="blue"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
  </div>
  )
}

export default Circlle