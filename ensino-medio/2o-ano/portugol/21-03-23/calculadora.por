programa
{
	funcao inicio()
	{
		real num1 = 0.0, num2 = 0.0, resultado = 0.0
		cadeia func = ""
		
		
		escreva("-----------------------------------------\n")
		escreva("		Calculadora\n")
		escreva("-----------------------------------------\n")
		escreva(" escreva A para +     escreva S para -\n")
		escreva(" escreva M para x     escreva D para /\n")
		escreva("-----------------------------------------\n")
		escreva("Insira o primeiro n�mero:")
		leia(num1)
		escreva("Insira a opera��o:")
		leia(func)
		escreva("Insira o segundo n�mero:")
		leia(num2)

		se(func == "A" ou func == "a"){
			resultado = num1 + num2
			}
		
		senao se((func == "S") ou (func == "s")){
			resultado = num1 - num2
			}

		senao se((func == "M") ou (func == "m")){
			resultado = num1 * num2
			}

		senao se((func == "D") ou (func == "d")){
			resultado = num1 / num2
			}

		escreva("-----------------------------------------\n")
		escreva("	O resultado �: ",resultado,"\n")
		escreva("-----------------------------------------\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta se��o do arquivo guarda informa��es do Portugol Studio.
 * Voc� pode apag�-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 86; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */