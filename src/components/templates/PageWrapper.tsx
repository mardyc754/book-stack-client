import { Navbar } from '@/components/organisms/Navbar';

type PageWrapperProps = {
  children?: React.ReactNode;
  title: string;
};

export const PageWrapper = ({ children, title }: PageWrapperProps) => {
  return (
    <div className="w-full flex flex-col">
      <div className="navbar justify-between min-h-[10vh] border-b-2 border-b-base-content px-8">
        <header className="navbar-start">
          <h1>Book Stack</h1>
        </header>
        <Navbar />
      </div>
      <main className="min-h-[80vh] flex p-8">
        <h2 className="text-2xl">{title}</h2>
        {children}
      </main>
      <footer className="min-h-[10vh] border-t-2 border-t-base-content py-4 px-8">
        &copy;2024 All rights reserved
      </footer>
    </div>
  );
};
