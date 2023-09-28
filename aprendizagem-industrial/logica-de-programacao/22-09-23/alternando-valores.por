programa
{
	funcao inicio()
	{
		real A = 10.0, B = 20.0, variavelLocal = 0.0

		escreva("O valor da variável A é igual ",A,".\n")
		escreva("O valor da variável B é igual ",B,".\n")

		variavelLocal = A
		A = B
		B = variavelLocal
		
		escreva("Após os códigos...\n")
		escreva("O valor da variável A é igual ",A,".\n")
		escreva("O valor da variável B é igual ",B,".\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 215; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */