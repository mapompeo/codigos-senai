programa
{
	funcao inicio()
	{
		real valor = 0.0, resultado = 0.0

		escreva("Digite um valor: ")
		leia(valor)
		escreva("\n")
		enquanto(resultado <= 15){
			resultado = resultado + valor
			escreva("Digite um valor: ")
			leia(valor)
			escreva("\n")
		}
		escreva("resultado = ", resultado)
		escreva("\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 309; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */