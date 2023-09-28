programa
{
	funcao inicio()
	{
		real diasResultado = 0.0, anos = 0.0, meses = 0.0, dias = 0.0

		escreva("Insira quantos anos de vida você tem: ")
		leia(anos)
		escreva("Insira quantos meses de vida você tem: ")
		leia(meses)
		escreva("Insira quantos dias de vida você tem: ")
		leia(dias)

		diasResultado = anos + ((meses * 30) + (dias * 365))

		escreva("Você viveu ",diasResultado," dias.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 292; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */