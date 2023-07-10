import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { lazy: () => import('./pages/Home'), path: '/' },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
