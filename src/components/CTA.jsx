import styles from "../style"
import Boton from "./Boton"

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}> Regístrate ahora y sé parte del cambio. </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>¡Únete a la revolución digital para prevenir la violencia de género en Internet! </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Boton />
    </div>
  </section>
)

export default CTA