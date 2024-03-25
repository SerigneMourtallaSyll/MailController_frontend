import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'tippy.js/dist/tippy.css';
import LayoutTemp from './Layout/LayoutTemp'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div>
      <Toaster />
      <LayoutTemp 
        navbar={<Navbar />}
        sidebar={<Sidebar />}
      >
        <Outlet />
      </LayoutTemp>
    </div>
  )
}

export default App
