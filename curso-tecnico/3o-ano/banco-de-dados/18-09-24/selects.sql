-- SELECTS -----------------------------------------

-- 1) Traga o nome dos usuários cadastrados com o perfil "2";

SELECT NOMECOMPLETO
FROM USUARIO
INNER JOIN ESTUDANTE ON CODUSUARIO = MATRICULA
WHERE PERFIL = 2;

-- 2) Traga o número de estudantes cadastrados;

SELECT COUNT(MATRICULA) FROM ESTUDANTE;

-- 3) Traga as referências do livro O pequeno príncipe;

SELECT AUTOR, ANO, EDITORA
FROM LIVRO
WHERE TITULO = 'O Pequeno Príncipe';

-- 4) Traga os dados de quem emprestou o livro O pequeno príncipe;

SELECT ESTUDANTE.NOMECOMPLETO, ESTUDANTE.EMAIL, ESTUDANTE.TELEFONE, EMPRESTIMO.DATAENTRADA, EMPRESTIMO.DATARETIRADA, EMPRESTIMO.DEVOLUCAO
FROM EMPRESTIMO
INNER JOIN ESTUDANTE ON EMPRESTIMO.MATRICULA = ESTUDANTE.MATRICULA
INNER JOIN LIVRO ON EMPRESTIMO.CODLIVRO = LIVRO.CODLIVRO
WHERE LIVRO.TITULO = 'O Pequeno Príncipe';

-- no select puxa dos dados da pessoa e os dados do emprestimo
-- depois faz a referência das tabelas, interligando a chave da matricula na tabela do emprestimo
-- logo em seguida faz o mesmo para o código do livro, com a tabela emprestimo e livro
-- por fim é definido o livro da pesquisa com a cláusula where

-- 5 ) Traga o nome do estudante, com sua senha e os respectivos livros locados. (Apenas estudantes que possuem livros locados);

SELECT ESTUDANTE.NOMECOMPLETO, USUARIO.SENHA, LIVRO.TITULO
FROM ESTUDANTE
INNER JOIN USUARIO ON ESTUDANTE.MATRICULA = USUARIO.CODUSUARIO
INNER JOIN EMPRESTIMO ON ESTUDANTE.MATRICULA = EMPRESTIMO.MATRICULA
INNER JOIN LIVRO ON EMPRESTIMO.CODLIVRO = LIVRO.CODLIVRO;

-- aqui vemos um inner join entre todas as tabelas, pois precisamos sair da tabela usuario e chegar na tabela livro (como mostra a imagem do modelo anexada na atividade)
-- primeiro devemos selecionar os dados solicitados: nome do estudante, senha de usuario e titulo do livro
-- depois é verificado se o codigo de usuario é igual a matricula do estudante 
-- depois se a matricula do emprestimo é a mesma da matricula do estudante
-- e para finalizar se o codigo do livro emprestado é igual ao codigo do livro na tabela livro