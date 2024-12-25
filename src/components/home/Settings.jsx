import { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    stayInSquare: true,
    showTimer: true,
    playSound: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full md:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 accent-blue-500"
            checked={settings.stayInSquare}
            onChange={() => toggleSetting("stayInSquare")}
          />
          Stay in the same square
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 accent-blue-500"
            checked={settings.showTimer}
            onChange={() => toggleSetting("showTimer")}
          />
          Show Timer
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 accent-blue-500"
            checked={settings.playSound}
            onChange={() => toggleSetting("playSound")}
          />
          Play Sound
        </label>
      </div>
    </div>
  );
};

export default Settings;
