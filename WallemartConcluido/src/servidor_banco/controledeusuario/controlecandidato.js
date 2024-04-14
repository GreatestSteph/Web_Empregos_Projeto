import candidatoclasse from "../modelo/candidato.js";

export default class ControleCand {
    
    async POST(requisicao, resposta_candidato) {
        resposta_candidato.type('application/json');
        if (requisicao.method !== 'POST') {
            resposta_candidato.json({
                status: false,
                mensagem: 'Método inválido! Utilize POST!'
            });
            return;
        }

        const extraidados = requisicao.body;
        const { Nome_cand, Data_nas_cand, Genero_cand, CEP_cand, Telefone_cand, Email_cand, Cargo_cand, Escolaridade_cand, Curso_cand, Experiencia_cand, Hard_Skills_cand, Soft_Skills_cand, Salario_cand} = extraidados;
        if (Nome_cand && Data_nas_cand && Genero_cand && CEP_cand && Telefone_cand && Email_cand && Cargo_cand && Escolaridade_cand && Curso_cand && Experiencia_cand && Hard_Skills_cand && Soft_Skills_cand && Salario_cand) {
            const candidato = new candidatoclasse(0, ...Object.values(extraidados));
            try {
                await candidato.gravar();
                resposta_candidato.json({
                    status: true,
                    mensagem: 'Candidato gravado com sucesso!',
                    id_candidato: candidato.ID_cand
                });
            } catch (erro) {
                resposta_candidato.json({
                    status: false,
                    mensagem: 'Não foi possível registrar o candidato! ' + erro.message
                });
            }
        } else {
            resposta_candidato.json({
                status: false,
                mensagem: "Há campos faltando que devem ser obrigatoriamente preenchidos!"
            });
        }
    }
    


    async PUTPATCH(requisicao, resposta_candidato) {
        resposta_candidato.type('application/json');

        if (requisicao.method !== 'PUT' && requisicao.method !== 'PATCH') {
            resposta_candidato.json({
                status: false,
                mensagem: 'Método inválido! Utilize o método PUT ou PATCH!'
            });
            return;
        }
        const extraidados = requisicao.body;
        const { ID_cand, Nome_cand, Data_nas_cand, Genero_cand, CEP_cand, Telefone_cand, Email_cand, Cargo_cand, Escolaridade_cand, Curso_cand, Experiencia_cand, Hard_Skills_cand, Soft_Skills_cand, Salario_cand} = extraidados;
        if (ID_cand && Nome_cand && Data_nas_cand && Genero_cand && CEP_cand && Telefone_cand && Email_cand && Cargo_cand && Escolaridade_cand && Curso_cand && Experiencia_cand && Hard_Skills_cand && Soft_Skills_cand && Salario_cand) {
            const candidato = new candidatoclasse(ID_cand, ...Object.values(extraidados));
            try {
                await candidato.atualizar();
                resposta_candidato.json({
                    status: true,
                    mensagem: 'Candidato atualizado com sucesso!'
                });
            } catch (erro) {
                resposta_candidato.json({
                    status: false,
                    mensagem: 'Não foi possível atualizar o candidato! ' + erro.message
                });
            }
        } else {
            resposta_candidato.json({
                status: false,
                mensagem: "Há campos faltando que devem ser obrigatoriamente preenchidos!"
            });
        }
    }


    async DELETE(requisicao, resposta_candidato) {
        resposta_candidato.type('application/json');
        if (requisicao.method !== 'DELETE') {
            resposta_candidato.json({
                status: false,
                mensagem: 'Método inválido! Utilize o método DELETE!'
            });
            return;
        }
        const extraidados = requisicao.body;
        const { ID_cand } = extraidados;
        if (ID_cand) {
            const candidato = new candidatoclasse(ID_cand);
            try {
                await candidato.excluir();
                resposta_candidato.json({
                    status: true,
                    mensagem: 'Candidato excluído com sucesso!'
                });
            } catch (erro) {
                resposta_candidato.json({
                    status: false,
                    mensagem: 'Não foi possível excluir o candidato! ' + erro.message
                });
            }
        } else {
            resposta_candidato.json({
                status: false,
                mensagem: "O ID_cand deve ser informado!"
            });
        }
    }


    async GET(requisicao, resposta_candidato) {
        resposta_candidato.type('application/json');
        if (requisicao.method !== 'GET') {
            resposta_candidato.json({
                status: false,
                mensagem: 'Método inválido! Utilize o método GET!'
            });
            return;
        }
        const candidato = new candidatoclasse(0);
        try {
            const listaCandidatos = await candidato.consultar();
            resposta_candidato.json(listaCandidatos);
        } catch (erro) {
            resposta_candidato.json({
                status: false,
                mensagem: 'Não foi possível mostrar os candidatos! ' + erro.message
            });
        }
    }
}
