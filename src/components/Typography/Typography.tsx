import * as React from "react";
import classNames from "classnames";

export interface TypographyProps<C extends React.ElementType> {
  as?: C;
  children: React.ReactNode;
}

const Typography = <C extends React.ElementType = "p">({
  as,
  children,
  ...props
}: TypographyProps<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TypographyProps<C>>) => {
  const Component = as || "p";

  return (
    <Component className={classNames("text-base", {})} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
