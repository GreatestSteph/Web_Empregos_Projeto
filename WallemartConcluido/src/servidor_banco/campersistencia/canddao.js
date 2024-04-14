import candidatoclasse from '../modelo/candidato.js'; //ok //usa a classe de objetos
import conecta from "./conectar.js"; //ok

export default class candidato_dao {
    async gravar(candidato) {
        if (candidato instanceof candidatoclasse) {
            const conexao = await conecta();
            const sql = "INSERT INTO candidato (Nome_cand, Data_nas_cand, Genero_cand, CEP_cand, Telefone_cand, Email_cand, Cargo_cand, Escolaridade_cand, Curso_cand, Experiencia_cand, Hard_Skills_cand, Soft_Skills_cand, Salario_cand) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const parametros = [candidato.Nome_cand, candidato.Data_nas_cand, candidato.Genero_cand, candidato.CEP_cand, candidato.Telefone_cand, candidato.Email_cand, candidato.Cargo_cand, candidato.Escolaridade_cand, candidato.Curso_cand, candidato.Experiencia_cand, candidato.Hard_Skills_cand, candidato.Soft_Skills_cand, candidato.Salario_cand];
            const resultado = await conexao.query(sql, parametros);
            candidato.ID_cand = resultado[0].insertId;
            global.poolConexoes.releaseConnection(conexao);
        }
    }    

    async atualizar(candidato) {
        if (candidato instanceof candidatoclasse) {
            const conexao = await conecta();
            const sql = "UPDATE candidato SET Nome_cand = ?, Data_nas_cand = ?, Genero_cand = ?, CEP_cand = ?, Telefone_cand = ?, Email_cand = ?, Cargo_cand = ?, Escolaridade_cand = ?, Curso_cand = ?, Experiencia_cand = ?, Hard_Skills_cand = ?, Soft_Skills_cand = ?, Salario_cand = ? WHERE ID_cand = ?";
            const parametros = [candidato.Nome_cand, candidato.Data_nas_cand, candidato.Genero_cand, candidato.CEP_cand, candidato.Telefone_cand, candidato.Email_cand, candidato.Cargo_cand, candidato.Escolaridade_cand, candidato.Curso_cand, candidato.Experiencia_cand, candidato.Hard_Skills_cand, candidato.Soft_Skills_cand, candidato.Salario_cand, candidato.ID_cand];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }    

    async excluir(candidato) {
        if (candidato instanceof candidatoclasse) {
            const conexao = await conecta();
            const sql = "DELETE FROM candidato WHERE ID_cand = ?";
            const parametros = [candidato.ID_cand];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar() {
        let listaCandidatos = [];
        const conexao = await conecta();
        const sql = 'SELECT * FROM candidato ORDER BY Nome_cand';
        const [rows, fields] = await conexao.query(sql);
    
        for (const registro of rows) {
            const candidato = new candidatoclasse(registro.ID_cand, registro.Nome_cand, registro.Data_nas_cand, registro.Genero_cand, registro.CEP_cand, registro.Telefone_cand, registro.Email_cand, registro.Cargo_cand, registro.Escolaridade_cand, registro.Curso_cand, registro.Experiencia_cand, registro.Hard_Skills_cand, registro.Soft_Skills_cand, registro.Salario_cand);
            listaCandidatos.push(candidato);
        }
        return listaCandidatos;
    }    
}
