programa
{
	funcao inicio()
	{
		real media = 0.0, nota1 = 0.0, nota2 = 0.0, nota3 = 0.0

		escreva("-------------------------------\n")
		escreva("C�lculo de m�dia dos exerc�cios\n")
		escreva("-------------------------------\n")
		escreva("Digite a primeira nota do exerc�cio\n")
		leia(nota1)
		escreva("Digite a segunda nota do exerc�cio\n")
		leia(nota2)
		escreva("Digite a terceira nota do exerc�cio\n")
		leia(nota3)
		escreva("-------------------------------\n")
		media = (nota1 + nota2 + nota3) / 3
		se(media >= 7.0){	
			escreva ("Parab�ns, voc� foi aprovado. M�dia = ",media,"\n")
		}

		se((media >= 5.0) e (media < 7.0)){
			escreva ("Voc� precisa fazer recupera��o. M�dia = ",media,"\n")
		}
		se(media < 5.0){
			escreva("Reprovado. Voc� precisa melhorar. M�dia = ",media,"\n")
		}
		escreva("-------------------------------\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 713; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */