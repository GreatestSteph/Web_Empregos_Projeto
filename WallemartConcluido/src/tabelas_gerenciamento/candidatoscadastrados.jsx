import FormularioCandidato from "../formulario/formulariocandidato";
import TabelaCandidatos from "../tabelas_gerenciamento/telaTabelacandidatos";
import { useEffect, useState } from "react";
import urlBaseCandidato from "../config/configcandidato"

export default function ExibirCadastroCandidatos(props) {

    const [exibirTabelaCandidatos, setExibirTabelaCandidatos] = useState(true);
    const [listaCandidatos, setListaCandidatos] = useState([]);
    const [candidatoSelecionado, setCandidatoSelecionado] = useState({});
    const [modoEdicaoCandidato, setModoEdicaoCandidato] = useState(false);

    //ok
    useEffect(()=>{
        fetch(urlBaseCandidato,{method:"GET"})
        .then(resposta_candidato => resposta_candidato.json())
        .then(candidato => setListaCandidatos(candidato));
    },[]);


    //frontend candidatos
    if (exibirTabelaCandidatos) {
        return (
            <div>
                <h1>Candidatos Cadastrados</h1>
                <br/>
                <TabelaCandidatos
                    listaCandidatos={listaCandidatos} 
                    setListaCandidatos={setListaCandidatos}
                    setExibirTabelaCandidatos={setExibirTabelaCandidatos}
                    setCandidatoSelecionado={setCandidatoSelecionado}
                    setModoEdicaoCandidato={setModoEdicaoCandidato}
                />
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Candidatos Cadastrados</h1>
                <br/>
                <FormularioCandidato 
                    setExibirTabelaCandidatos={setExibirTabelaCandidatos}
                    listaCandidatos={listaCandidatos}
                    setListaCandidatos={setListaCandidatos}
                    candidatoSelecionado={candidatoSelecionado}
                    setModoEdicaoCandidato={setModoEdicaoCandidato}
                    modoEdicaoCandidato={modoEdicaoCandidato}
                />
            </div>
        )
    }
}
