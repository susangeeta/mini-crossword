export const puzzleData = {
  size: 9,
  across: {
    1: {
      clue: "With 6-Across, annual visitor dressed in red",
      answer: "SANTA",
      position: { row: 0, col: 0 },
    },
    6: {
      clue: "See 1-Across",
      answer: "CLAUS",
      position: { row: 0, col: 6 },
    },
    7: {
      clue: "Tale that might get you off the hook",
      answer: "ALIBI",
      position: { row: 1, col: 0 },
    },
    8: {
      clue: "Harry Potter a.k.a. The Boy Who ___",
      answer: "LIVED",
      position: { row: 2, col: 0 },
    },
    9: {
      clue: "Farm equipment brand",
      answer: "DEERE",
      position: { row: 3, col: 0 },
    },
  },
  down: {
    1: {
      clue: "Spill hot cocoa on, say",
      answer: "STAIN",
      position: { row: 0, col: 0 },
    },
    2: {
      clue: "Sports reporter LaForce",
      answer: "ALLIE",
      position: { row: 0, col: 6 },
    },
    3: {
      clue: "Easily duped",
      answer: "NAIVE",
      position: { row: 1, col: 2 },
    },
    4: {
      clue: "Crop that grows underground",
      answer: "PEANUT",
      position: { row: 2, col: 4 },
    },
    5: {
      clue: "'All kidding ___ ...'",
      answer: "ASIDE",
      position: { row: 3, col: 6 },
    },
  },
};

export default function grid(count) {
  return Array(count)
    .fill()
    .map(() => Array(count).fill(""));
}
