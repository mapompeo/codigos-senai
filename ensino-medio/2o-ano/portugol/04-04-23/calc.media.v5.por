programa
{
	funcao inicio()
	{
		real media = 0.0, nota[3], soma = 0.0
		inteiro contador = 3
		
		escreva("Programa para o c�lculo da m�dia\n")
		para(inteiro i = 0; i < contador; i++){
			escreva("Digite a nota [",i,"] = ")
			leia(nota[i])
			escreva("\n")
			soma = soma + nota[i]
		}
		
		media = soma / contador 
		escreva("A m�dia � = ",media,"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 93; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {media, 5, 7, 5}-{nota, 5, 20, 4}-{soma, 5, 29, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */