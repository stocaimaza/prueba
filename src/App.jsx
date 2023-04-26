import Formulario from './components/Formulario/Formulario';
import Productos from './components/Productos/Productos';
import './App.css';

function App() {
  return (
    <>
      <h1 className='titulos'>SuperMercado Mario Bross</h1>
      <Formulario/>
      <h2 className='titulos'>Productos</h2>
      <Productos />
    </>
  );
}

export default App;
