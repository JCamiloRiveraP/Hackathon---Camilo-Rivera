import { caracteristicas } from "../constants";
import styles, { layout } from "../style";
import Boton from "./Boton";


const FeatureCard = ({ icono, titulo, contenido, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== caracteristicas.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px]
    rounded-full ${styles.flexCenter} bg-dimBlue `}>
      <img src={icono} alt="icono" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {titulo}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{contenido}</p>
    </div>

  </div>
);

const Negocios = () => (
  <section id="caracteristicas" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>¿Qué puedes esperar <br className="sm:block hidden" /> de este evento? </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>La tercera hackathon busca una herramienta de base tecnológica que contribuya a prevenir y erradicar la violencia contra la mujer.</p>
      <Boton styles="mt-10" />
    </div>


    <div className={`${layout.sectionImg} flex-col`}>
      {caracteristicas.map((caracteristica, index) => (
        <FeatureCard key={caracteristica.id} {...caracteristica} index={index} />
      ))}


    </div>

  </section>
)


export default Negocios