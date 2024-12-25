import { useState } from "react";

const CrosswordGrid = () => {
  const [grid, setGrid] = useState([
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ]);

  const handleInputChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value.toUpperCase();
    setGrid(newGrid);
  };

  return (
    <div className="grid grid-cols-4 gap-1">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            className="w-12 h-12 border border-gray-300 text-center uppercase text-lg focus:outline-none focus:ring focus:ring-blue-300"
            maxLength={1}
            value={cell}
            onChange={(e) =>
              handleInputChange(rowIndex, colIndex, e.target.value)
            }
          />
        ))
      )}{" "}
    </div>
  );
};

export default CrosswordGrid;
