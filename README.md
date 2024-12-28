# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

/_ eslint-disable react/prop-types _/
import { useEffect, useRef, useState } from "react";
import { FaPen } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const Header = ({ setIsPenActive, isPenActive, setGrid }) => {
const [isTimerRunning, setIsTimerRunning] = useState(true);
const timerRef = useRef(null);
const [time, setTime] = useState(0);

const formatTime = (seconds) => {
const minutes = Math.floor(seconds / 60);
const remainingSeconds = seconds % 60;
return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

// const handleClear = () => {
// setGrid(
// Array(5)
// .fill()
// .map(() => Array(5).fill(""))
// );
// setTime(0);
// setIsTimerRunning(true);
// };

useEffect(() => {
if (isTimerRunning) {
timerRef.current = setInterval(() => {
setTime((prev) => prev + 1);
}, 1000);
}
return () => clearInterval(timerRef.current);
}, [isTimerRunning]);

const menuItem = [
{
title: "Clear",
subTitle: [
{
id: "i",
name: "Incomplete",
},
{
id: "ii",
name: "Incomplete",
},
{
id: "iii",
name: "Incomplete",
},
{
id: "iv",
name: "Incomplete",
},
],
},
{
title: "Reveal",
subTitle: [
{
id: "i",
name: "Square",
},
{
id: "ii",
name: "Word",
},
{
id: "iii",
name: "Puzzle",
},
],
},
];

return (
<section className="main-container shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white">
<div className="py-3 flex w-full justify-between">
<div className="flex gap-3">
<button className="text-2xl text-purple-600">
<IoSettingsSharp />
</button>

          <div className="flex items-center gap-4">
            <div
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="font-semibold text-lg  cursor-pointer"
            >
              {isTimerRunning ? (
                <>{formatTime(time)}</>
              ) : (
                <>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/18257/18257880.png"
                    alt=""
                    className="w-7 h-7"
                  />
                </>
              )}
            </div>
            {/* <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-[#b7b7b7]"
            >
              {isTimerRunning ? <IoMdPause /> : <FaPlay />}
            </button> */}
          </div>
        </div>

        <div className="flex items-center gap-5">
          {menuItem.map((item, index) => (
            <div key={index} className="relative group">
              <button className="px-4 py-2 border rounded-md bg-purple-100 text-purple-600">
                {item.title}
              </button>
              <div className="absolute hidden group-hover:block mt-2 bg-white shadow-lg border rounded-md w-32 z-10">
                {item.subTitle.map((sub, id) => (
                  <div
                    key={id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {sub.name}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 shadow-sm">
            Reset
          </button>
          <button
            onClick={() => setIsPenActive(!isPenActive)}
            className="text-xl text-purple-600"
          >
            <FaPen />
          </button>
        </div>
      </div>
    </section>

);
};

export default Header;
