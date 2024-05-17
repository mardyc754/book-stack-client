interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner = ({ message }: LoadingSpinnerProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <span className="loading loading-spinner loading-lg"></span>
      {message && <p>{message}</p>}
    </div>
  );
};
