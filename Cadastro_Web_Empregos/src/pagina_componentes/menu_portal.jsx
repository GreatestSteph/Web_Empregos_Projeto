import { Button, Table } from "react-bootstrap";
import urlBaseVaga from "../config/configvaga"

export default function MenuPortal(props) {

    //exclui
    function excluirVagas(ID_vaga){
        fetch(urlBaseVaga, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ ID_vaga: ID_vaga}),
        })
        .then(resposta_vaga => resposta_vaga.json())
        .then((vaga) => {
            if (vaga.status){
                const novaListaVagas = props.listaVagas.filter(vaga => vaga.ID_vaga !== ID_vaga)
                props.setListaVagas(novaListaVagas);
            }
            else {
                alert(vaga.mensagem);
            }
        })
        .catch((erro) => {
            alert('Não foi possível conectar ao backend. Erro' + erro.mensagem);
        })
    };

    //edita
    function alterarVagas(vaga){
        props.setVagaSelecionada(vaga);
        props.setModoEdicaoVaga(true);
        props.setExibirTabelaVagas(false);
    };

    //estilo
    const estiloFormulario = {
        tela: {
            width: '100%',            
            padding: '10px',          
            color: 'white',
        },
        botoesContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        botao: {
            width: '215px',
            margin: '10px',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#6495ed',
            color: 'white',
            borderRadius: '10%',
            cursor: 'pointer',
            textDecoration: 'none',
        },
        botaovoltar: {
            width: '100px',
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

    //frontend
    return (
        <div style={estiloFormulario.tela}>
            <br/><br/><br/>
            <h1>Mural de Vagas</h1>
            <br/>
            <Table striped bordered hover style={{ backgroundColor: 'white' }}>
                <thead>
                    <tr>
                        <h2>Nome do Cargo:</h2>
                        <h5>ID da vaga:</h5>
                        <td><h5>Data final:</h5></td>
                    </tr>
                    <tr>
                        <h6>Número de vagas:</h6>
                        <h6>Escolaridade</h6>
                        <h6>Cursos eligivéis</h6>
                        <h6>Requisitos da vaga</h6>
                        <h6>Salário</h6>
                        <h6>Benefícios</h6>
                        <h6>Email Empresa</h6>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaVagas?.map((vaga) => {
                            const dataFinalFormatada = new Date(vaga.Data_final).toLocaleDateString('pt-BR'); 
                            return (
                                <div>
                                    <h1>{vaga.Cargo_vaga}</h1>
                                    <h5>{vaga.ID_vaga}</h5>
                                    <tr>
                                        <td><h5>{dataFinalFormatada}</h5></td>
                                        <h6>{vaga.Qtde_vaga}</h6>
                                        <h6>{vaga.Escolaridade_vaga}</h6>
                                        <h6>{vaga.Curso_vaga}</h6>
                                        <h6>{vaga.Requisitos_vaga}</h6>
                                        <h6>{vaga.Salario_vaga}</h6>
                                        <h6>{vaga.Beneficios_vaga}</h6>
                                        <h6>{vaga.Email_empresa}</h6>
                                    </tr>
                                </div>    
                            )
                        })
                    }
                </tbody>
            </Table>
            <br/>
            <br/>
            <Button style={estiloFormulario.botao} onClick={() => {
                props.setExibirTabelaCandidatos(false);
                props.setModoEdicaoVaga(false);
            }}>
                Aplicar para a vaga
            </Button>
        </div>
    );
}
