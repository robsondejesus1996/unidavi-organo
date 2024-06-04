import CaompoTexto from "../CompoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {


  // aqui pode ser todos os departamentos que vai ter o filtro para trazer para os departamentos
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <section className="formulario">
      <form>
        <h2>Prencha os dados para criar o card do coloborador</h2>
        <CaompoTexto label="Nome" placeholder="Digite o seu nome" />
        <CaompoTexto label="Cargo" placeholder="Digite o seu cargo" />
        <CaompoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times}/>
      </form>
    </section>
  );
};

export default Formulario;
