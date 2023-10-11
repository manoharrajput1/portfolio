'use client'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'


const About = () => {

    return (
        <>
            <section className='grid grid-cols-2'>
                <div className='justify-self-center items-center mt-10'><Image className=' rounded' src='/static/images/mypic.jpg' width={300} height={300}/></div>
                <div className='grid-rows justify-center self-center '> 
                    <div className='text-yellow-700 font-bold'> Manohar Singh </div><br/>
                    <div> <span className='text-blue-600'>Skills :</span> Html, JavaScript, Css ,Mysql, MongoDB, Python, NextJs, Django </div><br/>
                    <div> <span className='text-blue-600'>Projects:</span> <a href='https://portfolio-silk-one-23.vercel.app/' target='_blank'> Personal Portfolio </a>,
                    <a href='https://manoharsignh.pythonanywhere.com' target='_blank'> Ecommerce Website </a>
                    </div>
                </div>

            </section>
            <section className="flex justify-center fixed bottom-0 right-10 left-20 m-3 ">
                <div>
                    <SocialIcon className="m-2" target="_blank" url="https://twitter.com/Manohar46703390" />
                    <SocialIcon className="m-2" target="_blank" url="https://www.facebook.com/profile.php?id=100085389642554" />
                    <SocialIcon className="m-2" target="_blank" url="https://www.linkedin.com/in/manohar-singh-b14a68148" />
                </div>
            </section>
        </>
    )
}

export default About