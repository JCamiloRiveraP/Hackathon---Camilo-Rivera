import { comentarios } from "../constants";
import styles from "../style";
import TarjetaComen from "./TarjetaComen";


const Testimonios = () => (
  <section id="clientes" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Que dicen las personas <br className="sm:block hidden" /> sobre nosotros
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Es el momento de unir fuerzas y dar un paso audaz hacia un Internet seguro para todos.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {comentarios.map((comentario) => <TarjetaComen key={comentario.id} {...comentario} />)}
    </div>
  </section>
);


export default Testimonios