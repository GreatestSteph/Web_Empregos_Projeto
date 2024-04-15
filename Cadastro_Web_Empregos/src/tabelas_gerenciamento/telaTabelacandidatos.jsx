import { Button, Table } from "react-bootstrap";
import urlBaseCandidato from "../config/configcandidato"

export default function TabelaCandidatos(props) {

    //exclui
    function excluirCandidatos(ID_cand){
        fetch(urlBaseCandidato,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ ID_cand: ID_cand}),
        })
        .then(resposta_candidato => resposta_candidato.json())
        .then((candidato) => {
            if (candidato.status){
                const novaListaCandidatos = props.listaCandidatos.filter(candidato => candidato.ID_cand !== ID_cand)
                props.setListaCandidatos(novaListaCandidatos);
            }
            else {
                alert(candidato.mensagem);
            }
        })
        .catch((erro) => {
            alert('Não foi possível conectar ao backend. Erro' + erro.mensagem);
        })
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
            width: '280px',
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
                        <th>Nome candidato</th>
                        <th>Data de nascimento</th>
                        <th>Gênero</th>
                        <th>CEP</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Cargo Desejado</th>
                        <th>Escolaridade</th>
                        <th>Curso</th>
                        <th>Experiência</th>
                        <th>Hard Skills</th>
                        <th>Soft Skills</th>
                        <th>Pretensão Salarial</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaCandidatos?.map((candidato) => {
                            const dataNascFormatada = new Date(candidato.Data_nas_cand).toLocaleDateString('pt-BR'); 
                            return (
                                <tr>
                                    <td>{candidato.ID_cand}</td>
                                    <td>{candidato.Nome_cand}</td>
                                    <td>{dataNascFormatada}</td>
                                    <td>{candidato.Genero_cand}</td>
                                    <td>{candidato.CEP_cand}</td>
                                    <td>{candidato.Telefone_cand}</td>
                                    <td>{candidato.Email_cand}</td>
                                    <td>{candidato.Cargo_cand}</td>
                                    <td>{candidato.Escolaridade_cand}</td>
                                    <td>{candidato.Curso_cand}</td>
                                    <td>{candidato.Experiencia_cand}</td>
                                    <td>{candidato.Hard_Skills_cand}</td>
                                    <td>{candidato.Soft_Skills_cand}</td>
                                    <td>{candidato.Salario_cand}</td>
                                    <td>

                                    <Button variant="danger"onClick={() => {
                                        if(window.confirm("Deseja excluir o candidato?")){
                                            excluirCandidatos(candidato.ID_cand);
                                        }
                                    }}
                                    >Marcar Desistência</Button>

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
                props.setExibirTabelaCandidatos(false);
            }}>
                Cadastrar Novo Candidato
            </Button>
        </div>
    );
}
