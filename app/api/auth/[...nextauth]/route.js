
import GoogleProvider from "next-auth/providers/google";
import nextAuth from 'next-auth'


const handler = nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID
    })
  ]
    
})

export { handler as GET, handler as POST } 