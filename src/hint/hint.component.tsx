import React from "react";
import hintStyles from "./hint.module.scss";

type HintPlacement = "top" | "left" | "right" | "bottom";

export interface HintProps extends React.ComponentProps<"div"> {
  placement?: HintPlacement;
  display: React.ReactNode;
}

const Hint: React.FC<HintProps> = ({ placement = "top", display, className, children, ...componentProps }) => {
  const classes = [hintStyles.base, hintStyles[placement]];
  if (className) classes.push(className.split(" "));

  return (
    <div className={hintStyles.container}>
      <div className={classes.join(" ")} {...componentProps}>
        {display}
      </div>
      {children}
    </div>
  );
};

export default Hint;
