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
