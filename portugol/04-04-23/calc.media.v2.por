programa
{
	funcao inicio()
	{
		real media = 0.0, nota[3]

		escreva("Programa para o c�lculo da m�dia\n")

		escreva("Digite a primeira nota\n")
		leia (nota[0])
		escreva("Digite a segunda nota\n")
		leia (nota[1])
		escreva("Digite a terceira nota\n")
		leia (nota[2])

		media = (nota[0] + nota[1] + nota[2]) / 3 
		escreva("A m�dia � = ",media,"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 55; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {nota, 5, 20, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */