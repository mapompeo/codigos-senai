programa
{
	funcao inicio()
	{
		cadeia nome
		caracter combustivel

		escreva("-------------------------------------------------------\n")
		escreva("	Qual o tipo de combust�velo voc� deseja?\n")
		escreva("	   G = Gasolina		A = �lcool\n")
		escreva("-------------------------------------------------------\n")
		escreva("Insira o caracter do seu combustivel: ")
		leia(combustivel)
		se(combustivel == 'G' ou combustivel == 'g'){
			escreva("O combust�vel selecionado � gasolina\n")
		}
		senao se(combustivel == 'A' ou combustivel == 'a'){
			escreva("O combust�vel selecionado � �lcool\n")
		}
		senao{
			escreva("Nenhum combust�vel foi selecionado\n")
			}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 55; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */