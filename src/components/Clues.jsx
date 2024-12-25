const Clues = () => {
  const acrossClues = ["1A: Petty fight", "5A: Funny little habit"];
  const downClues = [
    "1D: Source of edible ink",
    "2D: Like horror movie titles",
  ];

  return (
    <div className="mt-6 md:ml-8 bg-white p-4 rounded shadow-md w-full md:w-1/2">
      <h2 className="text-xl font-semibold mb-2">Across</h2>
      <ul className="list-disc ml-4">
        {acrossClues.map((clue, index) => (
          <li key={index} className="mb-1">
            {clue}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4 mb-2">Down</h2>
      <ul className="list-disc ml-4">
        {downClues.map((clue, index) => (
          <li key={index} className="mb-1">
            {clue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clues;
