programa
{
	funcao inicio()
	{
		inteiro idade = 0
		
		escreva("-------------------------------\n")
		escreva("	Vota��o	\n")
		escreva("-------------------------------\n")
		escreva("Digite a sua idade:\n")
		leia(idade)
		escreva("-------------------------------\n")
		se(idade <= 15){
			escreva("Voc� ainda n�o pode votar.\n")
		}
		
		se(idade >= 16 e idade <= 17 ou idade > 70){
			escreva("O voto � opcional.\n")
		}
		
		se(idade >= 18 e idade <= 70){
			escreva("O voto � obrigat�rio.\n")
		}
		
		escreva("-------------------------------\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 379; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */