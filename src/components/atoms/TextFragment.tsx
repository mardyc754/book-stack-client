import React from 'react';

export const TextFragment = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) => {
  return (
    <span {...props} className="text-base">
      {children}
    </span>
  );
};

export const ParagraphFragment = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) => {
  return (
    <span {...props} className="text-lg">
      {children}
    </span>
  );
};

export const SmallFragment = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) => {
  return (
    <span {...props} className="text-sm">
      {children}
    </span>
  );
};

export const TinyFragment = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) => {
  return (
    <span {...props} className="text-xs">
      {children}
    </span>
  );
};

export const BoldFragment = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) => {
  return (
    <span {...props} className="text-base font-semibold">
      {children}
    </span>
  );
};

export const ItalicFragment = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) => {
  return (
    <span {...props} className="text-base italic">
      {children}
    </span>
  );
};

export const UnderlineFragment = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) => {
  return (
    <span {...props} className="text-base underline">
      {children}
    </span>
  );
};

export const HighlightedTextFragment = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) => {
  return (
    <span {...props} className="text-3xl font-semibold text-primary">
      {children}
    </span>
  );
};
