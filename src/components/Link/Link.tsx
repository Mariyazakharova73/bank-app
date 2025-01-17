import cn from "classnames";
import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Link.scss";

interface LinkProps {
  to: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

const Link: FC<LinkProps> = ({ to, target = "_self", rel, className, children, external = false }) => {
  const isExternal = external || to.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={to}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={cn("link", className)}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      to={to}
      className={cn("link", className)}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
