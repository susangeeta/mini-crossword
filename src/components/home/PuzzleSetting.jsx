import { Modal } from "../common";

// eslint-disable-next-line react/prop-types
const PuzzleSettingsModal = ({ setModal }) => {
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

  return (
    <Modal
      isOpen={setModal}
      onClose={() => setModal(false)}
      title="Puzzle Setting Modal"
    >
      <div className="p-6 space-y-6">
        {settings.map((section, index) =>
          section.grouped ? (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </Modal>
  );
};

export default PuzzleSettingsModal;
