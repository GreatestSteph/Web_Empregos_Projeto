import React, { useState } from 'react';

import Cabecalho from "./pagina_componentes/cabecalho.jsx"; //ok
import MenuEmpresa from "./pagina_componentes/gerenciamento/menuempresa.jsx"; //ok

import ContextoEmpresa from "./pagina_componentes/gerenciamento/contextologin.jsx"; //ok
import EmpresaLogin from "./pagina_componentes/gerenciamento/loginempresa.jsx"; //ok

import ExibirCadastroCandidatos from "./tabelas_gerenciamento/candidatoscadastrados.jsx"; //ok
import ExibirCadastroVagas from "./tabelas_gerenciamento/vagascadastradas.jsx"; //ok

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() { //ok
  const [nomeEmpresa, setNomeEmpresa] = useState({ //ok
    nome:'', //ok
    logado: false //ok
  });

  
  if (!nomeEmpresa.logado) { //ok
    return (
      <div style={{ backgroundColor: 'lightblue', height: '100vh' }}>
        <ContextoEmpresa.Provider value={[nomeEmpresa, setNomeEmpresa] }> {/* ok */}
          <Cabecalho/> {/* ok */}
          <EmpresaLogin/>
        </ContextoEmpresa.Provider>
      </div>
    );
  }

  return (
    <div className="App" style={{ backgroundColor: 'lightblue', minHeight: '100vh' }}> {/* ok */}
      <ContextoEmpresa.Provider value={[nomeEmpresa, setNomeEmpresa] }> {/* ok */}


        <BrowserRouter> {/* ok */}
          <Routes> {/* ok */}
            <Route path="verificacandidatos" element={ //ok
              <div>
                <br/>
                <Cabecalho/> {/* ok */}
                <br/>
                <br/>
                <br/>
                <ExibirCadastroCandidatos/>  {/* ok */}
              </div>
            }/>


            <Route path="/" element={ //ok
              <div>
                <br/>
                <Cabecalho/> {/* ok */}
                <br/>
                <MenuEmpresa/>{/* ok */}
              </div>
            }/>


            <Route path="cadastrovagas" element={  //ok
              <div>
                <br/>
                <Cabecalho/> {/* ok */}
                <br/>
                <br/>
                <br/>
                <ExibirCadastroVagas/> {/* ok */}
              </div>
            }/>
          </Routes>


        </BrowserRouter> {/* ok */}
      </ContextoEmpresa.Provider> {/* ok */}
      <br/>
    </div>
  );
}

export default App;
