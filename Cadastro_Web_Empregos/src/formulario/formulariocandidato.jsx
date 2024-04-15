import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import urlBaseCandidato from '../config/configcandidato';
import { FormText } from 'react-bootstrap';

export default function FormularioCandidato(props) {

    //altera vaga backend - nao vai ser usado
    async function alterarCandidatoBackend() {
        const candidatoParaEnvio = {
            ID_vaga: candidato.ID_vaga || "",
            Nome_cand: candidato.Nome_cand || "",
            Data_nas_cand: candidato.Data_nas_cand || "",
            Genero_cand: candidato.Genero_cand || "",
            CEP_cand: candidato.CEP_cand || "",
            Telefone_cand: candidato.Telefone_cand || "",
            Email_cand: candidato.Email_cand || "",
            Cargo_cand: candidato.Cargo_cand || "",
            Escolaridade_cand: candidato.Escolaridade_cand || "",
            Curso_cand: candidato.Curso_cand || "",
            Experiencia_cand: candidato.Experiencia_cand || "",
            Hard_Skills_cand: candidato.Hard_Skills_cand || "",
            Soft_Skills_cand: candidato.Soft_Skills_cand || "",
            Salario_cand: candidato.Salario_cand || ""
        };
    
        try {
            const resposta = await fetch(urlBaseCandidato, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(candidatoParaEnvio),
            });
    
            if (!resposta.ok) {
                throw new Error('Erro ao enviar dados para o servidor');
            }
    
            const resposta_candidato = await resposta.json();
            alert(resposta_candidato.mensagem);
            return true;
        } catch (erro) {
            alert('Não foi possível estabelecer uma comunicação com o backend: ' + erro.message);
            return false;
        }
    }

    //envia candidato para o backend
    async function enviarCandidatoBackend() {
        const candidatoParaEnvio = {
            Nome_cand: candidato.Nome_cand || "",
            Data_nas_cand: candidato.Data_nas_cand || "",
            Genero_cand: candidato.Genero_cand || "",
            CEP_cand: candidato.CEP_cand || "",
            Telefone_cand: candidato.Telefone_cand || "",
            Email_cand: candidato.Email_cand || "",
            Cargo_cand: candidato.Cargo_cand || "",
            Escolaridade_cand: candidato.Escolaridade_cand || "",
            Curso_cand: candidato.Curso_cand || "",
            Experiencia_cand: candidato.Experiencia_cand || "",
            Hard_Skills_cand: candidato.Hard_Skills_cand || "",
            Soft_Skills_cand: candidato.Soft_Skills_cand || "",
            Salario_cand: candidato.Salario_cand || ""
        };
    
        try {
            const resposta = await fetch(urlBaseCandidato, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(candidatoParaEnvio),
            });
    
            if (!resposta.ok) {
                throw new Error('Erro ao enviar dados para o servidor');
            }
    
            const resposta_candidato = await resposta.json();
            alert(resposta_candidato.mensagem);
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
            if (!props.modoEdicaoCandidato){
                if (enviarCandidatoBackend()){
                    props.setListaCandidatos([...props.listaCandidatos, candidato]);
                }
            }
            else {
                const posicaocandidato = props.listaCandidatos.map(candidato => candidato.ID_cand).indexOf(props.candidatoSelecionado.ID_cand);
                let novaListaCandidatos = [...props.listaCandidatos];
                novaListaCandidatos[posicaocandidato] = candidato;
                props.setListaCandidatos(novaListaCandidatos);
            }
            props.setExibirTabelaCandidatos(true);
        }
    }    

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
            width: '100px',
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

    //json?
    const [candidato, setCandidato] = useState(props.modoEdicaoCandidato ? props.candidatoSelecionado : {
        ID_cand: "",
        Nome_cand: "",
        Data_nas_cand: "",
        Genero_cand: "",
        CEP_cand: "",
        Telefone_cand: "",
        Email_cand: "",
        Cargo_cand: "",
        Escolaridade_cand: "",
        Curso_cand: "",
        Experiencia_cand: "",
        Hard_Skills_cand: "",
        Soft_Skills_cand: "",
        Salario_cand: "",
    });

    //permite a mudança
    function manipularMudança(evento) {
        const componente = evento.currentTarget;
        setCandidato({ ...candidato, [componente.name]: componente.value });
    }

    //valida ou invalida
    const [valido, setValidado] = useState(false);
    

    //frontend
    return (
        <div style={estiloFormulario.tela}>
            <h3>Cadastre seu currículo!</h3>
            <br/>
            <Form noValidate validated={valido} onSubmit={manipularEnvio}>
            <Row className="mb-3">
                
                <Form.Group as={Col} md="3" controlId="campo1">
                    <Form.Label>ID candidato</Form.Label>
                    <Form.Control type="text" placeholder="Número ID a ser gerado" value={candidato.ID_cand} id="ID_cand" name="ID_cand" onChange={manipularMudança} readOnly />
                </Form.Group>

                <br/>
                <Form.Group as={Col} md="3" controlId="campo2">
                    <Form.Label>Nome completo</Form.Label>
                    <Form.Control type="text" placeholder="Nome Completo" required value={candidato.Nome_cand} id="Nome_cand" name="Nome_cand" onChange={manipularMudança}/>
                    <Form.Control.Feedback type='invalid'>Insira o nome completo e corretamente!</Form.Control.Feedback>
                </Form.Group>

                <br/>
                <Form.Group as={Col} md="3" controlId="campo3">
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="date" placeholder="Data de Nascimento" required value={candidato.Data_nas_cand} onChange={manipularMudança} id="Data_nas_cand" name="Data_nas_cand"/>
                    <Form.Control.Feedback type='invalid'>Insira sua data de nascimento correta!</Form.Control.Feedback>
                </Form.Group>

                <br/>
                <Form.Group as={Col} md="3" controlId="campo4">
                    <Form.Label>Gênero</Form.Label>
                    <Form.Control as="select" required value={candidato.Genero_cand} onChange={manipularMudança} id="Genero_cand" name="Genero_cand">
                        <option>Selecione</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                        <option>Outro</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione seu gênero!</Form.Control.Feedback>
                </Form.Group>

                <br/>
                <Form.Group as={Col} md="3" controlId="campo5">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="CEP" required value={candidato.CEP_cand} onChange={manipularMudança} id="CEP_cand" name="CEP_cand"/>
                    <Form.Control.Feedback type='invalid'>Insira o CEP corretamente!</Form.Control.Feedback>
                </Form.Group>

                <br/>
                <Form.Group as={Col} md="3" controlId="campo6">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="tel" placeholder="Telefone" required value={candidato.Telefone_cand} onChange={manipularMudança} id="Telefone_cand" name="Telefone_cand"/>
                    <Form.Control.Feedback type='invalid'>Insira o telefone corretamente!</Form.Control.Feedback>
                </Form.Group>

                <br/>
                <Form.Group as={Col} md="3" controlId="campo7">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" required value={candidato.Email_cand} onChange={manipularMudança} id="Email_cand" name="Email_cand"/>
                    <Form.Control.Feedback type='invalid'>Insira o email corretamente!</Form.Control.Feedback>
                </Form.Group>

                <br/>
                <Form.Group as={Col} md="3" controlId="campo8">
                    <Form.Label>Cargo desejado</Form.Label>
                    <Form.Control type="text" placeholder="Cargo" required value={candidato.Cargo_cand} onChange={manipularMudança} id="Cargo_cand" name="Cargo_cand"/>
                    <Form.Control.Feedback type='invalid'>Insira o cargo corretamente!</Form.Control.Feedback>
                </Form.Group>

                <br/>
                <Form.Group as={Col} md="3" controlId="campo9">
                    <Form.Label>Escolaridade</Form.Label>
                    <Form.Control as="select" required value={candidato.Escolaridade_cand} onChange={manipularMudança} id="Escolaridade_cand" name="Escolaridade_cand">
                        <option>Selecione</option>
                        <option>Fundamental</option>
                        <option>Médio</option>
                        <option>Superior</option>
                        <option>Pós-graduação</option>
                        <option>Doutorado</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione sua escolaridade!</Form.Control.Feedback>
                </Form.Group>

                <br/>
                <Form.Group as={Col} md="3" controlId="campo10">
                    <Form.Label>Cursos realizados</Form.Label>
                    <Form.Control as="select" required value={candidato.Curso_cand} onChange={manipularMudança} id="Curso_cand" name="Curso_cand">
                        <option>Selecione</option>
                        <option>Não possui curso</option>
                        <option>Administração</option>
                        <option>Análise e Desenvolvimento de Sistemas</option>
                        <option>Artes Visuais</option>
                        <option>Agronomia</option>
                        <option>Biomedicina</option>
                        <option>Ciência da Computação</option>
                        <option>Ciências Contábeis</option>
                        <option>Direito</option>
                        <option>Design</option>
                        <option>Educação Física</option>
                        <option>Engenharia Ambiental e Sanitária</option>
                        <option>Engenharia Civil</option>
                        <option>Engenharia Mecatrônica</option>
                        <option>Engenharia Química</option>
                        <option>Engenharia de Software</option>
                        <option>Farmácia</option>
                        <option>Fisioterapia</option>
                        <option>Fonoaudiologia</option>
                        <option>Fotografia</option>
                        <option>Gastronomia</option>
                        <option>Geografia</option>
                        <option>Gestão Comercial</option>
                        <option>Geoprocessamento</option>
                        <option>Gestão de Recursos Humanos</option>
                        <option>História</option>
                        <option>Letras</option>
                        <option>Logística</option>
                        <option>Marketing</option>
                        <option>Medicina</option>
                        <option>Medicina Veterinária</option>
                        <option>Música</option>
                        <option>Nutrição</option>
                        <option>Odontologia</option>
                        <option>Pedagogia</option>
                        <option>Psicologia</option>
                        <option>Química</option>
                        <option>Radiologia</option>
                        <option>Sistemas de Informação</option>
                        <option>Zootecnia</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione uma opção!</Form.Control.Feedback>
                </Form.Group>

                <br/>
                <Form.Group as={Col} md="3" controlId="campo11">
                    <Form.Label>Experiência profissional relacionada ao cargo</Form.Label>
                    <Form.Control as="select" required value={candidato.Experiencia_cand} onChange={manipularMudança} id="Experiencia_cand" name="Experiencia_cand">
                        <option>Selecione</option>
                        <option>Nenhuma experiência relevante</option>
                        <option>2 meses</option>
                        <option>4 meses</option>
                        <option>6 meses</option>
                        <option>8 meses</option>
                        <option>1 ano</option>
                        <option>2-3 anos</option>
                        <option>4 anos</option>
                        <option>6-7 anos</option>
                        <option>8-9 anos</option>
                        <option>10 anos</option>
                        <option>11-12 anos</option>
                        <option>13+ anos</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione sua experiência!</Form.Control.Feedback>
                </Form.Group>

                <br/>
                <Form.Group as={Col} md="3" controlId="campo12">
                    <Form.Label>Descreva suas Hard Skills</Form.Label>
                    <Form.Control type="text" placeholder="Hard Skills" required value={candidato.Hard_Skills_cand} onChange={manipularMudança} id="Hard_Skills_cand" name="Hard_Skills_cand"/>
                    <Form.Control.Feedback type='invalid'>Descreva suas hard skills!</Form.Control.Feedback>
                </Form.Group>

                <br/>
                <Form.Group as={Col} md="3" controlId="campo14">
                    <Form.Label>Pretensão Salarial</Form.Label>
                    <Form.Control type="text" placeholder="Salário" required value={candidato.Salario_cand} onChange={manipularMudança} id="Salario_cand" name="Salario_cand"/>
                    <Form.Control.Feedback type='invalid'>Insira o salário corretamente!</Form.Control.Feedback>
                </Form.Group>
    
                <br/>
                <Form.Group as={Col} md="3" controlId="campo13">
                <Form.Label>Selecione sua melhor Soft Skill</Form.Label>
                    <div style={{ display: 'flex', flexWrap: 'row', width: '1000px', justifyContent: 'space-between' }}>
                        {['Comunicação', 'Trabalho em equipe', 'Proatividade', 'Pensamento Analítico', 'Resolução de problemas', 'Adaptabilidade'].map((Soft_Skills_cand, index) => (
                        <Form.Check key={index} type="checkbox" label={Soft_Skills_cand} id={`Soft_Skills_cand`} name={`Soft_Skills_cand`} value={Soft_Skills_cand} checked={candidato[`Soft_Skills_cand`].includes(Soft_Skills_cand)} onChange={manipularMudança}/>
                        ))}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'row', width: '1000px', justifyContent: 'space-between' }}>
                        {['Liderança', 'Pensamento crítico', 'Empatia', 'Gestão de tempo', 'Resiliência', 'Autoconfiança', 'Criatividade'].map((Soft_Skills_cand, index) => (
                        <Form.Check
                            key={index} type="checkbox" label={Soft_Skills_cand} id={`Soft_Skills_cand`} name={`Soft_Skills_cand`} value={Soft_Skills_cand} checked={candidato[`Soft_Skills_cand`].includes(Soft_Skills_cand)} onChange={manipularMudança}/>
                        ))}
                    </div>
                <Form.Control.Feedback type='invalid'>Selecione sua melhor soft skill!</Form.Control.Feedback>
                </Form.Group>

            </Row>
            <br/>
            <Button type="submit" style={estiloFormulario.botao}> Enviar </Button>

            <Button style={estiloFormulario.botaovoltar} onClick={() => {
                props.setExibirTabelaCandidatos(true);
            }}>Voltar</Button>

        </Form>
        </div>       
    );
}