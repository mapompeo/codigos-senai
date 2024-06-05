CREATE SCHEMA PROJETO;
USE PROJETO;

CREATE TABLE CLIENTE (
	ID NUMERIC(4) NOT NULL PRIMARY KEY,
    ENDERECO VARCHAR(200) NOT NULL,
    FONE NUMERIC(11) NOT NULL,
    EMAIL VARCHAR(100) NOT NULL
);

CREATE TABLE PJ (
	RAZAO_SOCIAL VARCHAR(100) NOT NULL,
    NM_FANTASIA VARCHAR(100) NOT NULL,
    CNPJ NUMERIC(14) NOT NULL,
    FK_ID_PJ NUMERIC(4) NOT NULL,
    CONSTRAINT FK_ID_PJ FOREIGN KEY (FK_ID_PJ) REFERENCES CLIENTE (ID)
);

CREATE TABLE PF (
	NOME VARCHAR(100) NOT NULL,
	APELIDO VARCHAR (100) NOT NULL,
    CPF NUMERIC(11) NOT NULL,
	FK_ID_PF NUMERIC(4) NOT NULL,
    CONSTRAINT FK_ID_PF FOREIGN KEY (FK_ID_PF) REFERENCES CLIENTE (ID)
);