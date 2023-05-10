programa
{
	funcao inicio()
	{
		real valor = 0.0, resultado = 0.0

		escreva("Digite um valor: ")
		leia(valor)
		escreva("\n")
		enquanto(resultado != 0){
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
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 154; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */