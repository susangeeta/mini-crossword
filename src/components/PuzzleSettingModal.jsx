/* eslint-disable react/prop-types */

const PuzzleSettingsModal = ({ setIsModalOpen, isModalOpen }) => {
  const settings = [
    {
      title: "After changing direction with arrow keys At the end of a word",
      options: [
        { type: "radio", name: "arrowKeys", label: "Stay in the same square" },
        {
          type: "radio",
          name: "arrowKeys",
          label: "Move in the direction of the arrow",
        },
        {
          type: "checkbox",
          name: "jumpBack",
          label: "Jump back to first blank in the word",
        },
        {
          type: "checkbox",
          name: "jumpNext",
          label: "Jump to next clue (if not jumping back)",
        },
      ],
    },
    {
      grouped: true,
      sections: [
        {
          title: "Pressing the spacebar should",
          options: [
            {
              type: "radio",
              name: "spacebar",
              label: "Clear the current square and advance",
            },
            {
              type: "radio",
              name: "spacebar",
              label: "Toggle between Across and Down",
            },
          ],
        },
        {
          title: "Interactions",
          options: [
            {
              type: "checkbox",
              name: "playSound",
              label: "Play sound on solve",
            },
            { type: "checkbox", name: "showTimer", label: "Show timer" },
            {
              type: "checkbox",
              name: "suppressWarnings",
              label: "Suppress disqualification warnings",
            },
            {
              type: "checkbox",
              name: "showMilestones",
              label: "Show puzzle milestones",
            },
          ],
        },
      ],
    },
    {
      title: "At the start of a word",
      options: [
        {
          type: "checkbox",
          name: "backspace",
          label: "Backspace into previous word",
        },
      ],
    },
    {
      title: "Within a word",
      options: [
        {
          type: "checkbox",
          name: "skipFilled",
          label: "Skip over filled squares",
        },
        {
          type: "checkbox",
          name: "evenPenciled",
          label: "Even penciled-in squares",
        },
      ],
    },
  ];

  if (!isModalOpen) return null; // Ensure the modal doesn't render if it's closed.

  return (
    <div
      onClick={() => setIsModalOpen(false)} // Close on background click
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        className="bg-white rounded-lg shadow-lg w-4/5 md:w-1/2"
      >
        <div className="px-6 py-4 border-b flex justify-between w-full">
          <h2 className="text-xl font-bold">Puzzle Settings</h2>
          <h2
            onClick={() => setIsModalOpen(false)} // Close on cross button click
            className="text-xl font-bold cursor-pointer"
          >
            X
          </h2>
        </div>
        <div className="p-6 space-y-6">
          {settings.map((section, index) =>
            section.grouped ? (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {section.sections.map((subSection, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="font-semibold text-gray-800">
                      {subSection.title}
                    </h3>
                    <div className="space-y-1">
                      {subSection.options.map((option, optIdx) => (
                        <label
                          key={optIdx}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type={option.type}
                            name={option.name}
                            className="form-checkbox h-4 w-4 text-blue-600"
                          />
                          <span className="text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold text-gray-800">{section.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.options.map((option, idx) => (
                    <label key={idx} className="flex items-center space-x-2">
                      <input
                        type={option.type}
                        name={option.name}
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
        <div className="px-6 py-4 border-t flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
            onClick={() => setIsModalOpen(false)} // Close modal on Cancel
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Save and Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PuzzleSettingsModal;
