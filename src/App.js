import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import About from './components/About/About';
import Main from './layout/Main';
import Friend from './components/Friend/Friend';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/product', element: <Product></Product> },
        {
          path: '/friend',
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friend></Friend>
        },
      ]
    },

    { path: '/about', element: <About></About> },
    { path: '*', element: <div>This is not pound</div> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
