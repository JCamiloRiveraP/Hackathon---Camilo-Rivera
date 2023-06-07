import { premiosImg } from '../assets';
import styles, { layout } from '../style';
import { premios } from '../constants';




const facturacion = () => (
  <section id='premios' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={premiosImg} alt="Facturar" className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> ¿Qué reciben los <br className='sm:block hidden' /> mejores equipos? </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <div key={premios.id} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <ul className="list-none mt-4">
            {premios.map((premio) => (
              <li key={premio.id} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-[#C9DF19] cursor-pointer mb-2`}>
                🎁 {premio.contenido}
              </li>
            ))}
          </ul>
        </div>
      </p>
    </div>
  </section>
)

export default facturacion