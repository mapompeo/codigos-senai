programa
{
	funcao inicio()
	{
		inteiro vetor1 [5] = {0, 0, 0, 0, 0}
		inteiro vetor2 [5] = {0, 0, 0, 0, 0}
		inteiro resposta [5] = {0, 0, 0, 0, 0}
		//declara��o de vari�veis


		escreva("Programa para soma de vetores\n")
		escreva("Digite os valores do vetores\n")
		//entrada de  dados

		
		para (inteiro i = 0; i < 5; i ++){
			escreva("Digite o vetor1[", i ,"] = ")
			leia (vetor1[i])
			escreva("\n")
			escreva("Digite o vetor2[", i ,"] = ")
			leia (vetor2[i])
			escreva("\n")
			}
		
		para (inteiro i = 0; i < 5; i ++) {
			se((vetor1[i] % 2) == 0) {
				resposta [i] = vetor1 [i] + vetor2 [i]
			}senao{
				resposta[i] = vetor1[i]
				}
		}
		//opera��o do vetor


		para (inteiro i = 0; i < 5; i ++){
			escreva("Digite a resposta[", i ,"] = ", resposta[i] , "\n")
		}
		//resultado para o usu�rio


		escreva("\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 647; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vetor1, 5, 10, 6}-{vetor2, 6, 10, 6}-{resposta, 7, 10, 8};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */