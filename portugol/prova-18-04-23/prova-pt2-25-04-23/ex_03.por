programa
{
	funcao inicio()
	{
		inteiro dianteiro = 0
		inteiro traseiro = 0
		inteiro peso = 0
		inteiro total = 0
		real multa = 191.54

		escreva("Insira o peso total do caminhão:")
		leia(peso)
		escreva("Insira o peso dianteiro do caminhão:")
		leia(dianteiro)
		escreva("insira o peso traseiro do caminhão:")
		leia(traseiro)

		total = dianteiro + traseiro + peso
		
		se(dianteiro <= 6 e traseiro <= 17) {
			escreva("O caminhão está com o peso correto!")}
		se(dianteiro > 6 e traseiro > 17) {
			multa = (total - 23) * multa}

		escreva(multa)

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 553; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {dianteiro, 5, 10, 9}-{traseiro, 6, 10, 8}-{peso, 7, 10, 4}-{total, 8, 10, 5}-{multa, 9, 7, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */