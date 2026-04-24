import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// HomePage Structure
//LabAct02
import Layout from './assets/components/Layout';
import ArticlePage from './assets/pages/ArticlePage';
import HomePage from './assets/pages/HomePage';
import AboutPage from './assets/pages/AboutPage';

//LabAct3
import ArticleListPage from './assets/pages/ArticleListPage';
import NotFoundPage from './assets/pages/NotFoundPage';

const routes = [
  {
    path: '/',
    element: <Layout />,
    
    errorElement: <NotFoundPage />,

    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
       {
        path: '/articles',
        element: <ArticleListPage />,
      },
      {
        path: '/articles/:name',
        element: <ArticlePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
