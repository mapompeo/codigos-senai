programa
{
	funcao inicio()
	{
		real nota1 = 0.0, nota2 = 0.0, nota3 = 0.0
		
		escreva("Qual a primeira nota? ")
		leia(nota1)
		escreva("Qual a segunda nota? ")
		leia(nota2)
		escreva("Qual a terceira nota? ")
		leia(nota3)
		escreva("\n")
		
		real media = (nota1 + nota2 + nota3) / 3 escreva("A m�dia geral do aluno � ", media,"\n")
		
		se(media >= 6) {escreva("Aprovado")}
		senao{escreva("Reprovado")}
		escreva("\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 355; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */