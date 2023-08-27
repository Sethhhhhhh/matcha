import ReactDOM from 'react-dom/client';
import Login from './pages/Login.page.jsx';
import Register from './pages/Register.page.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{ path: '/login', element: <Login /> },
	{ path: '/register', element: <Register /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
