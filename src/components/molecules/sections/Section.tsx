interface SectionProps {
  children?: React.ReactNode;
  title: string;
}

export const SectionBase = ({ children, title }: SectionProps) => {
  return (
    <section className="card">
      <div className="flex flex-col space-y-2">
        <h2 className="card-title">{title}</h2>
        <div className="flex">{children}</div>
      </div>
    </section>
  );
};
