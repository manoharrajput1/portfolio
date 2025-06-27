import Navbar from '@/components/Navbar'
import './globals.css'
import Providers from '@/components/Providers'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title> Web Developement </title>
        <meta name='description' content="web development, website design, MEAN Stack, MERN Stack, frontend web development, backend web development, fullstack web development, html, css, javascript, nodejs, python, reactjs, angularjs, django, flask, mongodb, mysql, mongoose, postgresql, expressjs, nextjs,tailwindcss"/>
      </head>
      <body>
        <Providers children={children}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
