import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import urlBaseVaga from '../config/configvaga';


export default function FormularioVaga(props) {

    //altera vaga
    async function alterarVagaBackend() {
        const vagaParaEnvio = {
            ID_vaga: vaga.ID_vaga || "",
            Cargo_vaga: vaga.Cargo_vaga || "",
            Data_final: vaga.Data_final || "",
            Qtde_vaga: vaga.Qtde_vaga || "",
            Escolaridade_vaga: vaga.Escolaridade_vaga || "",
            Curso_vaga: vaga.Curso_vaga || "",
            Requisitos_vaga: vaga.Requisitos_vaga || "",
            Salario_vaga: vaga.Salario_vaga || "",
            Beneficios_vaga: vaga.Beneficios_vaga || "",
            Email_empresa: vaga.Email_empresa || ""
        };
    
        try {
            const resposta = await fetch(urlBaseVaga, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(vagaParaEnvio),
            });
    
            if (!resposta.ok) {
                throw new Error('Erro ao enviar dados para o servidor');
            }
    
            const resposta_vaga = await resposta.json();
            alert(resposta_vaga.mensagem);
            return true;
        } catch (erro) {
            alert('Não foi possível estabelecer uma comunicação com o backend: ' + erro.message);
            return false;
        }
    }
    

    //envia vaga para o backend
    async function enviarVagaBackend() {
        const vagaParaEnvio = {
            Cargo_vaga: vaga.Cargo_vaga || "",
            Data_final: vaga.Data_final || "",
            Qtde_vaga: vaga.Qtde_vaga || "",
            Escolaridade_vaga: vaga.Escolaridade_vaga || "",
            Curso_vaga: vaga.Curso_vaga || "",
            Requisitos_vaga: vaga.Requisitos_vaga || "",
            Salario_vaga: vaga.Salario_vaga || "",
            Beneficios_vaga: vaga.Beneficios_vaga || "",
            Email_empresa: vaga.Email_empresa || ""
        };
    
        try {
            const resposta = await fetch(urlBaseVaga, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(vagaParaEnvio),
            });
    
            if (!resposta.ok) {
                throw new Error('Erro ao enviar dados para o servidor');
            }
    
            const resposta_vaga = await resposta.json();
            alert(resposta_vaga.mensagem);
            return true;
        } catch (erro) {
            alert('Não foi possível estabelecer uma comunicação com o backend: ' + erro.message);
            return false;
        }
    }
    
    //permite o envio das informações do formulario, nao incluida permanentemente no banco de dados
    function manipularEnvio(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        const form = evento.currentTarget;
        if (form.checkValidity() === false) {
            setValidado(true);
        }
        else{
            setValidado(false);
            if (!props.modoEdicaoVaga){
                if(enviarVagaBackend()){
                    props.setListaVagas([...props.listaVagas, vaga]);
                }
            }
            else {
                alterarVagaBackend().then((vaga) =>{
                    if (vaga.status){
                        alert(vaga.status);
                        const posicaovaga = props.listaVagas.map(vaga => vaga.ID_vaga).indexOf(props.vagaSelecionada.ID_vaga);
                        let novaListaVagas = [...props.listaVagas];
                        novaListaVagas[posicaovaga] = vaga;
                        props.setListaVagas(novaListaVagas);
                        props.setExibirTabelaVagas(true);
                    }
                })
                .catch((erro) =>{
                    alert('Não foi possível conectar ao backend. Erro:' + erro.message)
                })
            }
        }
    }

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
            width: '100px',
            margin: '10px',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#3cb371',
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

    //json?
    const [vaga, setVaga] = useState(props.modoEdicaoVaga ? props.vagaSelecionada : {
        ID_vaga: "",
        Cargo_vaga: "",
        Data_final: "",
        Qtde_vaga: "",
        Escolaridade_vaga: "",
        Curso_vaga: "",
        Requisitos_vaga: "",
        Salario_vaga: "",
        Beneficios_vaga: "",
        Email_empresa: "",
    });
    
    //permite a mudança
    function manipularMudança(evento) {
        const componente = evento.currentTarget;
        setVaga({ ...vaga, [componente.name]: componente.value });
    }

    //valida ou invalida
    const [valido, setValidado] = useState(false);

    //frontend
    return (
        <div style={estiloFormulario.tela}>
            <h3>Cadastre uma vaga!</h3>
            <br/>
            <Form noValidate validated={valido} onSubmit={manipularEnvio}>
            <Row className="mb-3">
                
                <Form.Group as={Col} md="3" controlId="campo1">
                    <Form.Label>ID vaga</Form.Label>
                    <Form.Control type="text" placeholder="Número ID a ser gerado" value={vaga.ID_vaga} id="ID_vaga" name="ID_vaga" onChange={manipularMudança} readOnly />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="campo1">
                    <Form.Label>Cargo da vaga</Form.Label>
                    <Form.Control type="text" placeholder="Nome do cargo" required value={vaga.Cargo_vaga} id="Cargo_vaga" name="Cargo_vaga" onChange={manipularMudança}/>
                    <Form.Control.Feedback type='invalid'>Insira um nome para o cargo!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="campo2">
                    <Form.Label>Ultimo dia para se inscrever</Form.Label>
                    <Form.Control type="date" placeholder="Data final" required value={vaga.Data_final} onChange={manipularMudança} id="Data_final" name="Data_final"/>
                    <Form.Control.Feedback type='invalid'>Insira uma data!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="campo13">
                    <Form.Label>Vagas disponíveis para o cargo</Form.Label>
                    <Form.Control as="select" required value={vaga.Qtde_vaga} onChange={manipularMudança} id="Qtde_vaga" name="Qtde_vaga">
                        <option value="">Selecione</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>35</option>
                        <option>40</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione a quantidade de vagas!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="campo13">
                    <Form.Label>Escolaridade</Form.Label>
                    <Form.Control as="select" required value={vaga.Escolaridade_vaga} onChange={manipularMudança} id="Escolaridade_vaga" name="Escolaridade_vaga">
                        <option value="">Selecione</option>
                        <option>Fundamental</option>
                        <option>Médio</option>
                        <option>Superior</option>
                        <option>Pós-graduação</option>
                        <option>Doutorado</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione a escolaridade!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="campo3">
                    <Form.Label>Cursos eligivéis</Form.Label>
                    <Form.Control as="select" required value={vaga.Curso_vaga} onChange={manipularMudança} id="Curso_vaga" name="Curso_vaga">
                        <option value="">Selecione</option>
                        <option>Não é necessário ter um curso</option>
                        <option>Administração ou correlatos</option>
                        <option>Análise e Desenvolvimento de Sistemas ou correlatos</option>
                        <option>Artes Visuais ou correlatos</option>
                        <option>Agronomia ou correlatos</option>
                        <option>Biomedicina ou correlatos</option>
                        <option>Ciência da Computação ou correlatos</option>
                        <option>Ciências Contábeis ou correlatos</option>
                        <option>Direito ou correlatos</option>
                        <option>Design ou correlatos</option>
                        <option>Educação Física ou correlatos</option>
                        <option>Engenharia Ambiental e Sanitária ou correlatos</option>
                        <option>Engenharia Civil ou correlatos</option>
                        <option>Engenharia Mecatrônica ou correlatos</option>
                        <option>Engenharia Química ou correlatos</option>
                        <option>Engenharia de Software ou correlatos</option>
                        <option>Farmácia ou correlatos</option>
                        <option>Fisioterapia ou correlatos</option>
                        <option>Fonoaudiologia ou correlatos</option>
                        <option>Fotografia ou correlatos</option>
                        <option>Gastronomia ou correlatos</option>
                        <option>Geografia ou correlatos</option>
                        <option>Gestão Comercial ou correlatos</option>
                        <option>Geoprocessamento ou correlatos</option>
                        <option>Gestão de Recursos Humanos ou correlatos</option>
                        <option>História ou correlatos</option>
                        <option>Letras ou correlatos</option>
                        <option>Logística ou correlatos</option>
                        <option>Marketing ou correlatos</option>
                        <option>Medicina ou correlatos</option>
                        <option>Medicina Veterinária ou correlatos</option>
                        <option>Música ou correlatos</option>
                        <option>Nutrição ou correlatos</option>
                        <option>Odontologia ou correlatos</option>
                        <option>Pedagogia ou correlatos</option>
                        <option>Psicologia ou correlatos</option>
                        <option>Química ou correlatos</option>
                        <option>Radiologia ou correlatos</option>
                        <option>Sistemas de Informação ou correlatos</option>
                        <option>Zootecnia ou correlatos</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione uma opção!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="campo6">
                    <Form.Label>Requisitos da vaga</Form.Label>
                    <Form.Control type="text" placeholder="Requisitos" required value={vaga.Requisitos_vaga} onChange={manipularMudança} id="Requisitos_vaga" name="Requisitos_vaga"/>
                    <Form.Control.Feedback type='invalid'>Insira os Requisitos da vaga!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="campo11">
                    <Form.Label>Salário</Form.Label>
                    <Form.Control type="text" placeholder="Salário" required value={vaga.Salario_vaga} onChange={manipularMudança} id="Salario_vaga" name="Salario_vaga"/>
                    <Form.Control.Feedback type='invalid'>Insira o salário corretamente!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="campo12">
                    <Form.Label>Benefícios</Form.Label>
                    <Form.Control type="text" placeholder="Benefícios" required value={vaga.Beneficios_vaga} onChange={manipularMudança} id="Beneficios_vaga" name="Beneficios_vaga"/>
                    <Form.Control.Feedback type='invalid'>Insira o benefício corretamente!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="campo9">
                    <Form.Label>Email para contatar a empresa</Form.Label>
                    <Form.Control type="email" placeholder="Email" required value={vaga.Email_empresa} onChange={manipularMudança} id="Email_empresa" name="Email_empresa"/>
                    <Form.Control.Feedback type='invalid'>Insira o email corretamente!</Form.Control.Feedback>
                </Form.Group>

            </Row>
            <br/>

            <Button type="submit" style={estiloFormulario.botao}> {props.modoEdicaoVaga ? "Salvar" : "Enviar"}</Button>

            <Button style={estiloFormulario.botaovoltar} onClick={() => {
                props.setModoEdicaoVaga(false);
                props.setExibirTabelaVagas(true);
            }}>Voltar</Button>

        </Form>
        </div>       
    );
}