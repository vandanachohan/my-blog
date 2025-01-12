
import React from 'react'
import Container from './Container'
import Logo from './logo'
import Link from 'next/link'
import { BsFacebook,  BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

const footer = () => {
  return (
      <Container className='p-10 bg-black text-gray-100 flex items-center justify-between'>
      <Logo title='AI FEATURES ' className='text-white'/>
      <div className=' text-gray-300 hidden md:inline-flex items-center gap-7'>
        <Link href={"https://youtube.com/shorts/5xk7E3tBWNs?si=wAB-ufEz3E6cUk5G"}
        target='blank'>
            <BsYoutube className=' text-2xl hoverred-500 duration-200'/>
        </Link>
        <Link href={"https://www.facebook.com/share/1YPzh85fUP/"}
        target='blank'>
            <BsFacebook className=' text-2xl hoverred-500 duration-200'/>
        </Link> 
        <Link href={"https://www.instagram.com/anmol_chohan12/profilecard/?igsh=dWNqNHZiNTQwOG0x"}
        target='blank'>
            <BsInstagram className=' text-2xl hoverred-500 duration-200'/>
        </Link>
        <Link href={"https://www.linkedin.com/posts/vandana-chohan-0880962b7_welcome-to-my-html-project-repository-activity-7230522886346661888-ogEr"}
        target='blank'>
            <BsLinkedin className=' text-2xl hoverred-500 duration-200'/>
        </Link>
      </div>
      <p className='text-sm text-gray-300'>
        @ All right reserved{" "}
        <Link href={"https://github.com/vandanachohan"} 
      target="blank" 
      className="hover:text-white font-semibold duration-200"
      >
        @VandanaChohan12
      </Link>
      </p>
    </Container>
  )
 
}

export default footer
