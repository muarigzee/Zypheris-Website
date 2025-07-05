import React from 'react';

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 flex items-center gap-2 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {/* Left icon */}
      {leftIcon && <span className="text-base">{leftIcon}</span>}

      {/* Text */}
      <span className="font-general text-xs uppercase">{title}</span>

      {/* Right icon */}
      {rightIcon}
    </button>
  );
};

export default Button;
