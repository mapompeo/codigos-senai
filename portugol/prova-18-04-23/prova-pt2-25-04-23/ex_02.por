programa
{
	funcao inicio()
	{
		inteiro bermuda = 35, bermudaQnt = 0, bermudaFinal = 0
		inteiro camiseta = 40, camisetaQnt = 0, camisetaFinal = 0
		inteiro tenis = 175, tenisQnt = 0, tenisFinal = 0
		inteiro total = 0

		escreva("    --- Loja de roupas ---\n")
		escreva("\n")
		escreva("-----   Tabela de preços   ------\n")
		escreva("| Bermuda | Camiseta |  Tênis   |\n")
		escreva("| R$35,00 | R$40,00  | R$175,00 |\n")
		escreva("---------------------------------")
		escreva("\n")
		escreva("Digite quantas unidades de BERMUDA você irá comprar:")
		leia(bermudaQnt)
		escreva("Digite quantas unidades de CAMISETA você irá comprar:")
		leia(camisetaQnt)
		escreva("Digite quantas unidades de TÊNIS você irá comprar:")
		leia(tenisQnt)

		se (bermudaQnt > 3) {
			bermudaFinal = (bermuda * 0.90) * bermudaQnt}
			senao(bermudaFinal = bermudaQnt * bermuda)

		se (camisetaQnt > 3) {
			camisetaFinal = (camiseta * 0.90) * camisetaQnt}
			senao(camisetaFinal = camisetaQnt * camiseta)

		se (tenisQnt > 3) {
			tenisFinal = (tenis * 0.90) * tenisQnt}
			senao(tenisFinal = tenisQnt * tenis)

		total = bermudaFinal + camisetaFinal + tenisFinal

		escreva("O preço final da BERMUDA é de: R$",bermudaFinal,"\n")
		escreva("O preço final da CAMISETA é de: R$",camisetaFinal,"\n")
		escreva("O preço final do TÊNIS é de: R$",tenisFinal,"\n")
		escreva("\n")
		escreva("O total da sua compra é de: R$",total,"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1040; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */