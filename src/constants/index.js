import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

import { BsCheckCircleFill } from "react-icons/bs";

export const navLinks = [
  {
    id: "home",
    title: "Inicio",
  },
  {
    id: "caracteristicas",
    title: "Caracteristicas",
  },
  {
    id: "premios ",
    title: "Premios",
  },
  {
    id: "clientes",
    title: "Clientes",
  },
];

export const caracteristicas = [
  {
    id: "caracteristica-1",
    icono: star,
    titulo: "Inspiración",
    contenido:
      "Escucha a destacados líderes de opinión que han marcado la diferencia en la lucha contra la violencia de género en Internet",
  },
  {
    id: "caracteristica-2",
    icono: shield,
    titulo: "Conexión",
    contenido:
      "Conéctate con personas apasionadas y dedicadas que comparten tu objetivo de crear un Internet seguro y libre de violencia de género",
  },
  {
    id: "caracteristica-3",
    icono: send,
    titulo: "Innovación",
    contenido:
      "Descubre las últimas tecnologías y enfoques innovadores utilizados para prevenir la violencia de género en Internet.",
  },
];


export const premios = [
  {
    id: "premio-1",
    icono: BsCheckCircleFill,
    contenido: "10 millones de pesos.",
  },
  {
    id: "premio-2",
    icono: BsCheckCircleFill,
    contenido: "Acompañamiento en la implementación.",
  },
  {
    id: "premio-3",
    icono: BsCheckCircleFill,
    contenido: "Hosting",
  },
  {
    id: "premio-4",
    icono: BsCheckCircleFill,
    contenido: "Email Marketing",
  },
  {
    id: "premio-5",
    icono: BsCheckCircleFill,
    contenido: "Herramientas de publicación en redes sociales",
  },
  {
    id: "premio-6",
    icono: BsCheckCircleFill,
    contenido: "Difusión en redes de Startup Weekend Colombia y LatamDev",
  },
];


export const beneficios = [
  {
    id: "beneficio-1",
    icono: BsCheckCircleFill,
    contenido: "Participación en el taller de refinamiento.",
  },
  {
    id: "beneficio-2",
    icono: BsCheckCircleFill,
    contenido: "Tener una versión accesible para uso del Ministerio TIC.",
  },
  {
    id: "beneficio-3",
    icono: BsCheckCircleFill,
    contenido: "Dejar a disposición una copia funcional en la plataforma usada en el evento.",
  },
  {
    id: "beneficio-4",
    icono: BsCheckCircleFill,
    contenido: "Autorizar la grabación de la Hackathon y de las sesiones de acompañamiento.",
  },
  {
    id: "beneficio-5",
    icono: BsCheckCircleFill,
    contenido: "Facilitar la documentación requerida por Maloka para la entrega del beneficio en los tiempos acordados",
  },
];

export const comentarios = [
  {
    id: "comentario-1",
    contenido:
      "Nunca antes había visto a tantas personas comprometidas en poner fin a la violencia de género en Internet.",
    nombre: "María Fernandes",
    titulo: "Experta en seguridad cibernética",
    img: people01,
  },
  {
    id: "comentario-2",
    contenido:
      "Como profesional en tecnología, este evento me abrió los ojos a las soluciones innovadoras que podemos utilizar para prevenir la violencia de género en línea.",
    nombre: "Luis Ortiz",
    titulo: "Defensor de los derechos digitales",
    img: people02,
  },
  {
    id: "comentario-3",
    contenido:
      "Fue inspirador escuchar a los líderes de opinión en el evento, quienes compartieron su visión y conocimientos sobre la violencia de género en Internet.",
    nombre: "John Jimenez",
    titulo: "Participante del evento anterior",
    img: people03,
  },
];

export const estadisticas = [
  {
    id: "estadisticas-1",
    titulo: "del gran reto",
    valor: "48h",
  },
  {
    id: "estadisticas-2",
    titulo: "de noviembre",
    valor: "26 al 28",
  },
  {
    id: "estadisticas-3",
    titulo: " al equipo Ganador",
    valor: "$10M",
  },
];

export const footerLinks = [
  {
    titulo: "Enlaces Utiles",
    links: [
      {
        nombre: "Contenido",
        link: "#",
      },
      {
        nombre: "Como Funciona",
        link: "#",
      },
      {
        nombre: "Crear",
        link: "#",
      },
      {
        nombre: "Explorar",
        link: "#",
      },
      {
        nombre: "Terminos y Servicios",
        link: "#",
      },
    ],
  },
  {
    titulo: "Comunidad",
    links: [
      {
        nombre: "Centro de ayuda",
        link: "#",
      },
      {
        nombre: "Socios",
        link: "#",
      },
      {
        nombre: "Sugerencias",
        link: "#",
      },
      {
        nombre: "Blog",
        link: "#",
      },
      {
        nombre: "Newsletters",
        link: "#",
      },
    ],
  },
  {
    titulo: "Socios",
    links: [
      {
        nombre: "Nuestros Socios",
        link: "#",
      },
      {
        nombre: "Convertirse en socio",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icono: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icono: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icono: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icono: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clientes = [
  {
    id: "cliente-1",
    logo: airbnb,
  },
  {
    id: "cliente-2",
    logo: binance,
  },
  {
    id: "cliente-3",
    logo: coinbase,
  },
  {
    id: "cliente-4",
    logo: dropbox,
  },
];
