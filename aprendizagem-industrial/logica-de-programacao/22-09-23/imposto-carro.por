programa
{
	funcao inicio()
	{
		real custoFabrica = 0.0, custoTotal = 0.0
		inteiro distribuidor = 28, impostos = 45

		escreva("Digite o custo de fábrica do seu carro: ")
		leia(custoFabrica)

		custoTotal = (custoFabrica * distribuidor / 100) + (impostos * custoFabrica / 100) + custoFabrica

		escreva("O custo final é de R$",custoTotal,".")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 348; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */