programa
{
	funcao inicio()
	{
		inteiro vetor1 [5] = {0,0,0,0,0}
		inteiro resultado = 0
		//declara��o de vari�veis
		
		
		para (inteiro i = 4; i >= 0; i --) {
			escreva("Digite o valor do vetor 1 [", i ,"] = ")
			leia (vetor1[i])
		}


		para (inteiro i = 0; i < 5; i ++) {
			escreva("O valor inverso dos dados � = ", vetor1[i] ,"\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 241; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */