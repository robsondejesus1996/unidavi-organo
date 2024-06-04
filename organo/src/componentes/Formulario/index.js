import CaompoTexto from "../CompoTexto";
import "./Formulario.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Prencha os dados para criar o card do coloborador</h2>
        <CaompoTexto label="Nome" placeholder="Digite o seu nome" />
        <CaompoTexto label="Cargo" placeholder="Digite o seu cargo" />
        <CaompoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
};

export default Formulario;
