CREATE TABLE ESTUDANTE (
	MATRICULA INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(100) NOT NULL,
    SOBRENOME VARCHAR(100),
    NASCIMENTO DATE NOT NULL
);

CREATE TABLE CONTATO (
	TELEFONE NUMERIC(11) NOT NULL,
	FK_MATRICULA INT NOT NULL,
    CONSTRAINT FK_MATRICULA FOREIGN KEY (FK_MATRICULA) REFERENCES ESTUDANTE (MATRICULA)
);

DROP TABLE CONTATO; -- PARA DROPAR A TABELA INTEIRA
ALTER TABLE CONTATO ADD COLUMN TIPO_CONTATO NUMERIC(1) NOT NULL; -- PARA CRIAR UMA COLUNA A MAIS NA TABELA
ALTER TABLE CONTATO MODIFY COLUMN TIPO_CONTATO VARCHAR(1) NOT NULL; -- PARA ALTERAR O TIPO DE DADO DE UMA COLUNA
ALTER TABLE CONTATO DROP COLUMN TIPO_CONTATO; -- PARA DELETAR UMA COLUNA
DELETE FROM ESTUDANTE WHERE MATRICULA = 1; -- PARA DELETAR POR CAMPO
UPDATE CONTATO SET TELEFONE = 48991884778 WHERE FK_MATRICULA = 2; -- PARA ALTERAR O VALOR DO CAMPO

INSERT INTO ESTUDANTE (MATRICULA, NOME, SOBRENOME, NASCIMENTO) VALUES (1, "José", "Santos", 20070102);
INSERT INTO ESTUDANTE (MATRICULA, NOME, SOBRENOME, NASCIMENTO) VALUES (2, "Kakau", "Retificado", 20060508);
INSERT INTO CONTATO (TELEFONE, FK_MATRICULA, TIPO_CONTATO) VALUES (47991884778, 1, 0), (47991741778, 2, 1);

SELECT * FROM ESTUDANTE;
SELECT * FROM CONTATO;