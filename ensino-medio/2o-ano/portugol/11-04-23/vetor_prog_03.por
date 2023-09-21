programa
{
	funcao inicio()
	{
		inteiro vetor1 [5] = {1, 2, 3, 4, 5}
		inteiro acumulador = 0
		//declaração de variáveis
		
		
		para (inteiro i = 0; i < 5; i ++) {
			se((vetor1[i] % 2 ) == 1)
				acumulador = acumulador + vetor1[i]
		}
		
		escreva("O resultado da soma dos ímpares é = ", acumulador ,"\n")
		//resultado para o usuário
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 342; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vetor1, 5, 10, 6}-{acumulador, 6, 10, 10}-{i, 10, 16, 1};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */