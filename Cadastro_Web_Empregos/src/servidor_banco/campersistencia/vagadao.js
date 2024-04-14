import vagaclasse from '../modelo/vaga.js'; //ok //usa a classe de objetos
import conecta from "./conectar.js"; //ok

export default class vaga_dao {
    async gravar(vaga) {
        if (vaga instanceof vagaclasse) {
            const conexao = await conecta();
            const sql = "INSERT INTO vaga (Cargo_vaga, Data_final, Qtde_vaga, Escolaridade_vaga, Curso_vaga, Requisitos_vaga, Salario_vaga, Beneficios_vaga, Email_empresa) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const parametros = [vaga.Cargo_vaga, vaga.Data_final, vaga.Qtde_vaga, vaga.Escolaridade_vaga, vaga.Curso_vaga, vaga.Requisitos_vaga, vaga.Salario_vaga, vaga.Beneficios_vaga, vaga.Email_empresa];
            const resultado = await conexao.query(sql, parametros);
            vaga.ID_vaga = resultado[0].insertId;
            global.poolConexoes.releaseConnection(conexao);
        }
    }    

    async atualizar(vaga) {
        if (vaga instanceof vagaclasse) {
            const conexao = await conecta();
            const sql = "UPDATE vaga SET Cargo_vaga = ?, Data_final = ?, Qtde_vaga = ?, Escolaridade_vaga = ?, Curso_vaga = ?, Requisitos_vaga = ?, Salario_vaga = ?, Beneficios_vaga = ?, Email_empresa = ? WHERE ID_vaga = ?";
            const parametros = [vaga.Cargo_vaga, vaga.Data_final, vaga.Qtde_vaga, vaga.Escolaridade_vaga, vaga.Curso_vaga, vaga.Requisitos_vaga, vaga.Salario_vaga, vaga.Beneficios_vaga, vaga.Email_empresa, vaga.ID_vaga];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }    

    async excluir(vaga) {
        if (vaga instanceof vagaclasse) {
            const conexao = await conecta();
            const sql = "DELETE FROM vaga WHERE ID_vaga = ?";
            const parametros = [vaga.ID_vaga];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar() {
        let listaVagas = [];
        const conexao = await conecta();
        const sql = 'SELECT * FROM vaga ORDER BY Cargo_vaga';
        const [rows, fields] = await conexao.query(sql);
    
        for (const registro of rows) {
            const vaga = new vagaclasse(registro.ID_vaga, registro.Cargo_vaga, registro.Data_final, registro.Qtde_vaga, registro.Escolaridade_vaga, registro.Curso_vaga, registro.Requisitos_vaga, registro.Salario_vaga, registro.Beneficios_vaga, registro.Email_empresa);
            listaVagas.push(vaga);
        }
        return listaVagas;
    }    
}
