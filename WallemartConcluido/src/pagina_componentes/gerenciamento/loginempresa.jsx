import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl, FormLabel } from 'react-bootstrap';
import { useContext, useState } from 'react';
import ContextoEmpresa from '../gerenciamento/contextologin'

export default function EmpresaLogin(props) {
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
            width: '300px',
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
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [senha, setSenha] = useState('');

    //Permite o login da empresa
    function verificarEmpresa(){
        if (nomeEmpresa === 'hAloExpress' && senha === 'hAloExpress'){
            setEmpresa({
                nome: nomeEmpresa,
                logado: true
            })
        }
        else if (nomeEmpresa === 'WalletMart' && senha === 'WalletMart'){
            setEmpresa({
                nome: nomeEmpresa,
                logado: true
            })
        }
    }

    //frontend do login
    return (
        <div style={estiloMenu.conteudo}>
            <div style={estiloMenu.botoesContainer}>

                <Form>
                    <Form.Group>
                        <FormLabel>Nome da Empresa:</FormLabel>
                        <FormControl 
                            type="text"
                            placeholder='Digite o nome da empresa'
                            id="nomeEmpresa"
                            name="nomeEmpresa"
                            value={nomeEmpresa}
                            onChange={(e) => setNomeEmpresa(e.target.value)}
                        ></FormControl>
                    </Form.Group>
                    <br/>

                    <Form.Group>
                        <FormLabel>Senha:</FormLabel>
                        <FormControl
                            type="password"
                            placeholder='Digite sua senha'
                            id="senha"
                            name="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            ></FormControl>
                    </Form.Group>
                    <br/>

                    <Button variant="primary" type="button"    onClick={() => { verificarEmpresa(); }}    style={estiloMenu.botao}>
                        Login
                    </Button>

                </Form>
            </div>
        </div>
    )
}