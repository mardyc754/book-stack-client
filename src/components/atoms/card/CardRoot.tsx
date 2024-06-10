import clsx from 'clsx';

interface CardRootProps {
  hasBorder?: boolean;
}

export const Root = ({
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
