import { ThemeSwitcher } from '../atoms/ThemeSwitcher';

export const Navbar = () => {
  return (
    <nav className="navbar-end bg-base-100">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        {/* <li>
              <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
              <li>
              <a>Link 1</a>
              </li>
              <li>
              <a>Link 2</a>
              </li>
              </ul>
              </details>
            </li> */}
      </ul>
      <ThemeSwitcher />
    </nav>
  );
};
