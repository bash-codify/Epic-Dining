import Header from './components/Header'
import './globals.css'
import { Syne } from '@next/font/google'


const syne = Syne({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className= {`${syne.className} bg-backgroundColor`} >
        <Header/>
        
        {children}
        
        </body>
    </html>
  )
}
