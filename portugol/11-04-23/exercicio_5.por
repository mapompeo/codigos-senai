programa
{
	funcao inicio()
	{
		inteiro vetor1 [7] = {0,0,0,0,0,0,0}
		inteiro resultado = 0
		//declara��o de vari�veis
		
		
		para (inteiro i = 0; i < 7; i ++) {
			escreva("Digite o valor do vetor1 [", i ,"] = ")
			leia (vetor1[i])
			resultado = resultado + vetor1[i]
		}

		escreva("A soma final de todos os �ndices do vetor � = ", resultado , "\n")
		//resultado para o usu�rio
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 186; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */