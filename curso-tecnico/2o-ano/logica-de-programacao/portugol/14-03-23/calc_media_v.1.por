programa
{
	funcao inicio()
	{
		real media = 0.0, nota1 = 0.0, nota2 = 0.0, nota3 = 0.0

		escreva("-------------------------------\n")
		escreva("Cálculo de média dos exercícios\n")
		escreva("-------------------------------\n")
		escreva("Digite a primeira nota do exercício\n")
		leia(nota1)
		escreva("Digite a segunda nota do exercício\n")
		leia(nota2)
		escreva("Digite a terceira nota do exercício\n")
		leia(nota3)
		escreva("-------------------------------\n")
		media = (nota1 + nota2 + nota3) / 3
		se(media >= 7.0){	
			escreva ("Parabéns, você foi aprovado. Média = ",media,"\n")
		}

		se((media >= 5.0) e (media < 7.0)){
			escreva ("Você precisa fazer recuperação. Média = ",media,"\n")
		}
		se(media < 5.0){
			escreva("Reprovado. Você precisa melhorar. Média = ",media,"\n")
		}
		escreva("-------------------------------\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 713; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */