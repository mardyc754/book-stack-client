import { useQuery } from '@tanstack/react-query';
import { createContext } from 'react';

import { user } from '@/lib/tanstack-query/queryKeys';

import { getCurrentUser } from '@/api/auth';

import type { User } from '@/schemas/auth';

type AuthContextType = {
  currentUser: User | null;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null as User | null
});

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const { data } = useQuery({
    queryKey: user.current,
    queryFn: async () => await getCurrentUser()
  });

  return (
    <AuthContext.Provider value={{ currentUser: data?.currentUser ?? null }}>
      {children}
    </AuthContext.Provider>
  );
};
