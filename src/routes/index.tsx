import { createBrowserRouter } from 'react-router-dom';

// Pages
import Login from 'src/pages/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
]);

export default router;
