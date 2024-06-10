import clsx from 'clsx';

export const CardActions = ({
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
