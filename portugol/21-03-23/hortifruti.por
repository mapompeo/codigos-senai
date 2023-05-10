programa
{
	funcao inicio()
	{
		real tomate = 5.35, cebola = 3.32, aipim = 2.87, batataInglesa = 4.43, cenoura = 3.59, chuchu = 1.79
		inteiro qntTomate = 0, qntCebola = 0, qntAipim = 0, qntBatataInglesa = 0, qntCenoura = 0, qntChuchu = 0
		real total = 0.0

		
		escreva("---------------------------------------------------------------\n")
		escreva("                          HORTIFRUTI\n")
		escreva("---------------------------------------------------------------\n")
		escreva("Tomate R$ 5,35		Aipim R$2,87		Cenoura R$3,59\n")
		escreva("Cebola R$ 3,32		Batata inglesa R$ 4,43	Chuchu R$ 1,79\n")
		escreva("---------------------------------------------------------------\n\n")
		escreva("Digite a quantidade de tomates:\n")
		leia(qntTomate)
		escreva("Digite a quantidade de cebolas:\n")
		leia(qntCebola)
		escreva("Digite a quantidade de aipins:\n")
		leia(qntAipim)
		escreva("Digite a quantidade de batatas inglesa:\n")
		leia(qntBatataInglesa)
		escreva("Digite a quantidade de cenouras:\n")
		leia(qntCenoura)
		escreva("Digite a quantidade de chuchus:\n")
		leia(qntChuchu)

		tomate = tomate * qntTomate
		cebola = cebola * qntCebola
		aipim = aipim * qntAipim
		batataInglesa = batataInglesa * qntBatataInglesa
		cenoura = cenoura * qntCenoura
		chuchu = chuchu * qntChuchu 

		total = tomate + cebola + aipim + batataInglesa + cenoura + chuchu

		escreva("\n-------------------------------------------------------------\n")
		escreva("	 O preço final da sua compra é: R$",total,"\n")
		escreva("-------------------------------------------------------------\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1433; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */