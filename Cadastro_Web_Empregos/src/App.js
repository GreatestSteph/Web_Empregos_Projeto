import React, { useState } from 'react';

import Cabecalho from "./pagina_componentes/cabecalho.jsx"; //ok
import MenuEmpresa from "./pagina_componentes/gerenciamento/menuempresa.jsx"; //ok

import ContextoEmpresa from "./pagina_componentes/gerenciamento/contextologin.jsx"; //ok
import EmpresaLogin from "./pagina_componentes/gerenciamento/loginempresa.jsx"; //ok

import ExibirCadastroCandidatos from "./tabelas_gerenciamento/candidatoscadastrados.jsx"; //ok
import ExibirCadastroVagas from "./tabelas_gerenciamento/vagascadastradas.jsx"; //ok

import MenuPortal from "./pagina_componentes/menu_portal.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() { //ok
  const [nomeEmpresa, setNomeEmpresa] = useState({ //ok
    nome:'', //ok
    logado: false //ok
  });

  return (
    <div className="App" style={{ backgroundColor: '#000080', minHeight: '100vh' }}>
      <ContextoEmpresa.Provider value={[nomeEmpresa, setNomeEmpresa]}>
        <BrowserRouter>

          <Routes>

            <Route path="verificacandidatos" element={
              !nomeEmpresa.logado ? (
                <div style={{ backgroundColor: '#000080', height: '100vh' }}>
                  <br/>
                  <Cabecalho />
                  <EmpresaLogin />
                </div>
              ) : (
                <><br/>
                  <Cabecalho />
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <ExibirCadastroCandidatos />
                </>
              )
            } />


            <Route path="menuempresa" element={
              !nomeEmpresa.logado ? (
                <div style={{ backgroundColor: '#000080', height: '100vh' }}>
                  <br/>
                  <Cabecalho />
                  <EmpresaLogin />
                </div>
              ) : (
                <><br/>
                  <Cabecalho />
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <MenuEmpresa />
                </>
              )
            } />

            <Route path="/" element={
              <><br/>
                <Cabecalho />
                <br/>
                <MenuPortal />
              </>
            } />

            <Route path="cadastrovagas" element={
              !nomeEmpresa.logado ? (
                <div style={{ backgroundColor: '#000080', height: '100vh' }}>
                  <br/>
                  <Cabecalho />
                  <EmpresaLogin />
                </div>
              ) : (
                <><br/>
                  <Cabecalho />
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <ExibirCadastroVagas />
                </>
              )
            } />

          </Routes>

        </BrowserRouter>
      </ContextoEmpresa.Provider>
    </div>
  );
}

export default App;
