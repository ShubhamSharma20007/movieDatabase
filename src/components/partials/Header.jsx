import React from 'react'

const Header = ({ data }) => {
    console.log(data)
  return (
    <div>
      <div className="w-full h-[50vh]" style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(${data && data.Poster})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
      }}></div>

    </div>
  )
}

export default Header
