programa
{
	funcao inicio()
	{
		inteiro vet1 [5] =  {10, 15, 20, 25, 30}
		inteiro vet2 [5] =  {5, 10, 15, 20, 25}
		inteiro resultado [5] = {0,0,0,0,0}

		para (inteiro i = 0; i < 5; i ++) {
			resultado[i] = vet1[i] - vet2[i]}

		escreva("A subtra��o dos vetores �:\n", resultado[0],"\n" ,resultado[1],"\n" ,resultado[2],"\n" ,resultado[3],"\n" ,resultado[4],"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 346; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */