import { useMutation, useQueryClient } from '@tanstack/react-query';
import { forwardRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { user } from '@/lib/tanstack-query/queryKeys';
import { cn } from '@/lib/utils';

import { logout } from '@/api/auth';

import { useAuthContext } from '@/hooks/useAuthContext';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

import { ThemeSwitcher } from '../atoms/ThemeSwitcher';

const ListItem = forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

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
    <NavigationMenu>
      <NavigationMenuList>
        {currentUser ? (
          <>
            <p className="mr-4">Welcome, {currentUser.username}</p>
            {currentUser.role === 'ADMIN' && (
              <>
                <NavigationMenuItem>
                  <Link to="/stock" className={navigationMenuTriggerStyle()}>
                    Stock
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/users" className={navigationMenuTriggerStyle()}>
                    Users
                  </Link>
                </NavigationMenuItem>
              </>
            )}
            {(currentUser.role === 'USER' || currentUser.role == 'ADMIN') && (
              <>
                <NavigationMenuItem>
                  <Link to="/basket" className={navigationMenuTriggerStyle()}>
                    <div className="flex space-x-2 items-center">
                      <span>Cart</span>
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/your-books"
                    className={navigationMenuTriggerStyle()}
                  >
                    <div className="flex space-x-2 items-center">
                      Your books
                    </div>
                  </Link>
                </NavigationMenuItem>
              </>
            )}
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={() => {
                  mutateOnLogout();
                }}
              >
                Logout
              </NavigationMenuLink>
            </NavigationMenuItem>
          </>
        ) : (
          <>
            <NavigationMenuItem>
              <Link to="/login" className={navigationMenuTriggerStyle()}>
                Login
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/register" className={navigationMenuTriggerStyle()}>
                {/* <NavigationMenuLink className={navigationMenuTriggerStyle()}> */}
                Register
                {/* </NavigationMenuLink> */}
              </Link>
            </NavigationMenuItem>
          </>
        )}
        <ThemeSwitcher />
      </NavigationMenuList>
    </NavigationMenu>
  );
};
