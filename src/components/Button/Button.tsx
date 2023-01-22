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
    primary: "text-primary",
    secondary: "text-secondary",
    nevigate: "text-nevigate",
  },
  outlined: {
    primary: "border-primary border text-primary",
    secondary: "border-secondary border text-secondary",
    nevigate: "border-nevigate border text-nevigate",
  },
  contained: {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    nevigate: "bg-nevigate text-white",
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
