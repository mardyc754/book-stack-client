import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';

import { user } from '@/lib/tanstack-query/queryKeys';

import { logout } from '@/api/auth';

import { useAuthContext } from '@/hooks/useAuthContext';

import { ThemeSwitcher } from '../atoms/ThemeSwitcher';

export const Navbar = () => {
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: mutateOnLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: user.current });
      navigate('/');
      window.location.reload();
    }
  });

  return (
    <nav className="navbar-end bg-base-100">
      <ul className="menu menu-horizontal px-1">
        {currentUser ? (
          <li>
            <details>
              <summary>{currentUser.username}</summary>
              <ul className="p-2 w-32 bg-base-100 rounded-t-none">
                <li>
                  <Link to="/your-orders">Your profile</Link>
                </li>
                <li>
                  <span
                    onClick={() => {
                      mutateOnLogout();
                    }}
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </details>
          </li>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
      <ThemeSwitcher />
    </nav>
  );
};
