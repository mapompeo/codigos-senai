programa
{
	funcao inicio()
	{
		
		inteiro vetor1 [7] = {1, 2, 3, 4, 5, 6, 7}
		inteiro vetor2 [7] = {2, 4, 6, 8, 10, 12, 14}
		inteiro vetor3 [7] = {0, 0, 0, 0, 0, 0, 0}
		
		escreva("Programa para a soma de dois vetores\n")
		para(inteiro i = 0; i < 7; i++){
			vetor3[i] = vetor1[i] + vetor2[i]
		}
		para(inteiro i = 0; i < 7; i++){
			escreva("O valor do vetor ",i," = ",vetor3[i],"\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 396; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */