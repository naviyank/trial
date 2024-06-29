"use client";
import React, { FC } from "react";
import icons from "../../assets/icons.json";

const getIcon = (key: string): string => {
  let iconPaths: Record<string, string> = icons;
  return iconPaths[key];
};

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  iconName?: string;
  className?: string;
  onClick?: () => void;
}

const Icon: FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "original",
  iconName = "circle",
  className = "",
  onClick = () => {},
}) => {
  return (
    <span onClick={onClick} className={`${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={getIcon(iconName)}
          fill={color}
        />
      </svg>
    </span>
  );
};

export default Icon;
