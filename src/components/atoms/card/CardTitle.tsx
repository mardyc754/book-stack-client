import clsx from 'clsx';

export const CardTitle = ({
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
