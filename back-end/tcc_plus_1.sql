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
   dataCadastro	 SMALLDATETIME	NOT NULL,
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

CREATE TABLE Aluno(
 id  INT IDENTITY,
 nome VARCHAR(100)	NOT NULL,
 rm int not null,
 email varchar(100) ,
 turma_id int not null,
 usuario_id int not null,
 statusAluno VARCHAR(20)
 PRIMARY KEY (id),
 FOREIGN KEY (turma_id) REFERENCES Turma(id),
 FOREIGN KEY (usuario_id ) REFERENCES Usuario(id)
)
Create Table Professor(
 id  INT IDENTITY,
 Nome varchar(50),
 matricula varchar(10) not null,
 usuario_id int not null,
 StatusProfessor varchar(50) not null,
 PRIMARY KEY (id),
 FOREIGN KEY (usuario_id ) REFERENCES Usuario(id)
)


CREATE TABLE Projeto(
		id				 int				 identity,
		nome			 varchar(30)		 not null,
		descricao varchar(200)	     null,
		documentacao varbinary(max)   ,
		link_Sistema    Varchar(200),
		usuario_id int not null,
        statusProjeto VARCHAR(20),
		PRIMARY KEY (id),
		FOREIGN KEY (usuario_id ) REFERENCES Usuario(id)
)


CREATE TABLE Projeto_Avaliacao(
        id	int	identity,
        Ano	varchar(4)	NOT NULL,
        usuario_id int not null,
	    nota_doc decimal(6,2) not null,
		nota_apresentacao decimal(6,2) not null,
		nota_frontEnd decimal(6,2) not null,
		nota_backEnd decimal(6,2) not null,
		nota_mobile decimal(6,2) not null,
		nota_final decimal(6,2) not null,
        statusAvaliacao VARCHAR(20), 
		projeto_id int not null,
		obs_projeto varchar(200) ,
		PRIMARY KEY (id),
		FOREIGN KEY (usuario_id ) REFERENCES Usuario(id),
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
VALUES ('Leandro Cruz','Leandro@gmail.com',12345,'Professor','11/03/2021','Ativo'); 
Insert Aluno(nome,rm,email,usuario_id,turma_id) Values('Reinaldo',86639,'Reinaldo@gmail.com',1,1);
Insert Professor(nome,matricula,usuario_id,StatusProfessor) Values('Leandro Cruz',87789,2,'Ativo')
Insert Projeto(nome,descricao,documentacao,link_Sistema,usuario_id,statusProjeto)values('teste','testes',null,'http/link.com.br',1,'Ativo')

drop table Projeto

select * from Projeto_Avaliacao
select * from Projeto
Select * from Curso
Select * from Turma
Select * from Usuario
Select * from Aluno
Select * from Professor
Select * from Usuario
