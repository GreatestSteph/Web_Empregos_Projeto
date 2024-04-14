import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ContextoEmpresa from '../gerenciamento/contextologin';

export default function MenuEmpresa(props) {
  const estiloMenu = {
    conteudo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '65vh',
    },
    botoesContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    botao: {
        width: '600px',
        margin: '10px',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#000000',
        color: 'white',
        borderRadius: '10%',
        cursor: 'pointer',
        textDecoration: 'none',
    },
  };

  const [Empresa, setEmpresa] = useContext(ContextoEmpresa);

  //frontend menu de gerenciamento
  return (
    <div style={estiloMenu.conteudo}>
      <div style={estiloMenu.botoesContainer}>
      <h1>Bem vindo(a) ao Gerenciamento RH!</h1>
      <h5>{props?.texto}</h5><span>Sua empresa é: {Empresa.nome}</span>
        <br/>
        <br/>
        <Link to="/cadastrovagas" style={estiloMenu.botao}>
          Cadastrar Vaga
        </Link>
        <br/>
        <Link to="/verificacandidatos" style={estiloMenu.botao}>
          Verificar Candidatos 
        </Link>
      </div>
    </div>
  );
}
