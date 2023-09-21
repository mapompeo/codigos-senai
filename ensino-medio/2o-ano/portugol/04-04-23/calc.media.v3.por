programa
{
	funcao inicio()
	{
		real media = 0.0, nota[5]
		inteiro contador = 5
		
		escreva("Programa para o cálculo da média\n")
		para(inteiro i = 0; i < contador; i++){
			escreva("Digite a nota [",i,"]\n")
			leia(nota[i])
		}
		
		media = (nota[0] + nota[1] + nota[2] + nota[3] + nota[4]) / 5 
		escreva("A média é = ",media,"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 58; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {nota, 5, 20, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */