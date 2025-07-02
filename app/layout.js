import Navbar from '@/components/Navbar'
import './globals.css'
import Providers from '@/components/Providers'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title> Web Developement </title>
        <meta name='description' content=" website about fullstack web development using latest cutting edge technologies like MEAN, MERN, Django and much more." />
        <meta name='keywords' content="Web Development, Website Design, MEAN Stack, MERN Stack, Frontend Web Development, Backend Web Development, Fullstack Web Development, HTML, CSS, JavaScript, NodeJS, Python, ReactJS, AngularJS, Django, Flask, Mongodb, Mysql, PostgreSQL, ExpressJS, NextJS, Tailwindcss"/>
      </head>
      <body className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <Providers children={children}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
