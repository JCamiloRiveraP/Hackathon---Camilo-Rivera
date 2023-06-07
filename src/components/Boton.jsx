import React from 'react'

const Boton = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-yellow-gradient font-poppins font-medium text[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Ver más
    </button>
  )
}


export default Boton