programa
{
	funcao inicio()
	{
		real valor1 = 0.0, valor2 = 0.0

		escreva("Digite aglum número: ")
		leia(valor1)
		escreva("Digite outro número: ")
		leia(valor2)

		se (valor1 > valor2) {
			escreva("O número ",valor1," é maior que o segundo valor!")
		}
		senao {
			escreva("O segundo ",valor2," é maior que o primeiro valor!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 191; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */