import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();

    // const [data, setDate] = useState([]);

    // useEffect(() => {
    //       fetch("https://api.github.com/users/Nikhil085")
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log(data)
    //         setDate(data);
    //       })
    // }, [])

  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers} 
    <img className='text-center' width={300} src={data.avatar_url} alt='Git Profile Image' /> 
    </div>
    
    </>
  )
}

export default Github;


export const githubLoadder = async () => {
    const response = await fetch("https://api.github.com/users/Nikhil085")
    return response.json();
}




