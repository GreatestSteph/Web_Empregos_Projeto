CREATE TABLE candidato(
    ID_cand INT NOT NULL AUTO_INCREMENT,
    Nome_cand VARCHAR(60) NOT NULL,
    Data_nas_cand DATETIME NOT NULL,
    Genero_cand ENUM('Masculino', 'Feminino', 'Outro') NOT NULL,
    CEP_cand VARCHAR(15) NOT NULL,
    Telefone_cand VARCHAR(20) NOT NULL,
    Email_cand VARCHAR(80) NOT NULL,
    Cargo_cand VARCHAR(50) NOT NULL,
    Escolaridade_cand ENUM('Fundamental', 'Médio', 'Superior', 'Pós-graduação', 'Doutorado') NOT NULL,
    Curso_cand VARCHAR(80) NOT NULL,
    Experiencia_cand VARCHAR(30) NOT NULL,
    Hard_Skills_cand TEXT NOT NULL,
    Soft_Skills_cand VARCHAR (200) NOT NULL,
    Salario_cand DECIMAL(10,2) NOT NULL DEFAULT 0,
    CONSTRAINT pk_candidato PRIMARY KEY(ID_cand)
);

CREATE TABLE vaga(
    ID_vaga INT NOT NULL AUTO_INCREMENT,
    Cargo_vaga VARCHAR(50) NOT NULL,
    Data_final DATETIME NOT NULL,
    Qtde_vaga INT NOT NULL,
    Escolaridade_vaga ENUM('Fundamental', 'Médio', 'Superior', 'Pós-graduação', 'Doutorado') NOT NULL,
    Curso_vaga VARCHAR(80) NOT NULL,
    Requisitos_vaga TEXT,
    Salario_vaga DECIMAL(10,2) NOT NULL DEFAULT 0,
    Beneficios_vaga TEXT,
    Email_empresa VARCHAR(80) NOT NULL,
    CONSTRAINT pk_vaga PRIMARY KEY(ID_vaga)
);

