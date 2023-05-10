programa
{
	funcao inicio()
	{
		inteiro vet1 [4] = {0,0,0,0}
		inteiro vet2 [4] = {0,0,0,0}
		inteiro resultado = 0

		escreva("--- Digite 4 números aletórios de de 0 a 10! ---\n")
		escreva("Digite o primeiro número: ")
		leia(vet1[0])
		escreva("Digite o segundo número: ")
		leia(vet1[1])
		escreva("Digite o terceiro número: ")
		leia(vet1[2])
		escreva("Digite o quarto número: ")
		leia(vet1[3])
		escreva("\n")

		se((vet1 [0] % 2) == 0) {
			vet2 [0] = vet1 [0]}

		se((vet1 [1] % 2) == 0) {
			vet2 [1] = vet1 [1]}

		se((vet1 [2] % 2) == 0) {
			vet2 [2] = vet1 [2]}

		se((vet1 [3] % 2) == 0) {
			vet2 [3] = vet1 [3]}

		resultado = vet2 [0] + vet2 [1] + vet2 [2] + vet2 [3]

		escreva("O resultado da soma dos números pares é: ", resultado, "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 177; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vet1, 5, 10, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */