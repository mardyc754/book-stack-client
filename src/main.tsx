import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  LoaderFunctionArgs,
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

import { bookDetailsQuery } from '@/lib/tanstack-query/queries';

import { AuthProvider } from '@/providers/AuthProvider';

import { Basket } from '@/components/pages/Basket';
import { BookDetails } from '@/components/pages/BookDetails';
import { Home } from '@/components/pages/Home';
import { Login } from '@/components/pages/Login';
import { Register } from '@/components/pages/Register';
import { YourBooks } from '@/components/pages/YourBooks';

import { Toaster } from './components/ui/toaster';
import './index.css';

const queryClient = new QueryClient();

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs<{ bookId: string }>) => {
    if (!params.bookId) {
      return null;
    }
    const query = bookDetailsQuery(params.bookId);
    return (
      queryClient.getQueryData(query.queryKey) ?? queryClient.fetchQuery(query)
    );
  };

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/books/:bookId',
    element: <BookDetails />,
    loader: loader(queryClient)
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/basket',
    element: <Basket />
  },
  {
    path: '/your-books',
    element: <YourBooks />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
