export const FormActions = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className="form-control mt-8">
      {children}
    </div>
  );
};
