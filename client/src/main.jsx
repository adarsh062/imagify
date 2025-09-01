import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Appcontextprovider from './context/Appcontext.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Appcontextprovider>
         <App />
     </Appcontextprovider>
  </BrowserRouter>,
)
