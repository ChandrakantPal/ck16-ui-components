import * as React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className="px-4 py-2 text-center bg-red-500 outline-none rounded-lg text-white">{label}</button>;
};

export default Button;
