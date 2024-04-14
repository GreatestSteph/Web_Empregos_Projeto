import vagaclasse from "../modelo/vaga.js";

export default class ControleVaga {
    
    async POST(requisicao, resposta_vaga) {
        resposta_vaga.type('application/json');
        if (requisicao.method !== 'POST') {
            resposta_vaga.json({
                status: false,
                mensagem: 'Método inválido! Utilize POST!'
            });
            return;
        }

        const extraidados = requisicao.body;
        const { Cargo_vaga, Data_final, Qtde_vaga, Escolaridade_vaga, Curso_vaga, Requisitos_vaga, Salario_vaga, Beneficios_vaga, Email_empresa } = extraidados;
        if (Cargo_vaga && Data_final && Qtde_vaga && Escolaridade_vaga && Curso_vaga && Requisitos_vaga && Salario_vaga && Beneficios_vaga && Email_empresa) {
            const vaga = new vagaclasse(0, Cargo_vaga, Data_final, Qtde_vaga, Escolaridade_vaga, Curso_vaga, Requisitos_vaga, Salario_vaga, Beneficios_vaga, Email_empresa);
            try {
                await vaga.gravar();
                resposta_vaga.json({
                    status: true,
                    mensagem: 'Vaga gravada com sucesso!',
                    id_vaga: vaga.ID_vaga
                });
            } catch (erro) {
                resposta_vaga.json({
                    status: false,
                    mensagem: 'Não foi possível registrar a vaga! ' + erro.message
                });
            }
        } else {
            resposta_vaga.json({
                status: false,
                mensagem: "Há campos faltando que devem ser obrigatoriamente preenchidos!"
            });
        }
    }
    


    async PUTPATCH(requisicao, resposta_vaga) {
        resposta_vaga.type('application/json');

        if (requisicao.method !== 'PUT' && requisicao.method !== 'PATCH') {
            resposta_vaga.json({
                status: false,
                mensagem: 'Método inválido! Utilize o método PUT ou PATCH!'
            });
            return;
        }
        const extraidados = requisicao.body;
        const { ID_vaga, Cargo_vaga, Data_final, Qtde_vaga, Escolaridade_vaga, Curso_vaga, Requisitos_vaga, Salario_vaga, Beneficios_vaga, Email_empresa } = extraidados;
        if (ID_vaga && Cargo_vaga && Data_final && Qtde_vaga && Escolaridade_vaga && Curso_vaga && Requisitos_vaga && Salario_vaga && Beneficios_vaga && Email_empresa) {
            const vaga = new vagaclasse(ID_vaga, Cargo_vaga, Data_final, Qtde_vaga, Escolaridade_vaga, Curso_vaga, Requisitos_vaga, Salario_vaga, Beneficios_vaga, Email_empresa);
            try {
                await vaga.atualizar();
                resposta_vaga.json({
                    status: true,
                    mensagem: 'Vaga atualizada com sucesso!'
                });
            } catch (erro) {
                resposta_vaga.json({
                    status: false,
                    mensagem: 'Não foi possível atualizar o vaga! ' + erro.message
                });
            }
        } else {
            resposta_vaga.json({
                status: false,
                mensagem: "Há campos faltando que devem ser obrigatoriamente preenchidos!"
            });
        }
    }


    async DELETE(requisicao, resposta_vaga) {
        resposta_vaga.type('application/json');
        if (requisicao.method !== 'DELETE') {
            resposta_vaga.json({
                status: false,
                mensagem: 'Método inválido! Utilize o método DELETE!'
            });
            return;
        }
        const extraidados = requisicao.body;
        const { ID_vaga } = extraidados;
        if (ID_vaga) {
            const vaga = new vagaclasse(ID_vaga);
            try {
                await vaga.excluir();
                resposta_vaga.json({
                    status: true,
                    mensagem: 'Vaga excluída com sucesso!'
                });
            } catch (erro) {
                resposta_vaga.json({
                    status: false,
                    mensagem: 'Não foi possível excluir o vaga! ' + erro.message
                });
            }
        } else {
            resposta_vaga.json({
                status: false,
                mensagem: "O ID_vaga deve ser informado!"
            });
        }
    }


    async GET(requisicao, resposta_vaga) {
        resposta_vaga.type('application/json');
        if (requisicao.method !== 'GET') {
            resposta_vaga.json({
                status: false,
                mensagem: 'Método inválido! Utilize o método GET!'
            });
            return;
        }
        const vaga = new vagaclasse(0);
        try {
            const listaVagas = await vaga.consultar();
            resposta_vaga.json(listaVagas);
        } catch (erro) {
            resposta_vaga.json({
                status: false,
                mensagem: 'Não foi possível mostrar as vagas! ' + erro.message
            });
        }
    }
}
