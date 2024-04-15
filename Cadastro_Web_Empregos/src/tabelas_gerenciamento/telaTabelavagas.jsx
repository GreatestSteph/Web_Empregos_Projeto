import { Button, Table } from "react-bootstrap";
import urlBaseVaga from "../config/configvaga"

export default function TabelaVagas(props) {

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
            color: 'black',
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
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Cargo</th>
                        <th>Data final</th>
                        <th>Número de vagas</th>
                        <th>Escolaridade</th>
                        <th>Cursos eligivéis</th>
                        <th>Requisitos da vaga</th>
                        <th>Salário</th>
                        <th>Benefícios</th>
                        <th>Email Empresa</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaVagas?.map((vaga) => {
                            const dataFinalFormatada = new Date(vaga.Data_final).toLocaleDateString('pt-BR'); 
                            return (
                                <tr>
                                    <td>{vaga.ID_vaga}</td>
                                    <td>{vaga.Cargo_vaga}</td>
                                    <td>{dataFinalFormatada}</td>
                                    <td>{vaga.Qtde_vaga}</td>
                                    <td>{vaga.Escolaridade_vaga}</td>
                                    <td>{vaga.Curso_vaga}</td>
                                    <td>{vaga.Requisitos_vaga}</td>
                                    <td>{vaga.Salario_vaga}</td>
                                    <td>{vaga.Beneficios_vaga}</td>
                                    <td>{vaga.Email_empresa}</td>
                                    <td>
                                        
                                    <Button variant="primary" onClick={() => {
                                        alterarVagas(vaga);
                                    }}
                                    >Alterar</Button>

                                    <Button variant="danger" onClick={() => {
                                        if(window.confirm("Deseja excluir a vaga?")){
                                            excluirVagas(vaga.ID_vaga);
                                        }
                                    }}
                                    >Excluir</Button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <br/>
            <br/>
            <Button style={estiloFormulario.botao} onClick={() => {
                props.setExibirTabelaVagas(false);
                props.setModoEdicaoVaga(false);
            }}>
                Cadastrar Nova Vaga
            </Button>
        </div>
    );
}
