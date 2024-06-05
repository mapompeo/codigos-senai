-- -------------------------------------------------------------------------
-- INSERTS DAS TABELAS
-- -------------------------------------------------------------------------

INSERT INTO FORNECEDOR (ID_FORNECEDOR, TELEFONE, ENDERECO, EMAIL) VALUES
	(1, 9226738434, "Rua Santa Clara", "milena.rosa.moura@email.com"),
    (2, 6125355983, "Quadra QN 314 Conjunto 2", "isabelly.lucia.ribeiro@mantegassi.com"),
    (3, 2729274572, "Rua Torquato Dias", "manoel.yago.assuncao@goldenhotel.com.br");

INSERT INTO DISTRIBUIDOR (CNPJ, RAZAO_SOCIAL, NOME_FANTASIA, FK_DISTRIBUIDOR_ID_FORNECEDOR) VALUES
	(47162587000107, "Condor S.A.", "Condor", 1),
    (28615268000157, "Megalimp Corp", "Megalimp", 2),
    (44927496000119, "Churiço LTDA", "Churiço Produtos de Limpeza", 3);

INSERT INTO DOADOR_PF (CPF, RG, NOME, SOBRENOME, FK_DOADOR_PF_ID_FORNECEDOR) VALUES
	(62903438587, 180811794, "Oliver", "Ruan Farias", 1),
    (35445042782, 383119984, "Gael", "Diogo Oliveira", 2),
    (79481598608, 126908679, "Amanda", "Débora Nunes", 3);

INSERT INTO DOADOR_PJ (CNPJ, NOME, NOME_FANTASIA, FK_DOADOR_PJ_ID_FORNECEDOR) VALUES
	(90464084000107, "Lúcia e Bruno Marcenaria ME",  "LB Marcenaria", 1),
	(31573205000190, "Clara e Regina Fotografias ME", "CR Fotografia", 2),
    (48214346000119, "Isaac e Heitor Lavanderia Ltda", "IH Lavanderia Ltda", 3);
    
INSERT INTO ANONIMO (ID_ANONIMO, FK_ANONIMO_ID_FORNECEDOR) VALUES
	(1, 1),
	(2, 2),
    (3, 3);

-- -------------------------------------------------------------------------

INSERT INTO CATEGORIA (ID_CATEGORIA, NOME_CATEGORIA) VALUES
	(1, "limpeza"),
	(2, "Higiene Pessoal"),
	(3, "Alimento"),
	(4, "Roupa");

INSERT INTO FABRICANTE (ID_FABRICANTE, NOME_FABRICANTE) VALUES
	(1, "Caldo Bom"),
	(2, "Ype"),
	(3, "Colgate"),
	(4, "Personal"),
	(5, "Bom Bril"),
	(6, "Tio Urbano"),
	(7, "Pinho Sol"),
	(8, "Qboa"),
	(9, "Massa"),
	(10, "Adidas");

INSERT INTO PRODUTO (ID_PRODUTO, NOME, DESCRICAO, FK_PRODUTO_ID_FABRICANTE, FK_PRODUTO_ID_CATEGORIA) VALUES
	(1, "Detergente", "É um agente de limpeza que remove sujeira e gordura.", 1, 2),
	(2, "Papel Higiênico", "É feito de papel macio, descartável após o uso.", 2, 4),
	(3, "Pasta de Dente", "É um creme usado para limpar e proteger os dentes, combatendo cáries e mau hálito.", 2, 3),
	(4, "Água Sanitária", "Água sanitária é um desinfetante líquido usado para limpar e higienizar, eliminando germes e manchas.", 1, 1),
	(5, "Arroz", "Arroz é um grão amplamente consumido como alimento básico, rico em carboidratos e versátil em receitas.", 3, 3),
	(6, "Feijão", "Feijão é uma leguminosa nutritiva, rica em proteínas e fibras, comum em diversas culinárias.", 3, 1),
	(7, "Camisa", "Camisa é uma peça de roupa com mangas e botões, usada na parte superior do corpo.", 4, 4);

-- -------------------------------------------------------------------------
    
INSERT INTO ENDERECO (ID_ENDERECO, CEP, UF, CIDADE, BAIRRO, LOGRADOURO, NUMERO, COMPLEMENTO) VALUES
	(1, 49010500, "SE", "Aracaju", "Centro", "Rua 300", 568, "Casa 02"),
    (2, 64207570, "PI", "Parnaíba", "Planalto de Monteserra", "Rua 760", 687, "Apto 54"),
    (3, 78558367, "MT", "Sinop", "Loteamento Alto da Glória", "Rua 540", 255, "Casa 65");

INSERT INTO CARGOS (ID_CARGO, NOME_CARGO) VALUES
	(1, "Limpeza"),
    (2, "Cozinheiro"),
    (3, "Cuidador");

INSERT INTO COLABORADOR (ID_COLABORADOR, NOME_COLABORADOR, SOBRENOME_COLABORADOR, FK_COLABORADOR_ID_ENDERECO, FK_COLABORADOR_ID_CARGO) VALUES
	(1, "Isabella", "Lara Silva", 3, 2),
	(2, "Tânia", "Kamilly da Mota", 1, 3),
	(3, "João Hugo", "Nathan Barros", 2, 1);

INSERT INTO ESTOQUE (ID_ESTOQUE, VALIDADE, QUANTIDADE, DATA_DE_CHEGADA, FK_ESTOQUE_ID_PRODUTO, FK_ESTOQUE_ID_FORNECEDOR) VALUES
	(1, '2026-03-09', 17, '2021-08-20', 1, 1),
	(2, '2000-08-06', 31, '1992-09-13', 2, 2),
	(3, '2014-11-17', 12, '1980-10-06', 3, 3);

INSERT INTO PEDIDO (ID_PEDIDO, DATA_RETIRADA, QUANTIDADE, DESCRICAO, FK_PEDIDO_ID_COLABORADOR) VALUES
	(1, '2008-03-31', 14, "Legal", 1),
	(2, '2007-12-12', 21, "Maneiro", 2),
	(3, '1991-09-29', 31, "Doidão", 3);

INSERT INTO ESTOQUE_PEDIDO (FK_ESTOQUE_PEDIDO_ID_PRODUTO, FK_ESTOQUE_PEDIDO_ID_FORNECEDOR) VALUES
	(1, 3),
	(2, 1),
	(3, 2);