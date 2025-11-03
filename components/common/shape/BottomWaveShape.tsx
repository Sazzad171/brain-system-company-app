import React from "react";

const BottomWaveShape: React.FC = () => {
  return (
    <div className="-rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2600 131.1"
        preserveAspectRatio="none"
        className="w-full h-auto"
      >
        <path
          fill="#88C273"
          d="M0 0L2600 0 2600 69.1 0 0z"
        />
        <path
          fill="#88C273"
          opacity="0.5"
          d="M0 0L2600 0 2600 69.1 0 69.1z"
        />
        <path
          fill="#88C273"
          opacity="0.25"
          d="M2600 0L0 0 0 130.1 2600 69.1z"
        />
      </svg>
    </div>
  );
};

export default BottomWaveShape;
