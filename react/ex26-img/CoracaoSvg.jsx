import React from "react";

const CoracaoSvg = ({color, width}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height="180"
        viewBox="0 0 24 24"
      >
        <defs>
          {/* Gradiente */}
          <linearGradient
            id="heartGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff4d6d" />
            <stop offset="50%" stopColor="#ff1e56" />
            <stop offset="100%" stopColor="#d90429" />
          </linearGradient>

          {/* Sombra */}
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="2"
              floodColor="#00000055"
            />
          </filter>
        </defs>

        {/* Coração */}
        <path
          d="M12 21s-7-4.35-9.5-8.28C.5 9.5 2.24 5.5 6 5.5c2.04 0 3.3 1.2 4 2.09.7-.89 1.96-2.09 4-2.09 3.76 0 5.5 4 3.5 7.22C19 16.65 12 21 12 21z"
          fill="url(#heartGradient)"
          stroke={color}
          strokeWidth="0.6"
          filter="url(#shadow)"
        />
      </svg>
    </div>
  );
};

export default CoracaoSvg;
