programa
{
	funcao inicio()
	{
		inteiro idade = 0
		inteiro preco = 30
		inteiro valorfinal = 0

		escreva("-- Promoção de 50 anos do cinema Astros --\n")
		escreva("Digite a sua idade:\n")
		leia(idade)

		se(idade >= 10 e idade <= 14 ){
			valorfinal = (preco * 25) / 100}

		se(idade >= 15 e idade <= 17 ){
			valorfinal = (preco * 40) / 100}

		se(idade >= 18 ){
			valorfinal = (preco * 50) / 100}

		escreva("O peço do seu ingresso é de: R$", valorfinal, "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 124; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */