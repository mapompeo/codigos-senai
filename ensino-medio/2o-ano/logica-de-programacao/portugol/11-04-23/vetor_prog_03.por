programa
{
	funcao inicio()
	{
		inteiro vetor1 [5] = {1, 2, 3, 4, 5}
		inteiro acumulador = 0
		//declara��o de vari�veis
		
		
		para (inteiro i = 0; i < 5; i ++) {
			se((vetor1[i] % 2 ) == 1)
				acumulador = acumulador + vetor1[i]
		}
		
		escreva("O resultado da soma dos �mpares � = ", acumulador ,"\n")
		//resultado para o usu�rio
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 342; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vetor1, 5, 10, 6}-{acumulador, 6, 10, 10}-{i, 10, 16, 1};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */