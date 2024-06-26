import React from 'react';

export const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
};

export const PrimaryButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="btn btn-primary" {...props}>
      {children}
    </button>
  );
};

export const PrimaryStretchedButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="btn btn-primary w-full" {...props}>
      {children}
    </button>
  );
};

export const ErrorButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="btn btn-error text-white" {...props}>
      {children}
    </button>
  );
};
