programa
{
	funcao inicio()
	{
		real valorHora = 0.0, horasMes = 0.0, salarioBruto = 0.0, salarioLiquido = 0.0, inss = 0.0, sindicato = 0.0, impostoRenda = 0.0

		escreva("Insira quanto voc� ganha por hora: R$")
		leia(valorHora)
		escreva("Insira quantas horas voc� trabalha por m�s: R$")
		leia(horasMes)

		salarioBruto = valorHora * horasMes
		
		impostoRenda = salarioBruto * 11 / 100
		sindicato = salarioBruto * 5 / 100
		inss = salarioBruto * 8 / 100
		salarioLiquido = salarioBruto - inss - sindicato - impostoRenda

		escreva("\n")
		escreva("Voc� ganha R$",salarioBruto," por m�s.\n")
		escreva("Voc� pagou R$",inss," de INSS.\n")
		escreva("Voc� pagou R$",sindicato," para o sindicato.\n")
		escreva("Voc� pagou R$",impostoRenda,"  de imposto de renda.\n")
		escreva("Seu sal�rio l�quido � de: R$",salarioLiquido,".\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 288; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */