programa
{
	funcao inicio()
	{
		real valor1 = 0.0, valor2 = 0.0, valorFinal = 0.0

		escreva("Digite o valor do primeiro número: ")
		leia(valor1)
		escreva("Digite o valor do segundo número: ")
		leia(valor2)

		se (valor1 + valor2 >= 20) {
			valorFinal = valor1 + valor2 + 8
			escreva("O valor final é ",valorFinal,".")
		}
		senao {
			valorFinal = valor1 + valor2 - 5
			escreva("O valor final é ",valorFinal,".")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 420; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */