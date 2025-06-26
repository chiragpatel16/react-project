import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Navbar  from './Nav.jsx';
import Footer from  './Footer.jsx';
createRoot(document.getElementById('root')).render(<App />,<Navbar/>,<Footer/>);


