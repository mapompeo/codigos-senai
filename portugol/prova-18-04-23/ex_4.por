programa
{
	funcao inicio()
	{
		inteiro v1 [5] = { 10, 20, 30, 40, 50}
		inteiro v2 [5] = { 1, 2, 3, 4, 5}
		inteiro resultado [5] = {0, 0, 0, 0, 0}

		para (inteiro i = 0; i < 5; i ++) {
			resultado[i] = v1[i] + v2[i]
		}
			
		escreva("A soma dos vetores �: \n", resultado[0], "\n", resultado[1], "\n", resultado[2],  "\n", resultado[3],  "\n", resultado[4],"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 362; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */