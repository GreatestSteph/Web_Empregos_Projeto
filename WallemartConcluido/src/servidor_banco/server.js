import express from 'express'; 
import rotasdocandidato from './rotas/rotasdocandidato.js';
import rotasdavaga from './rotas/rotasdavaga.js';
import candidatoclasse from "./modelo/candidato.js"
import vagaclasse from './modelo/vaga.js';
import cors from 'cors';


const localizaçaohostname = 'localhost'; 
const numeroporta = 4001; //numero porta
const aplicacao = express();  

aplicacao.use(express.urlencoded({extended: true})); 
aplicacao.use(cors()); // Habilitando o CORS para todas as origens

aplicacao.get('/', (requisicao, resposta) => { 
    resposta.redirect('http://localhost:3000/'); 
});

aplicacao.get('/login', (requisicao, resposta) => { 
    resposta.redirect('http://localhost:3000/'); 
});

aplicacao.listen(numeroporta, localizaçaohostname, () => {
    console.log('O servidor está funcionando em ' + localizaçaohostname + ', na porta: ' + numeroporta); 
});

aplicacao.use(express.json());
aplicacao.use('/candidatobackend', rotasdocandidato)
aplicacao.use('/vagabackend', rotasdavaga)
//ate aqui ta ok
//-------------------------------------------------------------------------------------------------------


//testar se o banco de dados está funcionando

// candidato adicionado
//const candidato = new candidatoclasse(1, 'João Silva', '1990-05-15', 'Masculino', '12345-678', '(11) 98765-4321', 'joao.silva@email.com', 'Desenvolvedor Web', 'Superior', 'Ciência da Computação', '3 anos', 'Java, JavaScript, HTML, CSS', 'Trabalho em equipe, Comunicação', 5000.00);
//const candidato = new candidatoclasse(2, 'Maria Santos', '1995-10-20', 'Feminino', '54321-876', '(11) 98765-1234', 'maria.santos@email.com', 'Analista de Marketing', 'Pós-graduação', 'Marketing Digital', '5 anos', 'SEO, Google Analytics, Social Media Marketing', 'Criatividade, Pensamento Analítico', 6000.00);


// vaga adicionado
//const vaga = new vagaclasse(2, 'Artista Web', '2024-05-30', 2, 'Superior', 'Ciência da Computação', 'Experiência com frameworks como React ou Angular.', 6000.00, 'Vale refeição, Plano de saúde', 'empresa@email.com');
//const vaga = new vagaclasse(3, 'Analista de Marketing', '2024-06-15', 1, 'Pós-graduação', 'Marketing Digital', 'Conhecimento avançado em SEO e Google Analytics.', 7000.00, 'Vale transporte, Plano odontológico', 'outraempresa@email.com');







//gravar funcionando 

//const candidato = new candidatoclasse(0, 'João Silva', '1990-05-15', 'Masculino', '12345-678', '(11) 98765-4321', 'joao.silva@email.com', 'Desenvolvedor Web', 'Superior', 'Ciência da Computação', '3 anos', 'Java, JavaScript, HTML, CSS', 'Trabalho em equipe, Comunicação', 5000.00);

//candidato.gravar().then(() => {
//    console.log('Candidato gravado com sucesso');
//}).catch((erro) => {
//    console.log('Não foi possível gravar o candidato no banco de dados:' + erro.message)
//})

//vaga.gravar().then(() => {
//    console.log('Vaga gravada com sucesso');
//}).catch((erro) => {
//    console.log('Não foi possível gravar o vaga no banco de dados:' + erro.message)
//})








//atualizar funcionando

//candidato.atualizar().then(() =>{
//    console.log('Candidato atualizado com sucesso!');
//}).catch((erro) => {
//    console.log('Não foi possível atualizar o candidato no banco de dados:' + erro.message)
//})

//vaga.atualizar().then(() =>{
//    console.log('Vaga atualizada com sucesso!');
//}).catch((erro) => {
//    console.log('Não foi possível atualizar a vaga no banco de dados:' + erro.message)
//})






//exclui candidato funcionando

//candidato.excluir().then(() =>{
//    console.log('Candidato excluido com sucesso!');
//}).catch((erro) => {
//    console.log('Não foi possível excluir o candidato no banco de dados:' + erro.message)
//})

//vaga.excluir().then(() =>{
//    console.log('Vaga excluida com sucesso!');
//}).catch((erro) => {
//    console.log('Não foi possível excluir a vaga no banco de dados:' + erro.message)
//})









//consulta funcionando

//candidato.consultar().then((listaCandidatos) => {
//   for (const candidato of listaCandidatos){
//        console.log(candidato.toJSON())
//    }
//}).catch((erro) => {
//    console.log('Não foi possível consultar o candidato!' + erro.message);
//})

//vaga.consultar().then((listaVagas) => {
//   for (const vaga of listaVagas){
//        console.log(vaga.toJSON())
//    }
//}).catch((erro) => {
//    console.log('Não foi possível consultar a vaga!' + erro.message);
//})
