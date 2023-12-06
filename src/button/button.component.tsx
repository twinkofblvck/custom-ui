import React from "react";
import buttonStyles from "./button.module.scss";

type ButtonVariant = "outline" | "filled";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({ variant = "filled", className, ...componentProps }) => {
  const classes = [buttonStyles.base, buttonStyles[variant]];
  if (className) classes.push(className.split(" "));

  return (
    <button className={classes.join(" ")} {...componentProps} />
  );
};

export default Button;
