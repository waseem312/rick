import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <CharactersPage /> },
      { path: '/characters', element: <CharactersPage /> },
    ]
  },
  
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;