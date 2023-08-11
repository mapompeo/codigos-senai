function conversorBinario() {
    let decimalBinario = Number(document.getElementById('decimalBinario').value)
    let resultadoDecimalBinario = ''

    if (!isNaN(decimalBinario)) {
      let binario = ''
      while (decimalBinario > 0) {
        binario = (decimalBinario % 2) + binario
        decimalBinario = Math.floor(decimalBinario / 2)
      }
      resultadoDecimalBinario = `O número digitado é igual a ${binario} em binário`
    } else {
      resultadoDecimalBinario = 'Por favor, insira um número válido.'
    }

    document.getElementById('resultadoDecimalBinario').textContent = resultadoDecimalBinario
}