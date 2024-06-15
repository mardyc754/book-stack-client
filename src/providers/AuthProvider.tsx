import { useQuery } from '@tanstack/react-query';
import { createContext } from 'react';

import { user } from '@/lib/tanstack-query/queryKeys';

import { getCurrentUser } from '@/api/auth';

import type { User } from '@/schemas/auth';

type AuthContextType = {
  currentUser: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null as User | null,
  isAuthenticated: false,
  isLoading: true
});

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const { data, isLoading } = useQuery({
    queryKey: user.current,
    queryFn: async () => await getCurrentUser()
  });

  return (
    <AuthContext.Provider
      value={{
        currentUser: data?.currentUser ?? null,
        isAuthenticated: !!data?.currentUser,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
