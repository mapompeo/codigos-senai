programa
{
	funcao inicio()
	{
		inteiro nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0, nota5 = 0
		inteiro media = 0

		escreva(" --Programa para c�lculo das m�dias --\n")
		escreva("Digite a primeira nota:")
		leia(nota1)
		escreva("Digite a segunda nota:")
		leia(nota2)
		escreva("Digite a terceira nota:")
		leia(nota3)
		escreva("Digite a quarta nota:")
		leia(nota4)
		escreva("Digite a quinta nota:")
		leia(nota5)

		media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

		se (media < 4){
			escreva("Voc� precisa refazer todas as atividades.\n")
			}

		se (media >= 4 e media < 7){
			escreva("Voc� precisa fazer uma recupera��o.\n")
			}

		se (media >= 7){
			escreva("Voc� est� aprovado, parab�ns.\n")
			}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 664; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */