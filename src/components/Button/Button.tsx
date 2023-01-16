import * as React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="px-4 py-2 text-center bg-red-500 outline-none rounded-lg text-white"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
