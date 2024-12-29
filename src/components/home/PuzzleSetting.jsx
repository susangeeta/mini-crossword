/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { Modal } from "../common";

const PuzzleSettingsModal = ({ setOpenSettingModal, openSettingModal }) => {
  /**
   * Puzzel setting wrapped in memo for perfomance optimization
   */
  const settings = useMemo(
    () => [
      {
        sections: [
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
    ],
    []
  );

  return (
    <Modal
      isOpen={openSettingModal}
      onClose={() => setOpenSettingModal(false)}
      title="Puzzle Setting Modal"
    >
      <div className="p-8 bg-white rounded-lg flex flex-col gap-5">
        <h1 className="text-3xl font-semibold border-b border-primary/20 pb-3">
          Game Settings
        </h1>
        <div className="space-y-6">
          {settings.map((section, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.sections.map((subSection, id) => (
                <div key={id} className="space-y-2">
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
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default PuzzleSettingsModal;
