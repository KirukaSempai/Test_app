import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Try refreshing the page, or go back to the {""}
        <NavLink to="/">home page.</NavLink>
      </p>
    </div>
  );
}
