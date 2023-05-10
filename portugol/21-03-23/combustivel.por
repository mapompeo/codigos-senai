programa
{
	funcao inicio()
	{
		cadeia nome
		caracter combustivel

		escreva("-------------------------------------------------------\n")
		escreva("	Qual o tipo de combustívelo você deseja?\n")
		escreva("	   G = Gasolina		A = Álcool\n")
		escreva("-------------------------------------------------------\n")
		escreva("Insira o caracter do seu combustivel: ")
		leia(combustivel)
		se(combustivel == 'G' ou combustivel == 'g'){
			escreva("O combustível selecionado é gasolina\n")
		}
		senao se(combustivel == 'A' ou combustivel == 'a'){
			escreva("O combustível selecionado é álcool\n")
		}
		senao{
			escreva("Nenhum combustível foi selecionado\n")
			}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 55; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */