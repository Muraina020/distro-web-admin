import { useState } from "react";
import {
  Notification,
  DataImport,
  PrivacySecurity,
  LoginActivities,
  Help,
} from "../../components";
import SettingsMobiles from "./SettingsMobiles";

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
    <>
      <div className="mt-5 sm:flex hidden">
        <div className="w-[19rem]">
          <ul className="space-y-4">
            {settingNav.map((text) => {
              return (
                <li key={text}>
                  <button
                    onClick={() => setCurrentSetting(text)}
                    className={`md:text-[1.3125rem] text-base text-start w-full py-4 px-7 ${
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
        <div className="bg-[#ECF3F9] h-full w-full rounded-[0.1875rem]">
          {currentSetting && settings[currentSetting]}
        </div>
      </div>
      <SettingsMobiles />
    </>
  );
};
export default Setting;
