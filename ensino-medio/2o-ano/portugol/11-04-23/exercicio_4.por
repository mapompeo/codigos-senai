programa
{
	funcao inicio()
	{
		inteiro vetor1 [5] = {0,0,0,0,0}
		inteiro vetor2 [5] = {0,0,0,0,0}
		inteiro resultado [5] = {0,0,0,0,0}

		para (inteiro i = 0; i < 5; i ++) {
			escreva("Digite o valor do vetor1 [", i ,"] = ")
			leia (vetor1[i])
			escreva("Digite o valor do vetor2 [", i ,"] = ")
			leia (vetor2[i])
			
		}

		para (inteiro i = 0; i < 5; i ++) {
			resultado[i] = vetor1 [i] - vetor2[i]
			escreva("o resultado da subtração dos vetores é = ", resultado[i] , "\n")
			}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 384; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */