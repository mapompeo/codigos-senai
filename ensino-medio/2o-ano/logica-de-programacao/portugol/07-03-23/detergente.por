programa
{
	funcao inicio()
	{
		real frasco = 0.0
		real altura = 0.0
		real diametro = 0.0
		real turno = 0.0
		inteiro dias = 0
		real volume = 0.0
		real resultado = 0.0

		escreva("-----------------------\n")
		escreva("Insira a quantidade de frascos produzidos por hora\n")
		leia(frasco)
		escreva("Insira a altura do frasco\n")
		leia(altura)
		escreva("Insira o di�metro do frasco\n")
		leia(diametro)
		escreva("-----------------------\n")
		
		escreva("Insira a quantidade de horas di�rias de trabalho\n")
		leia(turno)
		escreva("Insira a quantidade de dias que ser�o trabalhados\n")
		leia(dias)
		volume = (3.14 * diametro) * altura
		escreva("O volume dos frascos � de ", volume, "\n")
		
		
		
		escreva("O volume total de total de detergentes produzidos em ", dias, " dias � de:\n")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 703; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */