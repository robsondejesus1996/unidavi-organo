import Botao from "../Botao";
import CaompoTexto from "../CompoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  // aqui pode ser todos os departamentos que vai ter o filtro para trazer para os departamentos
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (evento) =>{
    evento.preventDefault()
    console.log('Form entrou')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Prencha os dados para criar o card do coloborador</h2>
        <CaompoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
        <CaompoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
        <CaompoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />

        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
