/* eslint-disable react/prop-types */

import React, { useEffect, useRef, useState } from "react";
import { puzzleData } from "../../constants";
import WinModal from "./WinModal";

const Puzzle = ({ isPenActive, grid, setGrid }) => {
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });
  const [direction, setDirection] = useState("across");
  const [selectedClue, setSelectedClue] = useState(null);
  const [showLossModal, setShowLossModal] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const cellRefs = useRef([]);

  useEffect(() => {
    cellRefs.current = Array(25)
      .fill()
      .map((_, i) => cellRefs.current[i] || React.createRef());
  }, []);

  useEffect(() => {
    const checkWin = () => {
      const acrossCorrect = Object.entries(puzzleData.across).every(
        ([_, clue]) => {
          const rowCells = grid[clue.position.row].slice(
            clue.position.col,
            clue.position.col + clue.answer.length
          );
          return clue.answer === rowCells.join("");
        }
      );

      const downCorrect = Object.entries(puzzleData.down).every(([_, clue]) => {
        const colCells = Array.from(
          { length: clue.answer.length },
          (_, i) => grid[clue.position.row + i]?.[clue.position.col] || ""
        );
        return clue.answer === colCells.join("");
      });

      console.log(acrossCorrect, "accross");
      console.log(downCorrect, "down");

      setIsComplete(acrossCorrect && downCorrect);
    };

    checkWin();
  }, [grid]);

  const handleClueClick = (number, type) => {
    const clue = puzzleData[type][number];
    setSelectedClue({ number, type });
    setDirection(type);
    setSelectedCell({ row: clue.position.row, col: clue.position.col });
    focusCell(clue.position.row, clue.position.col);
  };

  const handleCellSelect = (row, col) => {
    if (row === selectedCell.row && col === selectedCell.col) {
      setDirection(direction === "across" ? "down" : "across");
    }
    setSelectedCell({ row, col });
    setSelectedClue(null);
    focusCell(row, col);
  };

  const focusCell = (row, col) => {
    const index = row * 5 + col;
    cellRefs.current[index]?.current?.focus();
  };

  const handleKeyDown = (e, row, col) => {
    const newGrid = [...grid];

    if (e.key === "Backspace") {
      if (newGrid[row][col] === "") {
        const newPos =
          direction === "across"
            ? { row, col: Math.max(0, col - 1) }
            : { row: Math.max(0, row - 1), col };
        setSelectedCell(newPos);
        focusCell(newPos.row, newPos.col);
      } else {
        newGrid[row][col] = "";
        setGrid(newGrid);
      }
    } else if (e.key === "ArrowRight") {
      setSelectedCell({ row, col: Math.min(4, col + 1) });
      focusCell(row, Math.min(4, col + 1));
    } else if (e.key === "ArrowLeft") {
      setSelectedCell({ row, col: Math.max(0, col - 1) });
      focusCell(row, Math.max(0, col - 1));
    } else if (e.key === "ArrowUp") {
      setSelectedCell({ row: Math.max(0, row - 1), col });
      focusCell(Math.max(0, row - 1), col);
    } else if (e.key === "ArrowDown") {
      setSelectedCell({ row: Math.min(4, row + 1), col });
      focusCell(Math.min(4, row + 1), col);
    }
  };

  const handleInput = (e, row, col) => {
    const value = e.target.value.toUpperCase();
    if (/^[A-Z]$/.test(value)) {
      const newGrid = [...grid];
      newGrid[row][col] = value;
      setGrid(newGrid);

      if (direction === "across" && col < 4) {
        setSelectedCell({ row, col: col + 1 });
        focusCell(row, col + 1);
      } else if (direction === "down" && row < 4) {
        setSelectedCell({ row: row + 1, col });
        focusCell(row + 1, col);
      }
    }
  };

  const getCurrentCellNumber = (row, col) => {
    for (const [number, clue] of Object.entries(puzzleData.across)) {
      if (clue.position.row === row && clue.position.col === col) return number;
    }
    for (const [number, clue] of Object.entries(puzzleData.down)) {
      if (clue.position.row === row && clue.position.col === col) return number;
    }
    return null;
  };

  const isInSeletedMode = (rowIndex, colIndex) => {
    if (selectedClue) {
      const clue = puzzleData[selectedClue.type][selectedClue.number];
      if (selectedClue.type === "across" && rowIndex === clue.position.row) {
        return (
          colIndex >= clue.position.col &&
          colIndex < clue.position.col + clue.answer.length
        );
      }
      if (selectedClue.type === "down" && colIndex === clue.position.col) {
        return (
          rowIndex >= clue.position.row &&
          rowIndex < clue.position.row + clue.answer.length
        );
      }
      return false;
    }

    if (direction === "across" && rowIndex === selectedCell.row) {
      return true;
    }
    if (direction === "down" && colIndex === selectedCell.col) {
      return true;
    }
    return false;
  };

  return (
    <section className="flex p-8 main-container">
      <WinModal isComplete={isComplete} setIsComplete={setIsComplete} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-5 gap-2">
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const isSelected =
                selectedCell.row === rowIndex && selectedCell.col === colIndex;
              const isHighlighted = isInSeletedMode(rowIndex, colIndex);
              const cellNumber = getCurrentCellNumber(rowIndex, colIndex);
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="relative w-full h-full"
                >
                  {cellNumber && (
                    <span className="absolute top-0 left-0  p-2 text-2xl">
                      {cellNumber}
                    </span>
                  )}
                  <input
                    ref={cellRefs.current[rowIndex * 5 + colIndex]}
                    type="text"
                    maxLength="1"
                    value={cell}
                    className={`w-full h-24 text-center text-xl font-semibold uppercase border rounded-md
                      ${
                        isSelected
                          ? "bg-yellow-500"
                          : isHighlighted
                          ? "bg-yellow-50"
                          : "bg-white border-gray-300"
                      }
                      ${isPenActive ? "text-[#959592]" : ""}
                      focus:outline-none focus:border-blue-500`}
                    onClick={() => handleCellSelect(rowIndex, colIndex)}
                    onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                    onChange={(e) => handleInput(e, rowIndex, colIndex)}
                  />
                </div>
              );
            })
          )}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="">
            <h3 className="font-bold text-xl mb-1 ">Across</h3>
            {Object.entries(puzzleData.across).map(([number, clue]) => (
              <div
                key={`across-${number}`}
                className={` cursor-pointer p-2 rounded-md transition-colors hover:bg-blue-50
            ${
              selectedClue?.type === "across" && selectedClue?.number === number
                ? "bg-blue-100"
                : ""
            }`}
                onClick={() => handleClueClick(number, "across")}
              >
                <span className="font-medium mr-2">{number}.</span>
                {clue.clue}
              </div>
            ))}
          </div>

          <div className="">
            <h3 className="font-bold text-xl mb-1">Down</h3>
            {Object.entries(puzzleData.down).map(([number, clue]) => (
              <div
                key={`down-${number}`}
                className={` cursor-pointer p-2 rounded-md transition-colors hover:bg-blue-50
            ${
              selectedClue?.type === "down" && selectedClue?.number === number
                ? "bg-blue-100"
                : ""
            }`}
                onClick={() => handleClueClick(number, "down")}
              >
                <span className="font-medium mr-2">{number}.</span>
                {clue.clue}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Puzzle;
