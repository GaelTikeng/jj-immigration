import React, { useState } from "react";

interface Props {
  currentStep: any;
}

export default function Steps({ currentStep }: Props) {
  const [steps, setStep] = useState({
    stpesCount: [1, 2, 3],
    currentStep: 1,
  })

  return (
    <div className="max-w-lg mx-auto px-4 sm:px-0">
      <ul aria-label="Steps" className="flex items-center">
        {steps.stpesCount.map((item, idx) => (
          <li
            key={idx}
            aria-current={currentStep == idx + 1 ? "step" : false}
            className="flex-1 last:flex-none flex items-center"
          >
            <div
              className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
                currentStep > idx + 1
                  ? "bg-[#25a9e3] border-[#25a9e3]"
                  : "" || currentStep == idx + 1
                  ? "border-[#25a9e3]"
                  : ""
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full bg-[#25a9e3] ${
                  currentStep != idx + 1 ? "hidden" : ""
                }`}
              ></span>
              {currentStep > idx + 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                ""
              )}
            </div>
            <hr
              className={`w-full border ${
                idx + 1 == steps.stpesCount.length
                  ? "hidden"
                  : "" || currentStep > idx + 1
                  ? "border-[#25a9e3]"
                  : ""
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
