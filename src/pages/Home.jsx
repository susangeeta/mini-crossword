import { useState } from "react";
import Header from "../components/home/Header";
import Puzzel from "../components/home/Puzzel";

const Home = () => {
  const [isPenActive, setIsPenActive] = useState(false);
  const [grid, setGrid] = useState(
    Array(5)
      .fill()
      .map(() => Array(5).fill(""))
  );

  return (
    <section className="w-full min-h-screen bg-[#f5f5f5]">
      {/* ----------------------------------header part -------------------------------- */}
      <Header
        setIsPenActive={setIsPenActive}
        isPenActive={isPenActive}
        setGrid={setGrid}
      />
      <Puzzel isPenActive={isPenActive} grid={grid} setGrid={setGrid} />
    </section>
  );
};

export default Home;
