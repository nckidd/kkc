import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RoutesScrollToTop } from './components/utilities/RoutesScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { MeetSitters } from './pages/MeetSitters';
import { Services } from './pages/Services';
import { Shop } from './pages/Shop';
import { Blog } from './pages/Blog';

import 'react-toastify/dist/ReactToastify.css';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/meet-sitters",
    element: <MeetSitters />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
      <RoutesScrollToTop />
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App
