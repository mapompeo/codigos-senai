programa
{
	funcao inicio()
	{
		inteiro vetor1 [7] = {0,0,0,0,0,0,0}
		inteiro resultado = 0
		//declaração de variáveis
		
		
		para (inteiro i = 0; i < 7; i ++) {
			escreva("Digite o valor do vetor1 [", i ,"] = ")
			leia (vetor1[i])
			resultado = resultado + vetor1[i]
		}

		escreva("A soma final de todos os índices do vetor é = ", resultado , "\n")
		//resultado para o usuário
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 186; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */