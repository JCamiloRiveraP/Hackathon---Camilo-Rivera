import { card } from '../assets';
import styles, { layout } from '../style';
import Boton from './Boton';
import { beneficios } from '../constants';

const TarjetaTrato = () => (

  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> Requisitos para la entrega de<br className='sm:block hidden' /> beneficios: </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <div key={beneficios.id} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <ul className="list-none mt-4">
            {beneficios.map((beneficio) => (
              <li key={beneficio.id} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-[#C9DF19] cursor-pointer mb-2`}>
                🐺 {beneficio.contenido}
              </li>
            ))}
          </ul>
        </div>
      </p>
      <Boton styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="tarjeta" className='w-[100%] h-[100%] bg-auto bg-no-repeat bg-center' />
    </div>
  </section>
)


export default TarjetaTrato