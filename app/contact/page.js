'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
const Contact = () => {
  const [user, setUser] = useState({ username: '', mobile: '', email: '', desc: '' })
  const router = useRouter()

  const setUserData = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const sendData = async function () {
    const response = await fetch('/api/ledata', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: user.username,
        mobile: user.mobile,
        email: user.email,
        desc: user.desc
      })
    })
    if(response.status == 200) {
      router.push('https://portfolio-silk-one-23.vercel.app')  
    }
  }

  return (
    <form onSubmit={sendData} method='POST' className= ' flex flex-col items-center m-2'>
      <input className='m-1 text-center rounded-lg placeholder-white bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500' type='text' name='username' value={user.username} onChange={setUserData} placeholder='Username' required />
      <input className='m-1 text-center rounded-lg placeholder-white bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500'  type='number' name='mobile' value={user.mobile} onChange={setUserData} placeholder='Contact Number'required />
      <input className='m-1 text-center rounded-lg placeholder-white bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500'  type='email' name='email' value={user.email} onChange={setUserData} placeholder='Email Address' required/>
      <textarea row='5' className='m-1 text-center rounded-lg placeholder-white bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500'  type='text' name='desc' value={user.desc} onChange={setUserData} placeholder='Describe Issue' required/>
      <button className='m-1 p-1 w-100 text-center rounded-lg text-white bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500'  type='submit'>Submit</button>
    </form>
  )
}

export default Contact
