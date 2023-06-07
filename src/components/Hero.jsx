import React from 'react'
import styles from '../style';
import { twitterRounded, robot } from '../assets';
import Empezar from './Empezar'

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className={` flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
        <img src={twitterRounded} alt="Descuento" className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'> # </span>
          HackathonTIC3.0
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[60px] text-[40px] text-white ss:leading-[100px] leading-[75px]'>
          Bienvenidos al <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'> evento que cambiará </span>{" "}
        </h1>

        <div className='ss:flex hidden md:mr-4 mr-0'>
          <Empezar />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[60px] text-[45px] text-white ss:leading-[100px] leading-[75px] w-full'>
        el futuro de Internet
      </h1>
      <p className={`${styles.paragraph} max-[470px] mt-5`}>Únete a nosotros en nuestra emocionante jornada para crear soluciones que prevengan la violencia de género en Internet. Estamos comprometidos en abordar uno de los problemas más apremiantes de nuestra era digital y tú puedes marcar la diferencia.</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="Facturación" className='w-[100%] h-[100%] relative z-[5]' />


      {/*Gradiante*/}
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      {/* Fin Gradiante */}
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <Empezar />
    </div>
  </section>
)


export default Hero