CREATE SCHEMA PROJETOS;
USE PROJETOS;

CREATE TABLE CARGO (
	COD_CARGO NUMERIC(1) PRIMARY KEY NOT NULL,
	NM_CARGO VARCHAR(20) NOT NULL
);

CREATE TABLE FUNCIONARIO (
	MATRICULA NUMERIC(3) PRIMARY KEY NOT NULL,
	NOME VARCHAR(50) NOT NULL,
	COD_CARGO NUMERIC(1) NOT NULL,
	CONSTRAINT FK_CARGO FOREIGN KEY(COD_CARGO) REFERENCES CARGO(COD_CARGO)
);

CREATE TABLE PROJETO (
	COD_PROJ NUMERIC(2) PRIMARY KEY NOT NULL,
	NM_PROJETO VARCHAR(50) NOT NULL,
	DT_FIM DATE NOT NULL
);

CREATE TABLE PARTICIPA (
	HORAS INT(2) NOT NULL,
	MATRICULA NUMERIC(3) NOT NULL,
	COD_PROJ NUMERIC(2) NOT NULL,
	CONSTRAINT FK_MATRICULA FOREIGN KEY(MATRICULA) REFERENCES FUNCIONARIO(MATRICULA),
	CONSTRAINT FK_PROJ FOREIGN KEY(COD_PROJ) REFERENCES PROJETO(COD_PROJ)
);

CREATE TABLE CLIENTE (
	COD_CLIENTE NUMERIC(4) PRIMARY KEY NOT NULL,
	CLIENTE VARCHAR(50) NOT NULL
);

INSERT INTO CARGO (COD_CARGO, NM_CARGO) VALUES
	(1, 'PROGRAMADOR'),
	(2, 'ANALISTA'),
	(3, 'PROJETISTA');

INSERT INTO FUNCIONARIO (MATRICULA, NOME, COD_CARGO) VALUES
	(120, 'JOÃO', 1),
	(121, 'HÉLIO', 1),
	(270, 'GABRIEL', 2),
	(273, 'SILVA', 3),
	(274, 'ABRAÃO', 2),
	(279, 'CARLA', 1),
	(301, 'ANA', 1),
	(306, 'MANOEL', 3);

INSERT INTO PROJETO (COD_PROJ, NM_PROJETO, DT_FIM) VALUES
	(1, 'ALPHA', '2021_07_17'),
	(8, 'BETA', '2022_01_12'),
	(12, 'GAMMA', '2021_03_21'),
	(17, 'DELTA', '2024_04_21');

INSERT INTO PARTICIPA (HORAS, MATRICULA, COD_PROJ) VALUES
	(37, 120, 1),
	(12, 120, 8),
	(45, 121, 1),
	(21, 121, 8),
	(107, 121, 12),
	(10, 270, 8),
	(38, 270, 12),
	(22, 273, 1),
	(31, 274, 12),
	(27, 279, 1),
	(20, 279, 8),
	(51, 279, 12),
	(16, 301, 12),
	(67, 306, 17);

INSERT INTO CLIENTE (COD_CLIENTE, CLIENTE) VALUES
	(1010, 'AMAZON'),
	(1520, 'GOOGLE'),
	(3355, 'RSET');


-- ----------------------------------------------------------
-- SELECTS
-- ----------------------------------------------------------

SELECT NM_PROJETO FROM PROJETO;

SELECT COUNT(MATRICULA) FROM FUNCIONARIO;

SELECT COUNT(COD_PROJ) FROM PROJETO;

SELECT SUM(HORAS) FROM PARTICIPA;

SELECT NOME, MATRICULA FROM FUNCIONARIO;

SELECT NM_PROJETO, DT_FIM FROM PROJETO ORDER BY DT_FIM ASC;

SELECT NOME FROM FUNCIONARIO WHERE COD_CARGO = 1;

SELECT NOME FROM FUNCIONARIO WHERE COD_CARGO = 2;

SELECT COUNT(NOME) FROM FUNCIONARIO WHERE COD_CARGO = 2;

SELECT CARGO.NM_CARGO, FUNCIONARIO.NOME
FROM CARGO 
INNER JOIN FUNCIONARIO ON CARGO.COD_CARGO = FUNCIONARIO.COD_CARGO
INNER JOIN PROJETO ON CARGO.COD_CARGO = PROJETO.COD_PROJ
WHERE NM_PROJETO = "ALPHA";

SELECT FUNCIONARIO.NOME, CARGO.NM_CARGO, PROJETO.NM_PROJETO
FROM FUNCIONARIO
INNER JOIN CARGO ON FUNCIONARIO.COD_CARGO = CARGO.COD_CARGO
INNER JOIN PARTICIPA ON FUNCIONARIO.MATRICULA = PARTICIPA.MATRICULA
INNER JOIN PROJETO ON PARTICIPA.COD_PROJ = PROJETO.COD_PROJ
WHERE PROJETO.NM_PROJETO = "BETA";

SELECT FUNCIONARIO.NOME, CARGO.NM_CARGO, PROJETO.NM_PROJETO
FROM FUNCIONARIO
INNER JOIN CARGO ON FUNCIONARIO.COD_CARGO = CARGO.COD_CARGO
INNER JOIN PARTICIPA ON FUNCIONARIO.MATRICULA = PARTICIPA.MATRICULA
INNER JOIN PROJETO ON PARTICIPA.COD_PROJ = PROJETO.COD_PROJ
WHERE PROJETO.NM_PROJETO = "GAMMA";

SELECT FUNCIONARIO.NOME, CARGO.NM_CARGO, PROJETO.NM_PROJETO
FROM FUNCIONARIO
INNER JOIN CARGO ON FUNCIONARIO.COD_CARGO = CARGO.COD_CARGO
INNER JOIN PARTICIPA ON FUNCIONARIO.MATRICULA = PARTICIPA.MATRICULA
INNER JOIN PROJETO ON PARTICIPA.COD_PROJ = PROJETO.COD_PROJ
WHERE PROJETO.NM_PROJETO = "DELTA";

SELECT CARGO.NM_CARGO, COUNT(FUNCIONARIO.MATRICULA)
FROM CARGO
LEFT JOIN FUNCIONARIO ON CARGO.COD_CARGO = FUNCIONARIO.COD_CARGO
GROUP BY CARGO.NM_CARGO;