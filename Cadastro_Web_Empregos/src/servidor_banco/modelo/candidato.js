import candidato_dao from "../campersistencia/canddao.js"; //ok

// cria classe candidato //ok so far
export default class candidatoclasse{
    #ID_cand;
    #Nome_cand;
    #Data_nas_cand;
    #Genero_cand;
    #CEP_cand;
    #Telefone_cand;
    #Email_cand;
    #Cargo_cand;
    #Escolaridade_cand;
    #Curso_cand;
    #Experiencia_cand;
    #Hard_Skills_cand;
    #Soft_Skills_cand;
    #Salario_cand;

    constructor(ID_cand, Nome_cand, Data_nas_cand, Genero_cand, CEP_cand, Telefone_cand, Email_cand, Cargo_cand, Escolaridade_cand, Curso_cand, Experiencia_cand, Hard_Skills_cand, Soft_Skills_cand, Salario_cand) {
        this.#ID_cand = ID_cand;
        this.#Nome_cand = Nome_cand;
        this.#Data_nas_cand = Data_nas_cand;
        this.#Genero_cand = Genero_cand;
        this.#CEP_cand = CEP_cand;
        this.#Telefone_cand = Telefone_cand;
        this.#Email_cand = Email_cand;
        this.#Cargo_cand = Cargo_cand;
        this.#Escolaridade_cand = Escolaridade_cand;
        this.#Curso_cand = Curso_cand;
        this.#Experiencia_cand = Experiencia_cand;
        this.#Hard_Skills_cand = Hard_Skills_cand;
        this.#Soft_Skills_cand = Soft_Skills_cand;
        this.#Salario_cand = Salario_cand;
    }



    get ID_cand() {
        return this.#ID_cand;
    }

    set ID_cand(novoID_cand) {
        this.#ID_cand = novoID_cand;
    }



    get Nome_cand() {
        return this.#Nome_cand;
    }

    set Nome_cand(novoNome_cand) {
        this.#Nome_cand = novoNome_cand;
    }



    get Data_nas_cand() {
        return this.#Data_nas_cand;
    }

    set Data_nas_cand(novaData_nas_cand) {
        this.#Data_nas_cand = novaData_nas_cand;
    }



    get Genero_cand() {
        return this.#Genero_cand;
    }

    set Genero_cand(novoGenero_cand) {
        this.#Genero_cand = novoGenero_cand;
    }



    get CEP_cand() {
        return this.#CEP_cand;
    }

    set CEP_cand(novoCEP_cand) {
        this.#CEP_cand = novoCEP_cand;
    }



    get Telefone_cand() {
        return this.#Telefone_cand;
    }

    set Telefone_cand(novoTelefone_cand) {
        this.#Telefone_cand = novoTelefone_cand;
    }



    get Email_cand() {
        return this.#Email_cand;
    }

    set Email_cand(novoEmail_cand) {
        this.#Email_cand = novoEmail_cand;
    }



    get Cargo_cand() {
        return this.#Cargo_cand;
    }

    set Cargo_cand(novoCargo_cand) {
        this.#Cargo_cand = novoCargo_cand;
    }



    get Escolaridade_cand() {
        return this.#Escolaridade_cand;
    }

    set Escolaridade_cand(novoEscolaridade_cand) {
        this.#Escolaridade_cand = novoEscolaridade_cand;
    }



    get Curso_cand() {
        return this.#Curso_cand;
    }

    set Curso_cand(novoCurso_cand) {
        this.#Curso_cand = novoCurso_cand;
    }



    get Experiencia_cand() {
        return this.#Experiencia_cand;
    }

    set Experiencia_cand(novaExperiencia_cand) {
        this.#Experiencia_cand = novaExperiencia_cand;
    }



    get Hard_Skills_cand(){
        return this.#Hard_Skills_cand;
    }

    set Hard_Skills_cand(novaHard_Skills_cand){
        this.#Hard_Skills_cand = novaHard_Skills_cand;
    }



    get Soft_Skills_cand() {
        return this.#Soft_Skills_cand;
    }

    set Soft_Skills_cand(novaSoft_Skills_cand) {
        this.#Soft_Skills_cand = novaSoft_Skills_cand;
    }



    get Salario_cand() {
        return this.#Salario_cand;
    }

    set Salario_cand(novosSalario_cand) {
        this.#Salario_cand = novosSalario_cand;
    }





     toJSON() {
        return {
            ID_cand: this.#ID_cand,
            Nome_cand: this.#Nome_cand,
            Data_nas_cand: this.#Data_nas_cand,
            Genero_cand: this.#Genero_cand,
            CEP_cand: this.#CEP_cand,
            Telefone_cand: this.#Telefone_cand,
            Email_cand: this.#Email_cand,
            Cargo_cand: this.#Cargo_cand,
            Escolaridade_cand: this.#Escolaridade_cand,
            Curso_cand: this.#Curso_cand,
            Experiencia_cand: this.#Experiencia_cand,
            Hard_Skills_cand: this.#Hard_Skills_cand,
            Soft_Skills_cand: this.#Soft_Skills_cand,
            Salario_cand: this.#Salario_cand,
        };
    }

    async gravar() { 
        const novocandidatoDAO = new candidato_dao();
        await novocandidatoDAO.gravar(this);
    };
    async atualizar() {
        const novocandidatoDAO = new candidato_dao();
        await novocandidatoDAO.atualizar(this);
    };
    async excluir(){
        const novocandidatoDAO = new candidato_dao();
        await novocandidatoDAO.excluir(this);
    };
    async consultar(){
        const novocandidatoDAO = new candidato_dao();
        return await novocandidatoDAO.consultar(this);
    };
}