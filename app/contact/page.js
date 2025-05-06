'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
const Contact = () => {
  const router = useRouter()
  const [user, setUser] = useState({ username: '', mobile: '', email: '', desc: '' })
  const setUserData = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const sendData = async function (e) {
    e.preventDefault()
    try{
      const response = await fetch('/api/ledata', {
        method: 'POST',
        body: JSON.stringify({
          username: user.username,
          mobile: user.mobile,
          email: user.email,
          desc: user.desc
        })
      })
     
      const result = await response.json()
      console.log(result);
      if(result) {
        router.push('/')  
    }
      
    }
    catch(error){
      console.log(error,'anha')
    }

  }

  return (
    <form className= 'w-full mx-auto'>
      <input className='block w-80 mx-auto text-white placeholder-white text-center rounded-lg bg-gradient-to-r from-indigo via-purple to-pink' type='text' name='username' value={user.username} onChange={setUserData} placeholder='Username' required />
      <input className='block w-80 mx-auto text-white placeholder-white text-center rounded-lg placeholder-blue bg-gradient-to-r from-indigo via-purple to-pink'  type='number' name='mobile' value={user.mobile} onChange={setUserData} placeholder='Contact Number'required />
      <input className='block w-80 mx-auto text-white placeholder-white text-center rounded-lg placeholder-blue bg-gradient-to-r from-indigo via-purple to-pink'  type='email' name='email' value={user.email} onChange={setUserData} placeholder='Email Address' required/>
      <textarea row='3' className='block w-80 mx-auto text-white placeholder-white text-center rounded-lg placeholder-blue bg-gradient-to-r from-indigo via-purple to-pink'  type='text' name='desc' value={user.desc} onChange={setUserData} placeholder='Describe Issue' required/>
      <button className='my-1 p-1 text-blue w-100 text-center rounded-lg ' onClick={sendData}  type='submit'>Submit</button>
    </form>
  )
}

export default Contact
