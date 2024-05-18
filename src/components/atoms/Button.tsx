import React from 'react';

export const Button = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
};

export const PrimaryButton = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="btn btn-primary" {...props}>
      {children}
    </button>
  );
};
