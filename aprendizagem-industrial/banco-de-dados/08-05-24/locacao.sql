CREATE TABLE CLIENTE (
	ID_CLIENTE NUMERIC (4) NOT NULL PRIMARY KEY,
    NM_CLI VARCHAR (100) NOT NULL,
    ENDERECO VARCHAR (100) NOT NULL
);

CREATE TABLE CONTATO (
	TELEFONE NUMERIC (14) NOT NULL,
	ID_CLIENTE NUMERIC (4) NOT NULL PRIMARY KEY,
    CONSTRAINT ID_CLIENTE FOREIGN KEY (ID_CLIENTE) REFERENCES CLIENTE (ID_CLIENTE)
);

CREATE TABLE LOCACAO (
	ID_LOCACAO NUMERIC (4) NOT NULL PRIMARY KEY,
    DEVOLUCAO DATE NOT NULL,
    FK_ID_CLIENTE NUMERIC (4) NOT NULL,
    CONSTRAINT FK_ID_CLIENTE FOREIGN KEY (FK_ID_CLIENTE) REFERENCES CLIENTE (ID_CLIENTE)
);

CREATE TABLE FILME (
	ID_FILME NUMERIC (3) NOT NULL PRIMARY KEY,
    NM_FILME VARCHAR(50) NOT NULL
);

CREATE TABLE FILME_LOCADO (
	FK_ID_LOCACAO NUMERIC (4) NOT NULL,
    FK_ID_FILME NUMERIC (3) NOT NULL,
    CONSTRAINT FK_ID_LOCACAO FOREIGN KEY (FK_ID_LOCACAO) REFERENCES LOCACAO (ID_LOCACAO),
    CONSTRAINT FK_ID_FILME FOREIGN KEY (FK_ID_FILME) REFERENCES FILME (ID_FILME)
);


INSERT INTO CLIENTE (ID_CLIENTE, NM_CLI, ENDERECO) VALUES (1000, "FERNANDO", "RUA ALGUMA COISA");
INSERT INTO CLIENTE (ID_CLIENTE, NM_CLI, ENDERECO) VALUES (2000, "GUILHERME", "RUA ALGUMA COISA");

INSERT INTO LOCACAO (ID_LOCACAO, DEVOLUCAO, FK_ID_CLIENTE) VALUES (1010, 2019/07/07, 1000);
INSERT INTO LOCACAO (ID_LOCACAO, DEVOLUCAO, FK_ID_CLIENTE) VALUES (1011, 2019/07/07, 2000);
INSERT INTO LOCACAO (ID_LOCACAO, DEVOLUCAO, FK_ID_CLIENTE) VALUES (1012, 2019/08/07, 1000);

INSERT INTO FILME (ID_FILME, NM_FILME) VALUES (201, "MATRIX");
INSERT INTO FILME (ID_FILME, NM_FILME) VALUES (302, "ALIEN");

INSERT INTO CONTATO (TELEFONE, ID_CLIENTE) VALUES (11111111, 1000);
INSERT INTO CONTATO (TELEFONE, ID_CLIENTE) VALUES (55555555, 1000);
INSERT INTO CONTATO (TELEFONE, ID_CLIENTE) VALUES (22222222, 2000);
INSERT INTO CONTATO (TELEFONE, ID_CLIENTE) VALUES (33333333, 1000);


SELECT * FROM CLIENTE;
SELECT * FROM CONTATO;
SELECT * FROM FILME;
SELECT * FROM FILME_LOCADO;
SELECT * FROM LOCACAO;