import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonWithLinkProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href: string;
}

export const ButtonWithLink = ({ children, ...props }: ButtonWithLinkProps) => {
  return (
    <button className="btn" {...props}>
      <Link to={props.href as string}>{children}</Link>
    </button>
  );
};

export const PrimaryButtonWithLink = ({
  children,
  ...props
}: ButtonWithLinkProps) => {
  return (
    <button className="btn btn-primary" {...props}>
      <Link to={props.href as string}>{children}</Link>
    </button>
  );
};
