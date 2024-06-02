import { AuthContext } from '@/providers/AuthProvider';
import { useContext } from 'react';

export const useAuthContext = () => useContext(AuthContext);
