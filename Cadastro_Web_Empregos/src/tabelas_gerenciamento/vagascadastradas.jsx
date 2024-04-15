import FormularioVaga from "../formulario/formulariovaga";
import TabelaVagas from "../tabelas_gerenciamento/telaTabelavagas";
import { useEffect, useState } from "react";
import urlBaseVaga from "../config/configvaga"

export default function ExibirCadastroVagas(props) {

    const [exibirTabelaVagas, setExibirTabelaVagas] = useState(true);
    const [listaVagas, setListaVagas] = useState([]);
    const [vagaSelecionada, setVagaSelecionada] = useState({});
    const [modoEdicaoVaga, setModoEdicaoVaga] = useState(false);

    //ok
    useEffect(()=>{
        fetch(urlBaseVaga,{method:"GET"})
        .then(resposta_vaga => resposta_vaga.json())
        .then(vaga => setListaVagas(vaga));
    },[]);


    const estiloFormulario = {
        tela: {
            width: '100%',            
            padding: '10px',          
            color: 'white',
        },
    };  
    
    //frontend candidatos
    if (exibirTabelaVagas) {
        return (
            <div style={estiloFormulario.tela}>
                <h1>Vagas Cadastradas</h1>
                <br/>
                <TabelaVagas
                    listaVagas={listaVagas} 
                    setListaVagas={setListaVagas}
                    setExibirTabelaVagas={setExibirTabelaVagas}
                    setVagaSelecionada={setVagaSelecionada}
                    setModoEdicaoVaga={setModoEdicaoVaga}
                />
            </div>
        )
    }
    else {
        return (
            <div style={estiloFormulario.tela}>
                <h1>Vagas Cadastradas</h1>
                <br/>
                <FormularioVaga 
                    setExibirTabelaVagas={setExibirTabelaVagas}
                    listaVagas={listaVagas}
                    setListaVagas={setListaVagas}
                    vagaSelecionada={vagaSelecionada}
                    setModoEdicaoVaga={setModoEdicaoVaga}
                    modoEdicaoVaga={modoEdicaoVaga}
                />
            </div>
        )
    }
}
