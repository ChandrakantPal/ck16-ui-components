import * as React from "react";
import classNames from "classnames";
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "nevigate";
}

const ButtonConfig = {
  text: {
    primary: "text-[#CC1313]",
    secondary: "text-[#4C9D8A]",
    nevigate: "text-[#EC7622]",
  },
  outlined: {
    primary: "border-[#CC1313] border text-[#CC1313]",
    secondary: "border-[#4C9D8A] border text-[#4C9D8A]",
    nevigate: "border-[#EC7622] border text-[#EC7622]",
  },
  contained: {
    primary: "bg-[#CC1313] text-white",
    secondary: "bg-[#4C9D8A] text-white",
    nevigate: "bg-[#EC7622] text-white",
  },
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "contained",
  color = "primary",
  ...props
}) => {
  const buttonClass = classNames(
    `px-4 py-2 text-center outline-none rounded-lg ${ButtonConfig[variant][color]}`
  );
  return (
    <button className={buttonClass} {...props}>
      {label}
    </button>
  );
};

export default Button;
