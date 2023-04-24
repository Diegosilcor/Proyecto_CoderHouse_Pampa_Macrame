import './App.css';
import NavBar from './components/NavBar/NavBar';
import WhatsApp from './components/WhatsApp/WhatsApp';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from './components/Inicio/Inicio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <WhatsApp />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/category/todos' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
