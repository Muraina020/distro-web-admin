import { useState } from "react";
import {
  Notification,
  DataImport,
  PrivacySecurity,
  LoginActivities,
  Help,
} from "../../components";

const settingNav = [
  "Notification",
  "Data Import",
  "Login Activities",
  "Privacy &Security",
  "Help",
];

const Setting = () => {
  const [currentSetting, setCurrentSetting] = useState("Notification");

  const settings = {
    Notification: <Notification />,
    "Data Import": <DataImport />,
    "Login Activities": <LoginActivities />,
    "Privacy &Security": <PrivacySecurity />,
    Help: <Help />,
  };

  return (
    <div className="mt-5 flex">
      <div className="w-[19rem]">
        <ul className="space-y-4">
          {settingNav.map((text) => {
            return (
              <li key={text}>
                <button
                  onClick={() => setCurrentSetting(text)}
                  className={`text-[1.3125rem] text-start w-full py-4 px-7 ${
                    currentSetting === text
                      ? "text-primary-default"
                      : "text-primary-black"
                  }`}
                >
                  {text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-[#ECF3F9] w-full rounded-[0.1875rem]">
        {currentSetting && settings[currentSetting]}
      </div>
    </div>
  );
};
export default Setting;
