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

  return (
    <div className="relative flex justify-center w-screen h-screen overflow-x-hidden custom-scrollbar">
      <video src="/wallpaper.mp4" className="fixed object-cover w-full h-full -z-1" autoPlay muted loop />
      <div className="absolute top-0 left-0 flex items-center justify-center p-2 w-15 h-15">
        <audio src="/audio.mp3" loop />
        <div
          className="w-full h-full bg-[#111111] rounded opacity-90 flex items-center justify-center cursor-pointer"
          onClick={() => {
            const input = document.querySelector('input[type="range"]');
            input.classList.toggle("hidden");
            setIsPlaying(true);
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <FaVolumeHigh className="text-2xl text-white" />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          defaultValue="0.3"
          className="hidden absolute left-full w-16 h-2 bg-[#111111] rounded-lg appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
          onChange={(e) => {
            const audio = document.querySelector("audio");
            audio.volume = e.target.value;
          }}
        />
      </div>
      <div
        className="relative w-[90%] md:w-[70%] mt-20 mb-20 h-fit bg-[#191919] rounded-xl shadow-[0px_0px_100px_10px_#000000] shadow-black p-0.5
          border-1 border-[#24252c]"
      >
        <div className="relative flex flex-col w-full h-full">
          <div className="flex flex-row items-center gap-2 p-1 pt-0.5 pl-2 h-7 bg-[#191919] rounded-t-xl">
            <div className="flex flex-row gap-1.5 h-full justify-center items-center">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            </div>
            <div
              className="flex flex-row items-center justify-between h-full min-w-fit text-center rounded font-medium w-[30%] md:w-[20%] bg-[#1e1f24]
                border-1 border-[#24252c] pr-2 pl-2 p-0"
            >
              <span className="text-[#78949d] flex items-center h-full text-[0.8rem]">Kevin's Portfolio</span>
              <IoMdClose className="text-[#78949d] text-[1rem]" />
            </div>
            <IoMdAdd className="text-[#78949d] text-[1rem]" />
          </div>

          <div className="flex flex-col relative items-center w-full h-full rounded-b-xl rounded-t-xl bg-[#1e1f24] border-1 border-[#24252c]">
            <div className="w-full h-8 bg-[#1e1f24] rounded-t-xl flex justify-between items-center font-medium p-[3px]">
              <div className="flex-row hidden ml-3 mr-auto md:flex">
                <IoIosArrowBack className="text-[#78949d] text-[1.1rem]" />
                <IoIosArrowForward className="text-[#78949d] text-[1.1rem]" />
                <IoReloadOutline className="text-[#78949d] text-[1.1rem] ml-3" />
              </div>
              <div
                className="flex flex-row rounded-md mr-auto bg-[#15161a] justify-center gap-5 items-center text-center text-[0.7rem] h-full w-full md:w-[60%]
                  p-2"
              >
                <FaLock className="text-[#78949d] text-[0.9rem] mr-auto" />
                <div className="flex flex-row items-center justify-center gap-5 mr-auto font-bold text-1xl">
                  <span
                    className="text-[#78949d] hover:underline rounded-lg p-1 cursor-pointer transition-all duration-300"
                    onClick={() => {
                      document.getElementById("technologies").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    /Technologies
                  </span>
                  <span
                    className="text-[#78949d] hover:underline rounded-lg p-1 cursor-pointer transition-all duration-300"
                    onClick={() => {
                      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    /Projects
                  </span>
                  <span
                    className="text-[#78949d] hover:underline rounded-lg p-1 cursor-pointer transition-all duration-300"
                    onClick={() => {
                      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    /About
                  </span>
                </div>
              </div>

              <menu className="flex-row items-center justify-center hidden mr-3 md:flex">
                <IoMenu className="text-[#78949d] text-[1.3rem]" />
              </menu>
            </div>
            <div className="flex flex-row items-center w-full gap-3 p-1 pl-2 mb-1 h-7">
              <a href="https://github.com/Irregulaar" target="_blank" rel="noopener noreferrer">
                <img
                  src="/technologies/github.webp"
                  className="object-contain w-5 h-full transition-transform duration-300 cursor-pointer hover:scale-110"
                />
              </a>
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
                <img
                  src="/socials/twitter.webp"
                  className="object-contain w-5 h-full transition-transform duration-300 cursor-pointer hover:scale-110"
                />
              </a>
              {/*
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/socials/instagram.png"
                  className="object-contain w-5 h-full transition-transform duration-300 cursor-pointer hover:scale-110"
                />
              </a> */}

              <div className="relative group">
                <img
                  src="/socials/discord.webp"
                  className="object-contain w-5 h-full transition-transform duration-300 cursor-pointer hover:scale-110"
                />
                <div
                  className="discord-tooltip absolute hidden group-hover:block bottom-0 left-0 bg-[#1a1a1a] text-[#9ca3af] text-xs px-2 py-1 rounded-md
                    whitespace-nowrap select-text cursor-pointer"
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
            </div>
            <div className="relative w-full h-50">
              <img src="/top.gif" className="absolute object-cover object-bottom w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1e1f24]" />
            </div>

            <div className="relative flex flex-col items-center w-full h-fit text-[#78949d] mt-5 mb-15">
              <span className="text-center text-[4rem] leading-10 mb-4 text-shadow-lg/50 font-[false]">Kevin Sanchez</span>
              <span className="text-center text-[1.2rem] font-medium text-shadow-lg/50">Frontend Developer</span>
            </div>

            <div id="technologies" className="w-[80%] flex flex-col gap-3 justify-center items-center">
              <div
                className="w-full h-10 bg-[#985dd36a] border-1 border-[#985dd3] rounded-md flex shadow-[0px_0px_10px_0px_#000000] shadow-[#985dd36a]
                  justify-start items-center pl-2 flex-row gap-1"
              >
                <FaLightbulb className="text-[#b8a7c4] text-[1.2rem] font-medium" />
                <span className="text-[#b8a7c4] text-[1.3rem] font-[false]">Technologies</span>
              </div>

              <div className="flex flex-wrap items-center justify-center w-full gap-2 px-2 mt-3 mb-15">
                <div
                  className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                    hover:scale-105 transition-transform"
                >
                  <img src="/technologies/html.webp" className="object-contain w-5 h-5" />
                  HTML
                </div>
                <div
                  className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                    hover:scale-105 transition-transform"
                >
                  <img src="/technologies/css.webp" className="object-contain w-5 h-5" />
                  CSS
                </div>
                <div
                  className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                    hover:scale-105 transition-transform"
                >
                  <img src="/technologies/javascript.webp" className="object-contain w-5 h-5" />
                  JavaScript
                </div>
                <div
                  className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                    hover:scale-105 transition-transform"
                >
                  <img src="/technologies/react.webp" className="object-contain w-5 h-5" />
                  React
                </div>
                <div
                  className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                    hover:scale-105 transition-transform"
                >
                  <img src="/technologies/tailwind.webp" className="object-contain w-5 h-5" />
                  Tailwind
                </div>
                <div
                  className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                    hover:scale-105 transition-transform"
                >
                  <img src="/technologies/python.webp" className="object-contain w-5 h-5" />
                  Python
                </div>
                <div
                  className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                    hover:scale-105 transition-transform"
                >
                  <img src="/technologies/git.webp" className="object-contain w-5 h-5" />
                  Git
                </div>
                <div
                  className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                    hover:scale-105 transition-transform"
                >
                  <img src="/technologies/github.webp" className="object-contain w-5 h-5" />
                  GitHub
                </div>
                <div
                  className="px-2 py-1 font-medium text-[#9ca3af] bg-[#1a1a1a] border-1 border-[#2f2f2f] rounded-md flex flex-row gap-2 items-center
                    hover:scale-105 transition-transform"
                >
                  <img src="/technologies/sql.webp" className="object-contain w-5 h-5" />
                  SQL
                </div>
              </div>
            </div>

            <div
              id="projects"
              className="w-[80%] h-10 bg-[#16a34a6a] border-1 border-[#16a34a] shadow-[0px_0px_10px_0px_#000000] shadow-[#16a34a] rounded-md mb-5 flex
                justify-start items-center pl-2 flex-row gap-1"
            >
              <FaCode className="text-[#8fcea6] text-[1.2rem] font-medium" />
              <span className="text-[#8fcea6] text-[1.3rem] font-[false]">Projects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%] mb-10">
              <a
                href="https://yourtodoo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 bg-[#1a1a1a] p-4 rounded-lg border-1 border-[#2f2f2f] hover:bg-[#1f1f1f] transition-all duration-300"
              >
                <div className="flex flex-row items-center gap-3">
                  <span className="text-[#9ca3af] text-lg font-medium">YourToDoo</span>
                  <FaExternalLinkAlt className="text-[#9ca3af] text-lg font-medium group-hover:brightness-125 group-hover:scale-110 transition-all duration-300" />
                </div>
                <span className="text-[#6b7280] text-sm">A simple to-do list app</span>
                <img src="/projects/yourtodoo.webp" className="object-cover w-full h-40 rounded-lg" />
              </a>
              <a
                href="https://codeknockout.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 bg-[#1a1a1a] p-4 rounded-lg border-1 border-[#2f2f2f] hover:bg-[#1f1f1f] transition-all duration-300"
              >
                <div className="flex flex-row items-center gap-3">
                  <span className="text-[#9ca3af] text-lg font-medium">Code Knockout</span>
                  <FaExternalLinkAlt className="text-[#9ca3af] text-lg font-medium group-hover:brightness-125 group-hover:scale-110 transition-all duration-300" />
                </div>
                <span className="text-[#6b7280] text-sm">A website for a coding competition.</span>
                <img src="/projects/codeknockout.webp" className="object-cover w-full h-40 rounded-lg" />
              </a>
              <a
                href="https://noctis.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 bg-[#1a1a1a] p-4 rounded-lg border-1 border-[#2f2f2f] hover:bg-[#1f1f1f] transition-all duration-300"
              >
                <div className="flex flex-row items-center gap-3">
                  <span className="text-[#9ca3af] text-lg font-medium">Noctis</span>
                  <FaExternalLinkAlt className="text-[#9ca3af] text-lg font-medium group-hover:brightness-125 group-hover:scale-110 transition-all duration-300" />
                </div>
                <span className="text-[#6b7280] text-sm">A chat website for a group of friends.</span>
                <img src="/projects/noctis.webp" className="object-cover w-full h-40 rounded-lg" />
              </a>
              <a
                href="https://simplestwebrpg.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 bg-[#1a1a1a] p-4 rounded-lg border-1 border-[#2f2f2f] hover:bg-[#1f1f1f] transition-all duration-300"
              >
                <div className="flex flex-row items-center gap-3">
                  <span className="text-[#9ca3af] text-lg font-medium">Simplest Web RPG</span>
                  <FaExternalLinkAlt className="text-[#9ca3af] text-lg font-medium group-hover:brightness-125 group-hover:scale-110 transition-all duration-300" />
                </div>
                <span className="text-[#6b7280] text-sm">A simple game in web browser.</span>
                <img src="/projects/simplestwebrpg.webp" className="object-cover w-full h-40 rounded-lg" />
              </a>
            </div>

            <div id="about" className="w-[80%] h-fit flex flex-col gap-3 justify-center items-center">
              <div
                className="w-full h-10 bg-[#e3e3e36a] border-1 border-[#c8c8c8] rounded-md flex shadow-[0px_0px_10px_0px_#000000] shadow-[#838383]
                  justify-start pl-2 items-center gap-1 mb-5"
              >
                <FaQuestion className="text-[#cecece] text-[1rem] font-regular" />
                <span className="text-[#cecece] text-[1.3rem] font-[false]">About</span>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-center w-full gap-4 mb-10">
                <div className="grid items-center w-full grid-cols-1 place-content-center gap-8 place-items-center md:grid-cols-[auto_auto] md:justify-start">
                  <div className="w-50 h-50">
                    <div className="w-full h-full overflow-hidden rounded-full border-2 border-[#2f2f2f]">
                      <img src="/pfp.webp" className="object-cover object-top w-full h-full" />
                    </div>
                  </div>

                  <span className="text-[#cecece] text-[1rem] font-regular w-[90%] text-start">
                    I'm a 20-year-old Colombian guy who started with <strong>web development</strong> about{" "}
                    <strong>a month ago</strong>. I already knew some programming, but I had never tried anything related to{" "}
                    <strong>frontend</strong>. Since I started, I've really enjoyed it, especially the{" "}
                    <strong>visual part</strong> and <strong>design</strong>. I'm still learning, but I'm liking it more and more.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
