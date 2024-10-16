USE MASTER IF EXISTS(
	SELECT * FROM sys.databases WHERE name='bdTccPlus')
DROP DATABASE bdTccPlus
go 

CREATE DATABASE bdTccPlus
go
use bdTccPlus
CREATE TABLE Usuario
( 
   id            INT			IDENTITY,
   nome          VARCHAR(100)	NOT NULL,
   email         VARCHAR(100)	 NOT NULL,
   senha         VARCHAR(100)	NOT NULL,
   nivelAcesso   VARCHAR(10)    NULL, -- ADMIN,Professor e AlunoGerente
   foto			 VARBINARY(MAX) NULL,
   dataCadastro	 SMALLDATETIME	NULL,
   statusUsuario VARCHAR(20)    NOT NULL, -- ATIVO ou INATIVO ou TROCAR_SENHA

   PRIMARY KEY (id)
)
create table Curso(
id int identity,
nome varchar(100),
sigla varchar(3),
 PRIMARY KEY (id)
)
create table Turma(
id int identity,
nome varchar(100),
ano varchar(4),
statusTurma varchar(20),
Curso_id int not null
PRIMARY KEY (id)
FOREIGN KEY (Curso_id) REFERENCES Curso(id)

)


CREATE TABLE Projeto(
		id				 int				 identity,
		nome			 varchar(30)		 not null,
		descricao varchar(200)	 NOT NULL,
		documentacao varbinary(max)          ,
		link_Sistema    Varchar(200),
		usuario_id int not null,
        statusProjeto VARCHAR(20),
		PRIMARY KEY (id),
		FOREIGN KEY (usuario_id ) REFERENCES Usuario(id)
)


CREATE TABLE Projeto_Avaliacao(
        id	int	identity,
        Ano	SMALLDATETIME	NOT NULL,
        usuario_id int not null,
	    nota_doc int not null,
		nota_apresentacao int not null,
		nota_frontEnd int not null,
		nota_backEnd int not null,
		nota_mobile int not null,
		nota_final int not null,
        statusAvaliacao VARCHAR(20)not null, 
		projeto_id int not null,
		obs_projeto varchar(200) ,
		PRIMARY KEY (id),
		FOREIGN KEY (usuario_id ) REFERENCES Usuario(id),
		FOREIGN KEY (projeto_id) REFERENCES Projeto(id)
)

CREATE TABLE Integrante(
        id	int	identity,
		nome          VARCHAR(100)	NOT NULL,
		rm INT not null,
		projeto_id int not null,
		statusIntegrante varchar(10) ,
		PRIMARY KEY (id),
		FOREIGN KEY (projeto_id) REFERENCES Projeto(id)
)
Insert Curso(nome,sigla)Values('Informática3e','INF')
insert Turma(nome,ano,Curso_id,statusTurma)Values('INF3A','2024',1,'ATIVO')
insert Turma(nome,ano,Curso_id,statusTurma)Values('INF3B','2024',1,'ATIVO')
insert Turma(nome,ano,Curso_id,statusTurma)Values('INF3C','2024',1,'ATIVO')
insert Turma(nome,ano,Curso_id,statusTurma)Values('INF3D','2024',1,'ATIVO')
insert Turma(nome,ano,Curso_id,statusTurma)Values('INF3E','2024',1,'ATIVO')
insert Turma(nome,ano,Curso_id,statusTurma)Values('INF3F','2024',1,'ATIVO')
insert Turma(nome,ano,Curso_id,statusTurma)Values('INF3G','2024',1,'ATIVO')
insert Turma(nome,ano,Curso_id,statusTurma)Values('INF3H','2024',1,'ATIVO')
insert Turma(nome,ano,Curso_id,statusTurma)Values('INF3I','2024',1,'ATIVO')
INSERT Usuario( nome, email,senha, nivelAcesso,dataCadastro,statusUsuario)
VALUES ('Reinaldo','Reinaldo@gmail.com',12345,'Gerente','11/03/2021','Ativo'); 
INSERT Usuario( nome, email,senha, nivelAcesso,dataCadastro,statusUsuario)
VALUES ('Guilherme','Gui@gmail.com',44245,'Gerente','11/06/2019','Ativo')
INSERT Projeto( nome, descricao, usuario_id ) 
VALUES('TCC Plus', 'Gerenciador de Projetos da FIEB', 1)
Insert Aluno(nome,rm,email,usuario_id,turma_id) Values('Reinaldo',86639,'Reinaldo@gmail.com',1,1);
Insert Professor(nome,matricula,email,usuario_id) Values('Leandro Cruz',87789,'Leandro@gmail.com',2);
INSERT INTO Projeto_Avaliacao 
    (Ano, nota_doc, nota_apresentacao, nota_frontEnd, nota_backEnd, nota_mobile, nota_final, statusAvaliacao, projeto_id, usuario_id, obs_projeto)
VALUES 
    ('2024-09-12T00:00:00', 7, 7, 7, 7, 7, 7, 'Pendente', 1, 1, NULL);
	
select * from Projeto_Avaliacao
select * from Projeto
Select * from Curso
Select * from Turma
Select * from Usuario
Select * from Aluno
Select * from Professor
