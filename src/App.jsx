import { useState, useEffect } from "react";
import "./styles/global.css";
import { FaLightbulb } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoReloadOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiPython, SiGit, SiGithub, SiSpotify } from "react-icons/si";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import TypedText from "./TypedText";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.querySelector("audio");
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = document.querySelector("audio");
    audio.volume = 0.3;
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-start w-full h-screen overflow-x-hidden custom-scrollbar">
      <video src="/wallpaper.mp4" className="fixed object-cover w-full h-full -z-1" autoPlay muted loop />
      <div className="absolute left-0 flex flex-row items-center justify-center p-2 w-fit h-15">
        <audio src="/audio.mp3" loop />
        <div
          className="w-fit h-full bg-[#191919b2] rounded-xl border-1 border-[#131313] shadow-[0px_0px_10px_0px_#000000] shadow-[#333333] opacity-90
            flex items-center justify-center cursor-pointer p-2 gap-2 transition-transform duration-300"
          onClick={() => {
            const input = document.querySelector('input[type="range"]');
            input.classList.toggle("hidden");
            setIsPlaying(true);
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <FaVolumeHigh className="text-2xl text-white" />
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            defaultValue="0.3"
            className="hidden w-16 h-3 bg-[#0d0d0d8b] border-1 border-[#191919] rounded-lg appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
            onChange={(e) => {
              const audio = document.querySelector("audio");
              audio.volume = e.target.value;
            }}
          />
        </div>
      </div>
      <div
        className="relative w-[90%] md:w-[70%] h-fit bg-[#191919b2] rounded-xl shadow-[0px_0px_100px_10px_#000000] shadow-black p-0.5 border-1
          border-[#24252c] mt-20"
      >
        <div className="relative z-10 flex flex-col items-start justify-start w-full h-full">
          <div className="flex flex-row items-center gap-2 p-1 pt-0.5 pl-2 h-7 bg-[#191919] rounded-t-xl w-full">
            <div className="flex flex-row gap-1.5 h-full justify-center items-center">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            </div>
            <div
              className="flex flex-row items-center justify-center h-full gap-2 min-w-fit text-center rounded font-medium w-[30%] md:w-[20%] bg-[#1e1f24]
                border-1 border-[#24252c] pr-2 pl-2 p-0"
            >
              <img src="/logo.png" className="w-4 h-4" />
              <span className="text-[#78949d] flex items-center h-full text-[0.8rem] mr-auto">Portafolio de Kevin</span>
              <IoMdClose className="text-[#78949d] text-[1rem]" />
            </div>
            <IoMdAdd className="text-[#78949d] text-[1rem]" />
          </div>

          <div className="flex flex-col relative items-center w-full h-full rounded-b-xl rounded-t-xl bg-[#1e1f24cb] border-1 border-[#24252c]">
            <div className="w-full h-8 rounded-t-xl flex justify-between items-center font-medium p-[3px]">
              <div className="flex-row hidden ml-3 mr-auto md:flex">
                <IoIosArrowBack className="text-[#78949d] text-[1.1rem]" />
                <IoIosArrowForward className="text-[#78949d] text-[1.1rem]" />
                <IoReloadOutline className="text-[#78949d] text-[1.1rem] ml-3" />
              </div>
              <div
                className="flex flex-row rounded-md mr-auto bg-[#15161a] justify-start gap-3 items-center text-center text-[0.7rem] h-full w-full md:w-[60%]
                  p-2"
              >
                <FaLock className="text-[#78949d] text-[0.9rem]" />
                <span className="text-[#78949d] text-[0.9rem]">https://irregulaaar.vercel.app/</span>
              </div>

              <menu className="flex-row items-center justify-center hidden mr-3 md:flex">
                <IoMenu className="text-[#78949d] text-[1.3rem]" />
              </menu>
            </div>
            <div className="flex flex-row items-center w-full gap-3 p-1 pl-2 mb-1 h-7">
              <a href="https://github.com/Irregulaar" target="_blank" rel="noopener noreferrer">
                <SiGithub className="text-[#fff] hover:text-white text-xl transition-all duration-300 cursor-pointer hover:scale-110" />
              </a>
              <a href="https://x.com/Irregulaaaar" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-xl text-black transition-all duration-300 cursor-pointer hover:scale-110" />
              </a>

              <div className="relative group">
                <FaDiscord className="text-[#5865F2] text-xl transition-all duration-300 cursor-pointer hover:scale-110" />
                <div
                  className="discord-tooltip absolute hidden group-hover:block bottom-0 left-0 bg-[#1a1a1a] text-[#9ca3af] text-xs px-2 py-1 rounded-md
                    whitespace-nowrap select-text cursor-pointer z-100"
                  onClick={() => {
                    navigator.clipboard.writeText("irregulaaar");
                    const tooltip = document.querySelector(".discord-tooltip");
                    tooltip.textContent = "¡Copiado!";
                    setTimeout(() => {
                      tooltip.textContent = "@irregulaaar";
                    }, 1000);
                  }}
                >
                  @irregulaaar
                </div>
              </div>
              <a
                href="https://open.spotify.com/user/31fhfilaa7otr4c4buj3rcucuuwe?si=bce5c6e5b5384054"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiSpotify className="text-[#1DB954] text-[1.3rem] transition-transform duration-300 cursor-pointer hover:scale-110" />
              </a>

              <span
                className="text-[#78949d] text-[10px] p-1 hover:underline rounded-lg cursor-pointer transition-all duration-300 z-10"
                onClick={() => {
                  document.getElementById("technologies").scrollIntoView({ behavior: "smooth" });
                }}
              >
                /Tecnologías
              </span>
              <span
                className="text-[#78949d] text-[10px] p-1 hover:underline rounded-lg cursor-pointer transition-all duration-300 z-10"
                onClick={() => {
                  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                }}
              >
                /Proyectos
              </span>
              <span
                className="text-[#78949d] text-[10px] p-1 hover:underline rounded-lg cursor-pointer transition-all duration-300 z-10"
                onClick={() => {
                  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                }}
              >
                /Sobre mí
              </span>
            </div>
            <div className="relative w-full h-50">
              <img src="/top.gif" className="absolute object-cover object-bottom w-full h-full mask-image" />
            </div>

            <style jsx>{`
              .mask-image {
                mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
              }
            `}</style>

            <div className="relative flex flex-col items-center w-full h-fit text-[#78949d] mt-10 mb-15">
              <span className="text-center text-[4rem] leading-10 mb-4 text-shadow-lg/50 font-[false]">Kevin Sanchez</span>
              <TypedText texts={["Desarrollador Frontend"]} />
            </div>

            <div id="technologies" className="w-[80%] flex flex-col justify-center items-center bg-[#9e75c734] mb-15 rounded-md">
              <div
                className="w-full h-10 bg-[#985dd36a] border-1 border-[#985dd3] rounded-md flex shadow-[0px_0px_10px_0px_#000000] shadow-[#985dd36a]
                  justify-start items-center pl-2 flex-row gap-1"
              >
                <FaLightbulb className="text-[#b8a7c4] text-[1.2rem] font-medium" />
                <span className="text-[#b8a7c4] text-[1.3rem] font-[false]">Tecnologías</span>
              </div>
              <div className="w-[90%] flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full gap-5 mb-5">
                  <div className="flex flex-col items-center justify-center mt-5">
                    <h3 className="mb-2 text-lg font-medium text-[#b8a7c4]">Lenguajes</h3>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      <div
                        className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                          hover:scale-105 transition-transform"
                      >
                        <SiHtml5 className="text-[#E34F26] text-xl" />
                        HTML
                      </div>
                      <div
                        className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                          hover:scale-105 transition-transform"
                      >
                        <SiCss3 className="text-[#1572B6] text-xl" />
                        CSS
                      </div>
                      <div
                        className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                          hover:scale-105 transition-transform"
                      >
                        <SiJavascript className="text-[#F7DF1E] text-xl" />
                        JavaScript
                      </div>
                      <div
                        className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                          hover:scale-105 transition-transform"
                      >
                        <SiPython className="text-[#3776AB] text-xl" />
                        Python
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <h3 className="mb-2 text-lg font-medium text-[#b8a7c4]">Frameworks</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <div
                        className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                          hover:scale-105 transition-transform"
                      >
                        <SiReact className="text-[#61DAFB] text-xl" />
                        React
                      </div>
                      <div
                        className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                          hover:scale-105 transition-transform"
                      >
                        <SiTailwindcss className="text-[#06B6D4] text-xl" />
                        Tailwind
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <h3 className="mb-2 text-lg font-medium text-[#b8a7c4]">Herramientas</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <div
                        className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                          hover:scale-105 transition-transform"
                      >
                        <SiGit className="text-[#F05032] text-xl" />
                        Git
                      </div>
                      <div
                        className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                          hover:scale-105 transition-transform"
                      >
                        <SiGithub className="text-xl text-white" />
                        GitHub
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="projects" className="w-[80%] flex flex-col justify-center items-center bg-[#16a34a34] mb-15 rounded-md">
              <div
                className="w-full h-10 bg-[#16a34a6a] border-1 border-[#16a34a] shadow-[0px_0px_10px_0px_#000000] shadow-[#16a34a] rounded-md mb-5 flex
                  justify-start items-center pl-2 flex-row gap-1"
              >
                <FaCode className="text-[#8fcea6] text-[1.2rem] font-medium" />
                <span className="text-[#8fcea6] text-[1.3rem] font-[false]">Proyectos</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[95%] mb-5">
                <a
                  href="https://codeknockout.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 bg-[#1a1a1a] p-5 rounded-lg border-1 border-[#2f2f2f] transition-all duration-300 card-3d
                    overflow-hidden"
                >
                  <div className="flex flex-row items-center justify-between text-white">
                    <span className="text-xl font-medium terminal-font">Code Knockout</span>
                    <FaExternalLinkAlt className="text-lg font-medium transition-all duration-300 opacity-50 group-hover:opacity-100 group-hover:scale-110" />
                  </div>
                  <span className="text-sm text-[#c9c9c9]">
                    Un sitio web dinámico para una competencia de programación con registro y tabla de clasificación.
                  </span>
                  <div className="relative w-full h-48 mt-auto overflow-hidden rounded-lg">
                    <img
                      src="/projects/codeknockout.webp"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity
                        duration-300 flex items-end"
                    >
                      <div className="w-full p-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-[#e34f26] text-white text-xs px-2 py-1 rounded">HTML</span>
                          <span className="bg-[#1572b6] text-white text-xs px-2 py-1 rounded">CSS</span>
                          <span className="bg-[#f7df1e] text-black text-xs px-2 py-1 rounded">JavaScript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://yourtodoo.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 bg-[#1a1a1a] p-5 rounded-lg border-1 border-[#2f2f2f] transition-all duration-300 card-3d
                    overflow-hidden"
                >
                  <div className="flex flex-row items-center justify-between text-white">
                    <span className="text-xl font-medium terminal-font">YourToDoo</span>
                    <FaExternalLinkAlt className="text-lg font-medium transition-all duration-300 opacity-50 group-hover:opacity-100 group-hover:scale-110" />
                  </div>
                  <span className="text-sm text-[#c9c9c9]">Una aplicación de tareas con una interfaz limpia y moderna.</span>
                  <div className="relative w-full h-48 overflow-hidden rounded-lg">
                    <img
                      src="/projects/yourtodoo.webp"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity
                        duration-300 flex items-end"
                    >
                      <div className="w-full p-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-[#e34f26] text-white text-xs px-2 py-1 rounded">HTML</span>
                          <span className="bg-[#1572b6] text-white text-xs px-2 py-1 rounded">CSS</span>
                          <span className="bg-[#f7df1e] text-black text-xs px-2 py-1 rounded">JavaScript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://simplestwebrpg.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 bg-[#1a1a1a] p-5 rounded-lg border-1 border-[#2f2f2f] transition-all duration-300 card-3d
                    overflow-hidden"
                >
                  <div className="flex flex-row items-center justify-between text-white">
                    <span className="text-xl font-medium terminal-font">Simplest Web RPG</span>
                    <FaExternalLinkAlt className="text-lg font-medium transition-all duration-300 opacity-50 group-hover:opacity-100 group-hover:scale-110" />
                  </div>
                  <span className="text-sm text-[#c9c9c9]">
                    Una aplicación de chat en tiempo real con funciones como compartir archivos y mensajes de voz.
                  </span>
                  <div className="relative w-full h-48 overflow-hidden rounded-lg">
                    <img
                      src="/projects/simplestwebrpg.webp"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity
                        duration-300 flex items-end"
                    >
                      <div className="w-full p-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-[#e34f26] text-white text-xs px-2 py-1 rounded">HTML</span>
                          <span className="bg-[#1572b6] text-white text-xs px-2 py-1 rounded">CSS</span>
                          <span className="bg-[#f7df1e] text-black text-xs px-2 py-1 rounded">JavaScript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://noctis-jq9a.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 bg-[#1a1a1a] p-5 rounded-lg border-1 border-[#2f2f2f] transition-all duration-300 card-3d
                    overflow-hidden"
                >
                  <div className="flex flex-row items-center justify-between text-white">
                    <span className="text-xl font-medium terminal-font">Noctis</span>
                    <FaExternalLinkAlt className="text-lg font-medium transition-all duration-300 opacity-50 group-hover:opacity-100 group-hover:scale-110" />
                  </div>
                  <span className="text-sm text-[#c9c9c9]">
                    Una aplicación de chat en tiempo real con funciones como compartir archivos y mensajes de voz.
                  </span>
                  <div className="relative w-full h-48 overflow-hidden rounded-lg">
                    <img
                      src="/projects/noctis.webp"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity
                        duration-300 flex items-end"
                    >
                      <div className="w-full p-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-[#e34f26] text-white text-xs px-2 py-1 rounded">HTML</span>
                          <span className="bg-[#1572b6] text-white text-xs px-2 py-1 rounded">CSS</span>
                          <span className="bg-[#f7df1e] text-black text-xs px-2 py-1 rounded">JavaScript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div
              id="about"
              className="w-[80%] h-fit flex flex-col gap-3 justify-center items-center bg-[#e3e3e334] mb-15 rounded-md"
            >
              <div
                className="w-full h-10 bg-[#e3e3e36a] border-1 border-[#c8c8c8] rounded-md flex shadow-[0px_0px_10px_0px_#000000] shadow-[#838383]
                  justify-start pl-2 items-center gap-1 mb-5"
              >
                <FaQuestion className="text-[#cecece] text-[1rem] font-regular" />
                <span className="text-[#cecece] text-[1.3rem] font-[false]">Sobre mí</span>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-center w-full gap-4 p-5 pt-0 pb-0 mb-7">
                <div className="flex flex-col w-full gap-8">
                  <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                    <div className="w-50 h-50">
                      <div className="w-full h-full overflow-hidden rounded-full border-2 border-[#2f2f2f]">
                        <img src="/pfp.webp" className="object-cover object-top w-full h-full" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-start flex-1 gap-2 md:items-start">
                      <span className="text-[#cecece] text-[2rem] font-regular w-[90%] text-center md:text-start">
                        ¡Hola! Soy Kevin
                      </span>
                      <span className="text-[#cecece] text-[1rem] font-regular w-[90%] text-center md:text-start">
                        Soy un chico colombiano de 20 años que comenzó con <strong>desarrollo web</strong> hace{" "}
                        <strong>un mes</strong>. Ya sabía algo de programación, pero nunca había probado nada relacionado con{" "}
                        <strong>frontend</strong>. Desde que empecé, lo he disfrutado mucho, especialmente la{" "}
                        <strong>parte visual</strong> y el <strong>diseño</strong>. Todavía estoy aprendiendo, pero me gusta cada
                        vez más.
                      </span>
                    </div>
                  </div>

                  <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 text-[#cecece]">
                    <div className="bg-[#e3e3e336] p-4 rounded-lg border-1 border-[#c8c8c8] h-full">
                      <h3 className="mb-2 font-medium">Enfoque Actual</h3>
                      <p className="text-sm">
                        Actualmente me estoy enfocando en dominar React y expandir mi conocimiento en frameworks frontend
                        modernos.
                      </p>
                    </div>

                    <div className="bg-[#e3e3e336] p-4 rounded-lg border-1 border-[#c8c8c8] h-full">
                      <h3 className="mb-2 font-medium terminal-font">Objetivos Futuros</h3>
                      <p className="text-sm">
                        Mi objetivo es convertirme en desarrollador full-stack, aprendiendo tecnologías backend y creando
                        aplicaciones web completas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#fff] text-center font-regular flex-row flex gap-10 mt-20 text-[12px]">
        <p>
          Hecho con <span className="text-red-500">❤</span> por Irregular
        </p>
        <p className="opacity-70">Última actualización: Abril 2025</p>
      </div>
    </div>
  );
}

export default App;
