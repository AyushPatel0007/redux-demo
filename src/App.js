import Mainhome from './MainHome';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Create';
import Update from './Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainhome/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/edit/:id" element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>

       
    
  );
}

export default App;
