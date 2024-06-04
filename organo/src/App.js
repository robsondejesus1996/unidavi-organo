import Banner from './componentes/Banner/Banner';
import CaompoTexto from './componentes/CompoTexto';

function App() {
  return (
    <>
      <Banner/>
      <CaompoTexto label="Nome" placeholder="Digite o seu nome"/>
      <CaompoTexto label="Cargo" placeholder="Digite o seu cargo"/>
      <CaompoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
    </>
  );
}

export default App;
