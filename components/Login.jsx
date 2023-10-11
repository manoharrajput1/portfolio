'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {

    const { data: session } = useSession()
    if (session && session.user) {
        return (
            <section className='flex justify-between bg-dark'>
            <Link href='/' className='m-2'>
                Jhalar
            </Link>
            <div className='flex m-2'>
                <Link href='/about' className='px-2 my-1'>About </Link>
                <Link href='/contact' className='px-2 my-1'>Contact </Link>
                {/* <Image src={session.user.image} height={30} width={30} className='rounded-full' alt='User Image'/> */}
                <button className='px-2' onClick={() => signOut({ callbackUrl: "https://portfolio-silk-one-23.vercel.app" })} > Signout </button>
            </div>
            </section>

        )
    }
    return (
        <div className='flex justify-end bg-dark m-2'>
            <button onClick={() => signIn()} > Signin </button>
        </div>
    )
}

export default Login