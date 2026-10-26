'use client'

import { IoIosCheckmark } from "react-icons/io"
import { Button } from "../ui/button"
import { MotionTransition } from "../MotionTransition/MotionTransition"
import Reveal from "../Reveal/Reveal"

const Packages = () => {
  return (
    
    <MotionTransition className='relative w-full min-h-130 bg-[#E4EEFA] p-4 md:py-20' > 

      <div id="paquetes" className='grid grid-cols-1 gap-4 max-w-5xl mx-auto px-4 md:grid-cols-3'>
         
        {/* Paquetes de mantenimiento */}            
        <div className='col-span-full text-center mb-4' >
            <h2 className='text-3xl font-bold text-brand-navy md:text-4xl' >Paquetes de Mantenimiento</h2>
            <p className="text-slate-600 mt-1" >Elige el plan ideal para tu minisplit</p>
        </div>

        <div className="grid grid-cols-2 gap-4 col-span-full mx-auto md:grid-cols-3 " >
          <Reveal>
          <div className='flex flex-col items-center justify-center text-center w-44 min-h-44 p-2 bg-white rounded-2xl md:w-48 md:min-h-48' > <h5 className="font-bold text-slate-800" >Básico</h5> <h3>$899 MXN</h3>  <div className="flex text-start" > <IoIosCheckmark  className="text-green-600" /> <p className="text-sm text-slate-600 mt-2" >It is a long established fact</p> </div> <Button  className='mt-2 rounded text-white' > Elegir paquete </Button> </div>
          </Reveal>

          <Reveal>
          <div className='flex flex-col items-center justify-center text-center w-44 min-h-44 p-2 bg-white rounded-2xl md:w-48 md:min-h-48' > <h5 className="font-bold text-slate-800" >Estandar</h5> <h3>$1,499 MXN</h3> <div className="flex text-start" > <IoIosCheckmark className="text-green-600"  /> <p className="text-sm text-slate-600 mt-2" >It is a long established fact</p> </div> <Button className='mt-2 rounded text-white' > Elegir paquete </Button> </div>
          </Reveal>

          <Reveal>
          <div className='flex flex-col items-center justify-center text-center w-44 min-h-44 p-2 bg-white rounded-2xl md:w-48 md:min-h-48' > <h5 className="font-bold text-slate-800" >Premium</h5> <h3>$2,499 MXN</h3> <div className="flex text-start" > <IoIosCheckmark className="text-green-600"  /> <p className="text-sm text-slate-600 mt-2" >It is a long established fact</p> </div> <Button className='mt-2 rounded text-white' > Elegir paquete </Button> </div>
          </Reveal>

        </div>
      
      </div>

    </MotionTransition>

  )
}

export default Packages
