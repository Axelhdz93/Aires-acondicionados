'use client'

import { BsFillWrenchAdjustableCircleFill } from 'react-icons/bs'
import { FaScrewdriverWrench } from 'react-icons/fa6'
import { GrHostMaintenance } from 'react-icons/gr'
import { MotionTransition } from '../MotionTransition/MotionTransition'
import Reveal from '../Reveal/Reveal'

const Services = () => {
  return (
    <MotionTransition className='relative w-full min-h-130 bg-[#E4EEFA] p-4 md:py-20' >

        <div id='servicios' className='grid grid-cols-1 gap-4 max-w-5xl mx-auto px-4 md:grid-cols-3' >
                        {/* nuestros servicios */}
            <div className='col-span-full text-center mb-4' >
                <h2 className='text-3xl font-bold text-brand-navy md:text-4xl' >Nuestros servicios</h2>
                <p className='text-slate-600 mt-1'>Soluciones completas para tu minisplit en La Paz</p>
            </div>

            <div className='col-span-full grid grid-cols-2 gap-4 place-items-center w-full mt-6 md:grid-cols-3' >

                <Reveal>
                <div className='flex flex-col items-center justify-center text-center w-44 min-h-44 p-2 bg-white rounded-2xl md:w-48 md:min-h-48' > 
                    <BsFillWrenchAdjustableCircleFill className='text-3xl! text-orange-500 mb-2' /> 
                    <h4 className="font-bold text-slate-800"> Instalación </h4> 
                    <p className="text-sm text-slate-600 mt-1"> Instalamos minisplit nuevo con garantía. </p> 
                </div>
                </Reveal>

                <Reveal>
                <div className='flex flex-col items-center justify-center text-center w-44 min-h-44 p-2 bg-white rounded-2xl md:w-48 md:min-h-48' > 
                    <GrHostMaintenance className='text-3xl! text-blue-800 mb-2'  /> 
                    <h4 className="font-bold text-slate-800"> Mantenimiento </h4> 
                    <p className="text-sm text-slate-600 mt-1">Limpieza profunda, revisión de gas, filtros y rendimiento óptimo.</p> 
                </div>
                </Reveal>

                <Reveal>
                <div className='flex flex-col items-center justify-center text-center w-44 min-h-44 p-2 bg-white rounded-2xl md:w-48 md:min-h-48' > 
                    <FaScrewdriverWrench className='text-3xl! text-orange-500 mb-2'  /> 
                    <h4 className="font-bold text-slate-800"> Reparación </h4> 
                    <p className="text-sm text-slate-600 mt-1"> Diagnóstico rápido y reparación de fallas. </p> 
                </div>
                </Reveal>
            
                {/* imagenes de minisplit */}
                <div className='col-span-full grid grid-cols-2 gap-4 w-full text-center mt-4' > 

                    
                    <div className='w-full min-h-48 bg-[url("/img/rusty.jpg")] bg-cover bg-center bg-no-repeat bg-white p-4 rounded-xl flex flex-col justify-start' >
                        <h4 className='px-2 place-self-center bg-orange-500 text-white rounded-2xl' >Antes</h4>
                    </div>
                    

                    
                    <div className='w-full min-h-48 bg-[url("/img/new.jpg")] bg-cover bg-center bg-no-repeat bg-white p-4 rounded-xl flex flex-col justify-start' >
                        <h4 className='px-2 place-self-center bg-blue-800 text-white rounded-2xl' >Después</h4>
                    
                    </div>
                    
                    

                </div>

            </div>

        </div>

    </MotionTransition>
  )
}

export default Services
