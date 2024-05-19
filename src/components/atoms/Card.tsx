import clsx from 'clsx';

interface CardRootProps {
  hasBorder?: boolean;
}

const Root = ({
  children,
  hasBorder = false
}: React.PropsWithChildren<CardRootProps>) => {
  return (
    <div
      className={clsx(
        'card card-side bg-base rounded-sm',
        hasBorder && 'border-b-1'
      )}
    >
      {children}
    </div>
  );
};

const Title = ({
  children,
  size = 'medium'
}: React.PropsWithChildren<{ size?: 'small' | 'medium' | 'large' }>) => {
  return (
    <h2
      className={clsx(
        'card-title',
        size === 'small' && 'text-xl',
        size === 'medium' && 'text-2xl',
        size === 'large' && 'text-3xl'
      )}
    >
      {children}
    </h2>
  );
};

const Body = ({ children }: React.PropsWithChildren) => {
  return <div className="card-body">{children}</div>;
};

const Actions = ({
  children,
  alignment = 'end'
}: React.PropsWithChildren<{ alignment?: 'start' | 'center' | 'end' }>) => {
  return (
    <div
      className={clsx(
        'card-actions flex-col',
        alignment === 'start' && 'justify-start items-start',
        alignment === 'center' && 'justify-center items-center',
        alignment === 'end' && 'justify-end items-end'
      )}
    >
      {children}
    </div>
  );
};

export const Card = {
  Root,
  Title,
  Body,
  Actions
};
