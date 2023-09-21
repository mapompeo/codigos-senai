programa
{
	funcao inicio()
	{
		real media = 0.0, nota[3]

		escreva("Programa para o cálculo da média\n")

		escreva("Digite a primeira nota\n")
		leia (nota[0])
		escreva("Digite a segunda nota\n")
		leia (nota[1])
		escreva("Digite a terceira nota\n")
		leia (nota[2])

		media = (nota[0] + nota[1] + nota[2]) / 3 
		escreva("A média é = ",media,"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 55; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {nota, 5, 20, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */