programa
{
	funcao inicio()
	{
		real valor1 = 0.0, valor2 = 0.0, valorFinal = 0.0

		escreva("Digite o valor do primeiro n�mero: ")
		leia(valor1)
		escreva("Digite o valor do segundo n�mero: ")
		leia(valor2)

		se (valor1 + valor2 >= 20) {
			valorFinal = valor1 + valor2 + 8
			escreva("O valor final � ",valorFinal,".")
		}
		senao {
			valorFinal = valor1 + valor2 - 5
			escreva("O valor final � ",valorFinal,".")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 420; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */