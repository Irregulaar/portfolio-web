import { Link } from "react-router-dom";

function Next() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen gap-4 overflow-hidden bg-black">
      <span className="z-10 text-2xl text-center text-white w-[80%] opacity-80 tracking-wide leading-relaxed">
        Has ido demasiado lejos hacia el futuro... El universo ha llegado a su fin. Las estrellas se apagaron, la materia se
        deshizo, el tiempo dejó de tener sentido. No hay luz, no hay calor. Solo una expansión fría y eterna... ¿o tal vez no? En
        la oscuridad absoluta, algo vibra. Una posibilidad. Un nuevo comienzo. ¿Es este el fin del tiempo… o el inicio de otro
        universo?
      </span>

      <Link
        to="/"
        className="z-10 flex bg-[#ffffff] w-fit p-2 items-center justify-center text-1xl text-center hover:bg-[#141414]/80 duration-300
          bg-gradient-to-r from-gray-800 to-black text-white px-4 py-2 rounded-lg hover:scale-105 transition transform shadow-lg"
      >
        Volver al presente
      </Link>
    </div>
  );
}

export default Next;
