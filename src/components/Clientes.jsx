import { clientes } from "../constants"
import styles from "../style"

const Clientes = () => (
  <section className={`${styles.flexCenter} mb-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clientes.map((cliente) => (
        <div key={clientes.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img src={cliente.logo} alt="cliente" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))};
    </div>
  </section>
)

export default Clientes