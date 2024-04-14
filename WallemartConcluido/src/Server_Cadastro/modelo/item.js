import item_dao from "../campersistencia/itemdao.js"; //ok

// cria classe funcionario //ok so far
export default class itemclasse{
    #id;
    #Nome_prod;
    #Data_fab;
    #Data_ven;
    #Tipo_prod;
    #Preco_prod;
    #Qtde_prod;

    constructor(id, Nome_prod, Data_fab, Data_ven, Tipo_prod, Preco_prod, Qtde_prod) {
        this.#id = id;
        this.#Nome_prod = Nome_prod;
        this.#Data_fab = Data_fab;
        this.#Data_ven = Data_ven;
        this.#Tipo_prod = Tipo_prod;
        this.#Preco_prod = Preco_prod;
        this.#Qtde_prod = Qtde_prod;
    }



    get id() {
        return this.#id;
    }

    set id(novoid) {
        this.#id = novoid;
    }




    get Nome_prod() {
        return this.#Nome_prod;
    }

    set Nome_prod(novoNome_prod) {
        this.#Nome_prod = novoNome_prod;
    }



    get Data_fab() {
        return this.#Data_fab;
    }

    set Data_fab(novaData_fab) {
        this.#Data_fab = novaData_fab;
    }



    get Data_ven() {
        return this.#Data_ven;
    }

    set Data_ven(novaData_ven) {
        this.#Data_ven = novaData_ven;
    }



    get Tipo_prod() {
        return this.#Tipo_prod;
    }

    set Tipo_prod(novoTipo_prod) {
        this.#Tipo_prod = novoTipo_prod;
    }



    get Preco_prod() {
        return this.#Preco_prod;
    }

    set Preco_prod(novoPreco_prod) {
        this.#Preco_prod = novoPreco_prod;
    }



    get Qtde_prod() {
        return this.#Qtde_prod;
    }

    set Qtde_prod(novaQtde_prod) {
        this.#Qtde_prod = novaQtde_prod;
    }



     toJSON() {
        return {
            id: this.#id,
            Nome_prod: this.#Nome_prod,
            Data_fab: this.#Data_fab,
            Data_ven: this.#Data_ven,
            Tipo_prod: this.#Tipo_prod,
            Preco_prod: this.#Preco_prod,
            Qtde_prod: this.#Qtde_prod,
        };
    }

    async gravar() { 
        const novoitemDAO = new item_dao();
        await novoitemDAO.gravar(this);
    };
    async atualizar() {
        const novoitemDAO = new item_dao();
        await novoitemDAO.atualizar(this);
    };
    async excluir(){
        const novoitemDAO = new item_dao();
        await novoitemDAO.excluir(this);
    };
    async consultar(){
        const novoitemDAO = new item_dao();
        return await novoitemDAO.consultar(this);
    };
}