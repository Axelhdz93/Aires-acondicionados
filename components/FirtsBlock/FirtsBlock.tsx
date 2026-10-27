'use client'

import { Button } from '../ui/button'
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa'
import { MotionTransition } from '../MotionTransition/MotionTransition'
import Image from 'next/image'
import Reveal from '../Reveal/Reveal'

const FirtsBlock = () => {
  return (
    <div className='relative w-full bg-blue-300 px-4 py-10 md:py-30' >
      
        <div className='grid max-w-5xl mx-auto md:grid-cols-2' >

            <div>
                <Reveal>
                <h1 className='text-3xl md:text-5xl font-bold text-brand-navy' >
                    Clima fresco garantizado
                    <span className='block text-orange-500' >en La Paz, BCS</span> 
                </h1>
                </Reveal>

                <Reveal>
                <p className='max-w-5xl mt-10'>
                    Instalación, mantenimiento y reparación de minisplits. Técnicos certificados, servicio rápido y garanía de 90 días.
                </p>
                </Reveal>

                <Reveal>
                <div className='flex flex-col sm:flex-row gap-4 my-8 w-full' >
                
                    <Button size="lg" className='p-4 rounded-md! text-white text-lg'> <FaWhatsapp size={20} className="h-auto! w-auto!" /> <span>Agenda por Whatsapp</span> </Button>
                    <Button variant="outline" size="lg" className='p-4 rounded-md! text-lg bg-blue-300 border-blue-800'> <FaCalendarAlt size={20} className="text-blue-800 h-auto! w-auto!" /> <span className='text-blue-800 font-semibold'>Reservar cita</span> </Button>

                </div>
                </Reveal>
            </div>

            <MotionTransition className='flex items-center justify-center mt-6 md:mt-0' >
                <Image src="/img/main.jpeg" alt='card' width={500} height={500} className='h-auto rounded-2xl w-full md:w-full' />
            </MotionTransition>

        </div>

    </div>
  )
}

export default FirtsBlock
