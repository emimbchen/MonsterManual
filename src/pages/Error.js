import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Error</h1>
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default ErrorPage;
