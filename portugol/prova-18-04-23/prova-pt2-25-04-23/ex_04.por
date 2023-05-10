programa
{
	funcao inicio()
	{
		inteiro vet1 [5] =  {10, 15, 20, 25, 30}
		inteiro vet2 [5] =  {5, 10, 15, 20, 25}
		inteiro resultado [5] = {0,0,0,0,0}

		para (inteiro i = 0; i < 5; i ++) {
			resultado[i] = vet1[i] - vet2[i]}

		escreva("A subtração dos vetores é:\n", resultado[0],"\n" ,resultado[1],"\n" ,resultado[2],"\n" ,resultado[3],"\n" ,resultado[4],"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 346; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */