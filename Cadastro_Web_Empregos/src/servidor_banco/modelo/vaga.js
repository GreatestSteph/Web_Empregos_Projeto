import vaga_dao from "../campersistencia/vagadao.js"; //ok

// cria classe candidato //ok so far
export default class vagaclasse{
    #ID_vaga;
    #Cargo_vaga;
    #Data_final;
    #Qtde_vaga;
    #Escolaridade_vaga;
    #Curso_vaga;
    #Requisitos_vaga;
    #Salario_vaga;
    #Beneficios_vaga;
    #Email_empresa; 

    constructor(ID_vaga, Cargo_vaga, Data_final, Qtde_vaga, Escolaridade_vaga, Curso_vaga, Requisitos_vaga, Salario_vaga, Beneficios_vaga, Email_empresa) {
        this.#ID_vaga = ID_vaga;
        this.#Cargo_vaga = Cargo_vaga;
        this.#Data_final = Data_final;
        this.#Qtde_vaga = Qtde_vaga;
        this.#Escolaridade_vaga = Escolaridade_vaga;
        this.#Curso_vaga = Curso_vaga;
        this.#Requisitos_vaga = Requisitos_vaga;
        this.#Salario_vaga = Salario_vaga;
        this.#Beneficios_vaga  = Beneficios_vaga;
        this.#Email_empresa = Email_empresa;
    }



    get ID_vaga() {
        return this.#ID_vaga;
    }

    set ID_vaga(novoID_vaga) {
        this.#ID_vaga = novoID_vaga;
    }




    get Cargo_vaga() {
        return this.#Cargo_vaga;
    }

    set Cargo_vaga(novoCargo_vaga) {
        this.#Cargo_vaga = novoCargo_vaga
    }



    get Data_final() {
        return this.#Data_final;
    }

    set Data_final(novaData_final) {
        this.#Data_final = novaData_final;
    }



    get Qtde_vaga() {
        return this.#Qtde_vaga;
    }

    set Qtde_vaga(novaQtde_vaga) {
        this.#Qtde_vaga = novaQtde_vaga;
    }



    get Escolaridade_vaga() {
        return this.#Escolaridade_vaga;
    }

    set Escolaridade_vaga(novoEscolaridade_vaga) {
        this.#Escolaridade_vaga = novoEscolaridade_vaga;
    }



    get Curso_vaga() {
        return this.#Curso_vaga;
    }

    set Curso_vaga(novoCurso_vaga) {
        this.#Curso_vaga = novoCurso_vaga;
    }



    get Requisitos_vaga() {
        return this.#Requisitos_vaga;
    }

    set Requisitos_vaga(novaRequisitos_vaga) {
        this.#Requisitos_vaga = novaRequisitos_vaga;
    }



    get Salario_vaga() {
        return this.#Salario_vaga;
    }

    set Salario_vaga(novaSalario_vaga) {
        this.#Salario_vaga = novaSalario_vaga;
    }



    get Beneficios_vaga() {
        return this.#Beneficios_vaga;
    }

    set Beneficios_vaga(novaBeneficios_vaga) {
        this.#Beneficios_vaga = novaBeneficios_vaga;
    }



    get Email_empresa() {
        return this.#Email_empresa;
    }

    set Email_empresa(novaEmail_empresa) {
        this.#Email_empresa = novaEmail_empresa;
    }


     toJSON() {
        return {
            ID_vaga: this.#ID_vaga,
            Cargo_vaga: this.#Cargo_vaga,
            Data_final: this.#Data_final,
            Qtde_vaga: this.#Qtde_vaga,
            Escolaridade_vaga: this.#Escolaridade_vaga,
            Curso_vaga: this.#Curso_vaga,
            Requisitos_vaga: this.#Requisitos_vaga,
            Salario_vaga: this.#Salario_vaga,
            Beneficios_vaga: this.#Beneficios_vaga,
            Email_empresa: this.#Email_empresa,
        };
    }

    async gravar() { 
        const novavagaDAO = new vaga_dao();
        await novavagaDAO.gravar(this);
    };
    async atualizar() {
        const novavagaDAO = new vaga_dao();
        await novavagaDAO.atualizar(this);
    };
    async excluir(){
        const novavagaDAO = new vaga_dao();
        await novavagaDAO.excluir(this);
    };
    async consultar(){
        const novavagaDAO = new vaga_dao();
        return await novavagaDAO.consultar(this);
    };
}