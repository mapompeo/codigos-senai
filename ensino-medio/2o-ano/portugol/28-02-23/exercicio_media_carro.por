programa
{
	funcao inicio()
	{
		real km1 = 0.0, km2 = 0.0, lt1 = 0.0, lt2 = 0.0, media1 = 0.0, media2 = 0.0
			
		escreva("Quantos quilômetros você andou no trecho 1? ")
		leia(km1)
		escreva("Quantos litros você gastou no trecho 1? ")
		leia(lt1)
		media1 = (km1 + lt1) / 2 escreva("A média de KM por litros é de ", media1, "\n")
		escreva("\n")
		
		escreva("Quantos quilômetros você andou no trecho 2? ")
		leia(km2)
		escreva("Quantos litros você gastou no trecho 2? ")
		leia(lt2)
		media2 = (km2 + lt2) / 2 escreva("A média de KM por litros é de ", media2, "\n")
		escreva("\n")
		
		real media_geral = (media1 + media2) / 2 escreva("A média geral dos dois trechos é de ", media_geral, "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 703; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */