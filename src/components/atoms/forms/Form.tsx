export const Form = ({
  children,
  ...props
}: React.FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form
      {...props}
      className="card card-compact shadow-xl rounded-xl p-8 gap-2 max-w-md m-auto"
    >
      {children}
    </form>
  );
};
