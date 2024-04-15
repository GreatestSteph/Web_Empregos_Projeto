import FormularioCandidato from "../formulario/formulariocandidato";
import TabelaCandidatos from "../tabelas_gerenciamento/telaTabelacandidatos";
import { useEffect, useState } from "react";
import urlBaseCandidato from "../config/configcandidato"

export default function ExibirCadastroCandidatos(props) {

    const [exibirTabelaCandidatos, setExibirTabelaCandidatos] = useState(true);
    const [listaCandidatos, setListaCandidatos] = useState([]);
    const [candidatoSelecionado, setCandidatoSelecionado] = useState({});

    //ok
    useEffect(()=>{
        fetch(urlBaseCandidato,{method:"GET"})
        .then(resposta_candidato => resposta_candidato.json())
        .then(candidato => setListaCandidatos(candidato));
    },[]);

    const estiloFormulario = {
        tela: {
            width: '100%',            
            padding: '10px',          
            color: 'white',
        },
    };    

    //frontend candidatos
    if (exibirTabelaCandidatos) {
        return (
            <div style={estiloFormulario.tela}>
                <h1>Candidatos Cadastrados</h1>
                <br/>
                <TabelaCandidatos
                    listaCandidatos={listaCandidatos} 
                    setListaCandidatos={setListaCandidatos}
                    setExibirTabelaCandidatos={setExibirTabelaCandidatos}
                    setCandidatoSelecionado={setCandidatoSelecionado}
                />
            </div>
        )
    }
    else {
        return (
            <div>
                <FormularioCandidato 
                    setExibirTabelaCandidatos={setExibirTabelaCandidatos}
                    listaCandidatos={listaCandidatos}
                    setListaCandidatos={setListaCandidatos}
                    candidatoSelecionado={candidatoSelecionado}
                />
            </div>
        )
    }
}
