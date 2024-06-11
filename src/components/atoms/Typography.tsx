import { cn } from '@/lib/tailwind/cn';

export const BasicTypography = ({ children }: React.PropsWithChildren) => {
  return <p className="text-base">{children}</p>;
};

export const ParagraphTypography = ({ children }: React.PropsWithChildren) => {
  return <p className="text-lg">{children}</p>;
};

export const SmallTypography = ({ children }: React.PropsWithChildren) => {
  return <p className="text-sm">{children}</p>;
};

export const TinyTypography = ({ children }: React.PropsWithChildren) => {
  return <p className="text-xs">{children}</p>;
};

export const BoldTypography = ({ children }: React.PropsWithChildren) => {
  return <p className="text-base font-semibold">{children}</p>;
};

export const BoldLargeTypography = ({ children }: React.PropsWithChildren) => {
  return <p className="text-base text-lg font-semibold">{children}</p>;
};

export const ItalicTypography = ({ children }: React.PropsWithChildren) => {
  return <p className="text-base italic">{children}</p>;
};

export const UnderlineTypography = ({ children }: React.PropsWithChildren) => {
  return <p className="text-base underline">{children}</p>;
};

export const CardTitleTypography = ({ children }: React.PropsWithChildren) => {
  return <h2 className="card-title">{children}</h2>;
};

export const HighlightedTypography = ({
  children,
  fontSize = 'text-3xl'
}: React.PropsWithChildren & { fontSize?: string }) => {
  return (
    <p className={cn('text-3xl font-semibold text-primary', fontSize)}>
      {children}
    </p>
  );
};
