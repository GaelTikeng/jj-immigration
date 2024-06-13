import React from "react";

type Props = {
  content: string;
  onClick?: () => void;
  bgColor: string;
  className?: string;
  textColor: string;
};

export default function Button({
  content,
  onClick,
  textColor,
  bgColor,
  className
}: Props) {
  return (
    <div className={className}>
      <button
        onClick={onClick}
        className={`py-1 px-3 active:translate-y-1 hover:cursor-pointer bg-[${bgColor}] text-[${textColor}] rounded`}
      >
        {content}
      </button>
    </div>
  );
}
