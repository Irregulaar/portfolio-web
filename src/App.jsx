import { useState, useEffect } from "react";
import "./styles/global.css";
import TypedText from "./TypedText";
import { Link } from "react-router-dom";
import FaCode from "./icons/facode.svg?react";
import FaDiscord from "./icons/fadiscord.svg?react";
import FaExternalLinkAlt from "./icons/faexternallinkalt.svg?react";
import FaLightbulb from "./icons/falightbulb.svg?react";
import FaLock from "./icons/falock.svg?react";
import FaQuestion from "./icons/faquestion.svg?react";
import FaVolumeHigh from "./icons/favolumehigh.svg?react";
import FaVolumeXMark from "./icons/favolumexmark.svg?react";
import FaXTwitter from "./icons/faxtwitter.svg?react";
import IoIosArrowBack from "./icons/ioiosarrowback.svg?react";
import IoIosArrowForward from "./icons/ioiosarrowforward.svg?react";
import IoMdAdd from "./icons/iomdadd.svg?react";
import IoMdClose from "./icons/iomdclose.svg?react";
import IoMenu from "./icons/iomenu.svg?react";
import IoReloadOutline from "./icons/ioreloadoutline.svg?react";
import SiCSS3 from "./icons/sicss3.svg?react";
import SiGit from "./icons/sigit.svg?react";
import SiGithub from "./icons/sigithub.svg?react";
import SiHTML5 from "./icons/sihtml5.svg?react";
import SiJavaScript from "./icons/sijavascript.svg?react";
import SiPython from "./icons/sipython.svg?react";
import SiReact from "./icons/sireact.svg?react";
import SiSpotify from "./icons/sispotify.svg?react";
import SiTailwindCSS from "./icons/sitailwindcss.svg?react";
import FaLink from "./icons/falink.svg?react";
import FaYoutube from "./icons/fayoutube.svg?react";
import AiFillInstagram from "./icons/aifillinstagram.svg?react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(0.3);
  const [isFlipped, setIsFlipped] = useState(false);

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
    audio.volume = 0;
  }, []);

  return (
    <>
      <video
        src="/wallpaper.mp4"
        className={`fixed object-cover w-full h-full -z-1 ${isFlipped ? "rotate-180" : ""}`}
        autoPlay
        muted
        loop
      />
      <div
        className={`relative flex flex-col items-center justify-start w-full h-screen overflow-x-hidden custom-scrollbar ${isFlipped ? "flip" : ""}`}
      >
        <div className="absolute left-0 flex flex-row items-center justify-center p-2 w-fit h-15">
          <audio src="/audio.mp3" loop />
          <div
            className="group w-fit h-full bg-[#191919b2] rounded-xl border-1 border-[#131313] shadow-[0px_0px_10px_0px_#000000] shadow-[#333333]
              opacity-90 flex items-center justify-center cursor-pointer p-2 gap-2 transition-transform duration-300"
            onMouseEnter={() => {
              const input = document.querySelector('input[type="range"]');
              input.classList.remove("hidden");
            }}
            onMouseLeave={() => {
              const input = document.querySelector('input[type="range"]');
              input.classList.add("hidden");
            }}
          >
            <div
              onClick={() => {
                if (isPlaying) {
                  const audio = document.querySelector("audio");
                  setPreviousVolume(audio.volume);
                  audio.volume = 0;
                  const input = document.querySelector('input[type="range"]');
                  input.value = 0;
                  setIsPlaying(false);
                } else {
                  const audio = document.querySelector("audio");
                  audio.volume = previousVolume;
                  const input = document.querySelector('input[type="range"]');
                  input.value = previousVolume;
                  setIsPlaying(true);
                }
              }}
              className="flex flex-col items-center justify-center gap-2"
            >
              {isPlaying ? (
                <FaVolumeHigh className="w-5 h-5 text-white" alt="Volume High" />
              ) : (
                <FaVolumeXMark className="w-5 h-5 text-white" alt="Volume Muted" />
              )}
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              defaultValue="0"
              className="hidden w-16 h-3 bg-[#0d0d0d8b] border-1 border-[#191919] rounded-lg appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              onChange={(e) => {
                if (e.target.value === "0") {
                  setIsPlaying(false);
                } else {
                  setIsPlaying(true);
                  const audio = document.querySelector("audio");
                  audio.volume = e.target.value;
                }
              }}
            />
          </div>
        </div>
        <div
          className={`relative w-[90%] md:w-[70%] h-fit bg-[#191919b2] rounded-xl shadow-[0px_0px_100px_10px_#000000] shadow-black p-0.5 border-1
            border-[#24252c] mt-20 mb-20`}
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
                <img src="/logo.png" className="w-4 h-4" alt="Logo" />
                <span className="text-[#78949d] flex items-center h-full text-[0.8rem] mr-auto">Portafolio de Kevin</span>
                <IoMdClose className="w-4 h-4 text-[#78949d]" alt="Close" />
              </div>
              <IoMdAdd className="w-4 h-4 text-[#78949d]" alt="Add" />
            </div>

            <div
              className="flex flex-col relative items-center w-full h-full rounded-b-xl rounded-t-xl bg-transparent border-1 backdrop-blur-sm
                border-[#24252c]"
            >
              <div className="w-full h-8 rounded-t-xl flex justify-between items-center font-medium p-[3px] gap-3 bg-[#1e1f24]">
                <div className="flex flex-row gap-3 ml-3 mr-auto">
                  <Link to="/previous" aria-label="Anterior">
                    <IoIosArrowBack
                      className="w-5 h-5 text-[#78949d] hover:text-white transition-all duration-300 cursor-pointer"
                      alt="Back"
                    />
                  </Link>

                  <Link to="/next" aria-label="Siguiente">
                    <IoIosArrowForward
                      className="w-5 h-5 text-[#78949d] hover:text-white transition-all duration-300 cursor-pointer"
                      alt="Forward"
                    />
                  </Link>

                  <IoReloadOutline
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="w-5 h-5 text-[#78949d] hover:scale-110 transition-all duration-300 cursor-pointer"
                    alt="Reload"
                  />
                </div>
                <div
                  className="flex flex-row rounded-md mr-auto bg-[#15161a] justify-start gap-3 items-center text-center text-[0.7rem] h-full w-fit md:w-[60%]
                    p-2"
                >
                  <FaLock className="w-4 h-4 text-[#78949d]" alt="Lock" />
                  <span className="text-[#78949d] text-[12px] text-">https://irregulaaar.vercel.app/</span>
                </div>

                <menu className="flex-row items-center justify-center hidden mr-3 md:flex">
                  <IoMenu className="w-5 h-5 text-[#78949d]" alt="Menu" />
                </menu>
              </div>
              <div className="flex flex-row items-center w-full gap-3 p-1 pl-2 pb-2 h-fit bg-[#1e1f24] flex-wrap">
                <a href="https://github.com/Irregulaar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <SiGithub
                    className="w-4 h-4 text-white transition-all duration-300 cursor-pointer hover:text-white hover:scale-110"
                    alt="GitHub"
                  />
                </a>
                <a href="https://x.com/Irregulaaaar" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaXTwitter
                    className="w-4 h-4 text-black transition-all duration-300 cursor-pointer hover:scale-110"
                    alt="Twitter"
                  />
                </a>

                <div className="relative group">
                  <FaDiscord
                    className="w-4 h-4 text-[#5865F2] transition-all duration-300 cursor-pointer hover:scale-110"
                    alt="Discord"
                  />
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
                  aria-label="Spotify"
                >
                  <SiSpotify
                    className="w-4 h-4 text-[#1DB954] transition-all duration-300 cursor-pointer hover:scale-110"
                    alt="Spotify"
                  />
                </a>

                <a href="https://www.youtube.com/@irregulaar" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube
                    className="w-4 h-4 text-[#FF0000] transition-all duration-300 cursor-pointer hover:scale-110"
                    alt="YouTube"
                  />
                </a>

                <a
                  href="https://www.instagram.com/irregulaar_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#F77737] transition-all duration-300
                    cursor-pointer hover:scale-110"
                >
                  <AiFillInstagram className="w-5 h-5" />
                </a>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <span
                    className="text-[#78949d] text-[9px] text-nowrap md:text-[12px] p-1 hover:underline rounded-lg cursor-pointer transition-all duration-300
                      z-10"
                    onClick={() => {
                      document.getElementById("technologies").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    /Tecnologías
                  </span>
                  <span
                    className="text-[#78949d] text-[9px] text-nowrap md:text-[12px] p-1 hover:underline rounded-lg cursor-pointer transition-all duration-300
                      z-10"
                    onClick={() => {
                      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    /Proyectos
                  </span>
                  <span
                    className="text-[#78949d] text-[9px] text-nowrap md:text-[12px] p-1 hover:underline rounded-lg cursor-pointer transition-all duration-300
                      z-10"
                    onClick={() => {
                      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    /Sobre mí
                  </span>
                </div>
              </div>
              <div className="relative w-full h-50">
                <video
                  rel="preload"
                  src="/top.mp4"
                  alt="Video"
                  className="absolute object-cover object-bottom w-full h-full mask-image"
                  autoPlay
                  muted
                  loop
                />
              </div>

              <style jsx>{`
                .mask-image {
                  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                }
              `}</style>

              <div className="relative flex flex-col items-center w-full h-fit text-[#87a5ae] mt-10 mb-15">
                <span
                  className="text-center text-[4rem] text-[#97bac5] leading-10 mb-4 text-shadow-lg/50 text-shadow-[#708a92] font-[false]
                    drop-shadow-[0_0_5px_rgba(151,186,197,0.7)]"
                  rel="preload"
                >
                  Kevin Sanchez
                </span>
                <TypedText texts={["Desarrollador Frontend"]} />
              </div>

              <div
                id="technologies"
                className="w-[80%] flex flex-col justify-center items-center bg-[#9e75c734] mb-15 rounded-md"
              >
                <div
                  className="w-full h-10 bg-[#985dd36a] border-1 border-[#985dd3] rounded-md flex shadow-[0px_0px_10px_0px_#000000] shadow-[#985dd36a]
                    justify-start items-center pl-2 flex-row gap-3"
                >
                  <FaLightbulb className="w-5 h-5 text-[#b8a7c4]" alt="Technologies" />
                  <span className="text-[#b8a7c4] text-[1.3rem] font-[false] text-shadow-lg/50 text-shadow-[#9b88a9] drop-shadow-[0_0_10px_rgba(184,167,196,1)]">
                    Tecnologías
                  </span>
                </div>
                <div className="w-[90%] flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center w-full gap-5 mb-5">
                    <div className="flex flex-col items-center justify-center mt-5">
                      <h3 className="mb-2 text-lg font-medium text-[#b8a7c4]">Lenguajes</h3>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <div
                          className="px-2 py-1 font-medium text-white bg-[#e34f2622] rounded-md flex flex-row gap-2 items-center transition-all duration-300
                            hover:-translate-y-1 hover:opacity-100 opacity-90"
                        >
                          <SiHTML5 className="w-5 h-5 text-[#E34F26]" alt="HTML5" />
                          HTML
                        </div>
                        <div
                          className="px-2 py-1 font-medium text-white bg-[#1572b622] rounded-md flex flex-row gap-2 items-center transition-all duration-300
                            hover:-translate-y-1 hover:opacity-100 opacity-90"
                        >
                          <SiCSS3 className="w-5 h-5 text-[#1572B6]" alt="CSS3" />
                          CSS
                        </div>
                        <div
                          className="px-2 py-1 font-medium text-white bg-[#f7df1e33] rounded-md flex flex-row gap-2 items-center transition-all duration-300
                            hover:-translate-y-1 hover:opacity-100 opacity-90"
                        >
                          <SiJavaScript className="w-5 h-5 text-[#F7DF1E]" alt="JavaScript" />
                          JavaScript
                        </div>
                        <div
                          className="px-2 py-1 font-medium text-white bg-[#3776ab22] rounded-md flex flex-row gap-2 items-center transition-all duration-300
                            hover:-translate-y-1 hover:opacity-100 opacity-90"
                        >
                          <SiPython className="w-5 h-5 text-[#3776AB]" alt="Python" />
                          Python
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <h3 className="mb-2 text-lg font-medium text-[#b8a7c4]">Frameworks</h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <div
                          className="px-2 py-1 font-medium text-white bg-[#61dafb22] rounded-md flex flex-row gap-2 items-center transition-all duration-300
                            hover:-translate-y-1 hover:opacity-100 opacity-90"
                        >
                          <SiReact className="w-5 h-5 text-[#61DAFB]" alt="React" />
                          React
                        </div>
                        <div
                          className="px-2 py-1 font-medium text-white bg-[#06b6d422] rounded-md flex flex-row gap-2 items-center transition-all duration-300
                            hover:-translate-y-1 hover:opacity-100 opacity-90"
                        >
                          <SiTailwindCSS className="w-5 h-5 text-[#06B6D4]" alt="Tailwind CSS" />
                          Tailwind
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <h3 className="mb-2 text-lg font-medium text-[#b8a7c4]">Herramientas</h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <div
                          className="px-2 py-1 font-medium text-white bg-[#f0503222] rounded-md flex flex-row gap-2 items-center transition-all duration-300
                            hover:-translate-y-1 hover:opacity-100 opacity-90"
                        >
                          <SiGit className="w-5 h-5 text-[#F05032]" alt="Git" />
                          Git
                        </div>
                        <div
                          className="px-2 py-1 font-medium text-white bg-[#ffffff11] rounded-md flex flex-row gap-2 items-center transition-all duration-300
                            hover:-translate-y-1 hover:opacity-100 opacity-90"
                        >
                          <SiGithub className="w-5 h-5 text-white" alt="GitHub" />
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
                    justify-start items-center pl-2 flex-row gap-3"
                >
                  <FaCode className="w-5 h-5 text-[#8fcea6]" alt="Code" />
                  <span className="text-[#8fcea6] text-[1.3rem] font-[false] text-shadow-lg/50 text-shadow-[#7db595] drop-shadow-[0_0_10px_rgba(143,206,166,1)]">
                    Proyectos
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[95%] mb-2">
                  <a
                    href="https://codeknockout.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col relative h-fit bg-[#1a1a1aeb] backdrop-blur-sm rounded-lg transition-all duration-300 overflow-hidden
                      hover:-translate-y-1 hover:drop-shadow-[0_0_5px_rgba(143,206,166,0.3)]"
                  >
                    <img
                      src="/projects/codeknockout.webp"
                      className="object-cover w-full h-fit transition-transform duration-700"
                      alt="Code Knockout"
                    />
                    <div className="absolute w-full h-fit flex items-center gap-1 justify-end p-1 text-white">
                      <a
                        href="https://codeknockouoot.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 bg-black/70 rounded p-1 flex justify-center items-center duration-300 opacity-50 group-hover:opacity-100 z-100"
                      >
                        <FaLink alt="Falink" className="w-7 h-7" />
                      </a>
                      <FaExternalLinkAlt
                        className="w-7 h-7 font-medium transition-all p-1 bg-black/70 rounded duration-300 opacity-50 group-hover:opacity-100"
                        alt="External Link"
                      />
                    </div>

                    <div className="flex flex-col gap-2 p-3 justify-start">
                      <span className="text-3xl font-[false] text-white">Code Knockout</span>
                      <span className="text-sm text-[#c9c9c9]">
                        Un sitio web dinámico para una competencia de programación con registro y tabla de clasificación.
                      </span>
                      <div className="relative w-full flex-wrap h-fit rounded-lg gap-1 flex flex-row mt-1">
                        <span className="bg-[#e34f26] text-white text-xs px-2 py-1 rounded">HTML</span>
                        <span className="bg-[#1572b6] text-white text-xs px-2 py-1 rounded">CSS</span>
                        <span className="bg-[#f7df1e] text-black text-xs px-2 py-1 rounded">JavaScript</span>
                        <span className="bg-[#61DAFB] text-black text-xs px-2 py-1 rounded">React</span>
                        <span className="bg-[#06B6D4] text-black text-xs px-2 py-1 rounded">Tailwind</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://yourtodoo.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col relative h-fit bg-[#1a1a1aeb] backdrop-blur-sm rounded-lg transition-all duration-300 overflow-hidden
                      hover:-translate-y-1 hover:drop-shadow-[0_0_5px_rgba(143,206,166,0.3)]"
                  >
                    <img
                      src="/projects/yourtodoo.webp"
                      className="object-cover w-full h-fit transition-transform duration-700"
                      alt="YourToDoo"
                    />
                    <div className="absolute w-full h-fit flex items-center gap-1 justify-end p-1 text-white">
                      <a
                        href="https://yourtodoo.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 bg-black/70 rounded p-1 flex justify-center items-center duration-300 opacity-50 group-hover:opacity-100 z-100"
                      >
                        <FaLink className="w-7 h-7" />
                      </a>
                      <FaExternalLinkAlt className="w-7 h-7 font-medium transition-all p-1 bg-black/70 rounded duration-300 opacity-50 group-hover:opacity-100" />
                    </div>

                    <div className="flex flex-col gap-2 p-3 justify-start">
                      <span className="text-3xl text-white font-[false]">YourToDoo</span>
                      <span className="text-sm text-[#c9c9c9]">Una aplicación de tareas con una interfaz limpia y moderna.</span>
                      <div className="relative w-full flex-wrap h-fit rounded-lg gap-1 flex flex-row mt-1">
                        <span className="bg-[#e34f26] text-white text-xs px-2 py-1 rounded">HTML</span>
                        <span className="bg-[#1572b6] text-white text-xs px-2 py-1 rounded">CSS</span>
                        <span className="bg-[#f7df1e] text-black text-xs px-2 py-1 rounded">JavaScript</span>
                        <span className="bg-[#61DAFB] text-black text-xs px-2 py-1 rounded">React</span>
                        <span className="bg-[#06B6D4] text-black text-xs px-2 py-1 rounded">Tailwind</span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://simplestwebrpg.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col relative h-fit bg-[#1a1a1aeb] backdrop-blur-sm rounded-lg transition-all duration-300 overflow-hidden
                      hover:-translate-y-1 hover:drop-shadow-[0_0_5px_rgba(143,206,166,0.3)]"
                  >
                    <img
                      src="/projects/simplestwebrpg.webp"
                      className="object-cover w-full h-fit transition-transform duration-700"
                      alt="Simplest Web RPG"
                    />
                    <div className="absolute w-full h-fit flex items-center gap-1 justify-end p-1 text-white">
                      <a
                        href="https://simplestwebrpg.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 bg-black/70 rounded p-1 flex justify-center items-center duration-300 opacity-50 group-hover:opacity-100 z-100"
                      >
                        <FaLink className="w-7 h-7" />
                      </a>
                      <FaExternalLinkAlt className="w-7 h-7 font-medium transition-all p-1 bg-black/70 rounded duration-300 opacity-50 group-hover:opacity-100" />
                    </div>

                    <div className="flex flex-col gap-2 p-3 justify-start">
                      <span className="text-3xl text-white font-[false]">Simplest Web RPG</span>
                      <span className="text-sm text-[#c9c9c9]">
                        Una app RPG básica jugable en navegador, con combates simples y progresión.
                      </span>
                      <div className="relative w-full flex-wrap h-fit rounded-lg gap-1 flex flex-row mt-1">
                        <span className="bg-[#e34f26] text-white text-xs px-2 py-1 rounded">HTML</span>
                        <span className="bg-[#1572b6] text-white text-xs px-2 py-1 rounded">CSS</span>
                        <span className="bg-[#f7df1e] text-black text-xs px-2 py-1 rounded">JavaScript</span>
                        <span className="bg-[#61DAFB] text-black text-xs px-2 py-1 rounded">React</span>
                        <span className="bg-[#06B6D4] text-black text-xs px-2 py-1 rounded">Tailwind</span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://noctis-jq9a.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col relative h-fit bg-[#1a1a1aeb] backdrop-blur-sm rounded-lg transition-all duration-300 overflow-hidden
                      hover:-translate-y-1 hover:drop-shadow-[0_0_5px_rgba(143,206,166,0.3)]"
                  >
                    <img
                      src="/projects/noctis.webp"
                      className="object-cover w-full h-fit transition-transform duration-700"
                      alt="Noctis"
                    />
                    <div className="absolute w-full h-fit flex items-center gap-1 justify-end p-1 text-white">
                      <a
                        href="https://noctis-jq9a.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 bg-black/70 rounded p-1 flex justify-center items-center duration-300 opacity-50 group-hover:opacity-100 z-100"
                      >
                        <FaLink className="w-7 h-7" />
                      </a>
                      <FaExternalLinkAlt className="w-7 h-7 font-medium transition-all p-1 bg-black/70 rounded duration-300 opacity-50 group-hover:opacity-100" />
                    </div>

                    <div className="flex flex-col gap-2 p-3 justify-start">
                      <span className="text-3xl text-white font-[false]">Noctis</span>
                      <span className="text-sm text-[#c9c9c9]">
                        Chat web en tiempo real con mensajes de voz y envío de archivos.
                      </span>
                      <div className="relative w-full flex-wrap h-fit rounded-lg gap-1 flex flex-row mt-1">
                        <span className="bg-[#e34f26] text-white text-xs px-2 py-1 rounded">HTML</span>
                        <span className="bg-[#1572b6] text-white text-xs px-2 py-1 rounded">CSS</span>
                        <span className="bg-[#f7df1e] text-black text-xs px-2 py-1 rounded">JavaScript</span>
                        <span className="bg-[#61DAFB] text-black text-xs px-2 py-1 rounded">React</span>
                        <span className="bg-[#06B6D4] text-black text-xs px-2 py-1 rounded">Tailwind</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div
                id="about"
                className="w-[80%] h-fit flex flex-col gap-3 justify-center items-center bg-[#3b82f633] mb-15 rounded-md"
              >
                <div
                  className="w-full h-10 bg-[#3b82f66a] border-1 border-[#60a5fa] rounded-md flex shadow-[0px_0px_10px_0px_#000000] shadow-[#60a5fa]
                    justify-start pl-2 items-center gap-3 mb-5"
                >
                  <FaQuestion className="w-5 h-5 text-[#bfdbfe]" alt="Question" />
                  <span className="text-[#bfdbfe] text-[1.3rem] font-[false] text-shadow-lg/50 text-shadow-[#93c5fd] drop-shadow-[0_0_10px_rgba(191,219,254,1)]">
                    Sobre mí
                  </span>
                </div>

                <div className="flex flex-row flex-wrap items-center justify-center w-full gap-4 p-5 pt-0 pb-0 mb-7">
                  <div className="flex flex-col w-full gap-8">
                    <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                      <div className="w-50 h-50">
                        <div className="w-full h-full overflow-hidden rounded-full border-2 border-[#1e3a8a]">
                          <img src="/pfp.webp" className="object-cover object-top w-full h-full" alt="PFP" />
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-start flex-1 gap-2 md:items-start">
                        <span className="text-[#bfdbfe] text-[2rem] font-regular w-[90%] text-center md:text-start">
                          ¡Hola! Soy Kevin
                        </span>
                        <span className="text-[#bfdbfe] text-[1rem] font-regular w-[90%] text-center md:text-start">
                          Un chico colombiano de 20 años que se adentro en el mundo del <strong>desarrollo web</strong> en{" "}
                          <strong>marzo de 2025</strong>. Ya sabía algo de programación, pero nunca habia estudiado nada
                          relacionado con <strong>frontend</strong>. Desde que empecé, lo he disfrutado mucho, especialmente la{" "}
                          <strong>parte visual</strong> y el <strong>diseño</strong>. Todavía estoy aprendiendo, pero me gusta
                          cada vez más.
                        </span>
                      </div>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 text-[#bfdbfe]">
                      <div className="bg-[#3b82f633] p-4 rounded-lg border-1 border-[#60a5fa] h-full">
                        <h3 className="mb-2 font-medium">Enfoque Actual</h3>
                        <p className="text-sm">
                          Actualmente me estoy enfocando en dominar React y expandir mi conocimiento en frameworks frontend
                          modernos.
                        </p>
                      </div>

                      <div className="bg-[#3b82f633] p-4 rounded-lg border-1 border-[#60a5fa] h-full">
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
              <div
                className="text-[#fff] text-center text-nowrap w-full justify-center items-center font-regular flex-col flex gap-1 mt-10 text-[10px]
                  md:text-[12px]"
              >
                <div className="w-full h-px bg-white opacity-20"></div>
                <div className="flex flex-row justify-between md:justify-center md:gap-10 w-full px-2 items-center">
                  <p>
                    Hecho con <span className="text-red-500">❤</span> por Irregular
                  </p>
                  <p className="opacity-70">Última actualización: Abril 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
