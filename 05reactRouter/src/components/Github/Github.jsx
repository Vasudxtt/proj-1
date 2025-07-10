import React, { useEffect, useState } from 'react'

function Github() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/Vasudxtt').then(response =>response.json())
    .then(data =>{
      console.log(data);
      setData(data)
    })
  },[])
  return (
    <div className='text-center m-4 bg-green-600 text-white p-4 text-5xl'>Github followers : {data.followers} </div>
  )
}

export default Github