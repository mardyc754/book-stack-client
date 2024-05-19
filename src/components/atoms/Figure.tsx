export const Figure = ({
  children,
  ...props
}: React.PropsWithChildren<React.ImgHTMLAttributes<HTMLImageElement>>) => {
  return <figure {...props}>{children}</figure>;
};
