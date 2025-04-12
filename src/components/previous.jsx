import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function SupernovaCircle() {
  const [style, setStyle] = useState({});
  const [key, setKey] = useState(0);

  const generateStyle = () => {
    const size = 1 + Math.random() * 10;
    const duration = 1 + Math.random() * 4;
    const delay = Math.random() * 3;
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const color1 = randomColor();
    const color2 = randomColor();

    return {
      top,
      left,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      background: `radial-gradient(circle, rgba(255,255,255,0.8), transparent)`,
      filter: `drop-shadow(0 0 10px ${color1}) drop-shadow(0 0 20px ${color2})`,
    };
  };

  useEffect(() => {
    const update = () => {
      setStyle(generateStyle());
      setKey((prev) => prev + 1);
    };

    update(); // inicia con valores random
    const interval = setInterval(update, 1000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  return <div key={key} className="absolute rounded-full animate-supernova" style={style} />;
}

function Previous() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen gap-4 overflow-hidden bg-black">
      <div className="absolute top-0 left-0 z-0 w-full h-full pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <SupernovaCircle key={i} />
        ))}
      </div>

      <span className="z-10 text-2xl text-center text-white w-[80%] drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
        Has ido demasiado atrás... Bienvenido al inicio del universo. En el segundo 0.0000000001 del Big Bang, el universo tenía
        el tamaño de un átomo, pero ya contenía toda la energía que existe hoy. Temperatura: más de un billón de grados Celsius.
        No había luz, solo pura locura cósmica. En ese instante, las leyes de la física todavía estaban calentando motores. No
        había materia, solo energía super loca viajando a la velocidad de la luz. Todo lo que conoces estaba comprimido en un
        punto más pequeño que un pixel. No hay nada más por descubrir aquí
      </span>

      <Link
        to="/"
        className="z-10 flex bg-[#ffffff] w-fit p-2 items-center justify-center text-1xl text-center hover:bg-[#141414]/80 duration-300
          bg-gradient-to-r from-gray-500 to-white text-black px-4 py-2 rounded-lg hover:scale-105 transition transform shadow-lg
          font-[false]"
      >
        Volver al presente
      </Link>

      <style>{`
        @keyframes supernova {
          0% { transform: scale(0.1); opacity: 0.6; }
          50% { opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        .animate-supernova {
          animation-name: supernova;
          animation-timing-function: ease-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}

function randomColor() {
  const neonColors = ["#ff00ff", "#00ffff", "#ff9900", "#00ff00", "#ff0000", "#00f9ff", "#ff44cc", "#ffcc00"];
  return neonColors[Math.floor(Math.random() * neonColors.length)];
}

export default Previous;
