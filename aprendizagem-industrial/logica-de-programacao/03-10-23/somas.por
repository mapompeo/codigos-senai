programa
{
	funcao inicio()
	{
		real a = 0.0, b = 0.0, c = 0.0, d = 0.0, soma = 0.0, multiplicacao = 0.0

		escreva("Digite o valor de A: ")
		leia(a)
		escreva("Digite o valor de B: ")
		leia(b)
		escreva("Digite o valor de C: ")
		leia(c)
		escreva("Digite o valor de D: ")
		leia(d)

		soma = a + c
		multiplicacao = b * d

		se (soma > multiplicacao) {
			escreva("", a , " + ", c ," � maior que ", b ," * ", d ,".")
		}
		se (soma < multiplicacao) {
			escreva("", a , " + ", c ," � menor que ", b ," * ", d ,".")
		}
		senao {
			escreva("", a , " + ", c ," � igual a ", b ," * ", d ,".")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 326; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */