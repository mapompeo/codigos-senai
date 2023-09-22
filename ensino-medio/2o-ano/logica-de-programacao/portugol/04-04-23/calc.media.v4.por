programa
{
	funcao inicio()
	{
		real media = 0.0, nota[3], soma = 0.0
		inteiro contador = 3
		
		escreva("Programa para o cálculo da média\n")
		para(inteiro i = 0; i < contador; i++){
			escreva("Digite a nota [",i,"] = ")
			leia(nota[i])
			escreva("\n")
			soma = soma + nota[i]
		}
		
		media = soma / contador 
		escreva("A média é = ",media,"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 193; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {nota, 5, 20, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */