// React
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Home from 'components/Home';
import Offering from 'components/Offering';
import Service from 'components/Service';

// Styles
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={ <Home /> } >
          <Route path="offering">
            <Route index path="*" element={ <Offering /> } />
          </Route>
        </Route>
        <Route path="/service" element={ <Service /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
