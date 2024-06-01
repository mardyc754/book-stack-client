import { useQuery } from '@tanstack/react-query';
import { createContext } from 'react';

import { user } from '@/lib/tanstack-query/queryKeys';

import { getCurrentUser } from '@/api/auth';

import type { User } from '@/schemas/auth';

type AuthContextType = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextType>({
  user: null as User | null
});

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const { data } = useQuery({
    queryKey: user.current,
    queryFn: async () => await getCurrentUser()
  });

  return (
    <AuthContext.Provider value={{ user: data?.currentUser ?? null }}>
      {children}
    </AuthContext.Provider>
  );
};
