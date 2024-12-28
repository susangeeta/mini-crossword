import { useState } from "react";
import { Header, Puzzel, WelcomModal } from "../components/home";
import gridLayout from "../constants";

const Home = () => {
  const [isPenActive, setIsPenActive] = useState(false);
  const [grid, setGrid] = useState(gridLayout(7));

  return (
    <section
      style={{
        backgroundImage: `url("https://amuselabs.com/wp-content/uploads/2023/07/Group-1931.svg?id=6889")`,
      }}
      className="h-screen flex bg-no-repeat bg-center bg-cover items-center justify-center w-full"
    >
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white w-3/4 rounded-md overflow-hidden border border-gray-200">
        <WelcomModal />
        <Header
          setIsPenActive={setIsPenActive}
          isPenActive={isPenActive}
          setGrid={setGrid}
        />
        <Puzzel isPenActive={isPenActive} grid={grid} setGrid={setGrid} />
      </div>
    </section>
  );
};

export default Home;
