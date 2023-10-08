"use client";

interface Props {
  error: Error;
  reset: () => void;
}

// Author: Ehsan_Safari

const ErrorPage = ({ error, reset }: Props) => {
  return (
    <>
      My Custom Error Page! {error.message}
      <button onClick={() => reset()}>Retry</button>
    </>
  );
};

export default ErrorPage;
