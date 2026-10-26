'use client'

import Link from "next/link"
import { RiMenu3Line } from "react-icons/ri"
import { dataHeader } from "./Header.data"
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"
import { Button } from "./ui/button"
import { useState } from "react"
import { MotionTransition } from "./MotionTransition/MotionTransition"

const Header = () => {

  const [openMobileMenu, setopenMobileMenu] = useState(false);


  return (
    <MotionTransition>
      <nav className="flex flex-wrap items-center justify-between max-w-5xl p-4 mx-auto md: py-8" >
          <Link href="/" className="flex items-center" >
            <h1 className="text-3xl" >AxlDev</h1>
          </Link>

          <RiMenu3Line className="block text-3xl md:hidden cursor-pointer" onClick={() => setopenMobileMenu(!openMobileMenu) } />

          <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
            <div className="flex flex-col items-center gap-2 p-4 mt-4 md:p-0 md:flex-row md:space-x-5 md:mt-0 md:border-0" >

              {dataHeader.map(({id, name, idLink}) => (
                <div key={id} className="px-4 transition-all duration-500 ease-in-out" >
                  <Link href={idLink} className="text-lg hover:text-blue-500 hover:underline" > {name} </Link>
                </div>
                
              ))}
              <span className="flex gap-2 items-center"> <FaPhoneAlt/>612 678 3678</span>
              <Button size="lg" className='rounded-full text-white text-lg'> <FaWhatsapp size={24} className="h-auto! w-auto!" /> WhatsApp </Button>
            </div>

          </div>
      </nav>
    </MotionTransition>
  )
}

export default Header
