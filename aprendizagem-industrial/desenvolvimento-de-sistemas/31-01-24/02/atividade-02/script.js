let resultado = document.getElementById('resultado');

function verificar() {
    let diaNumero = Number(document.getElementById('diaSemana').value);
    let diaString;

    switch (diaNumero) {
        case 1:
            diaString = "Domingo";
            break;
        case 2:
            diaString = "Segunda";
            break;
        case 3:
            diaString = "Terça";
            break;
        case 4:
            diaString = "Quarta";
            break;
        case 5:
            diaString = "Quinta";
            break;
        case 6:
            diaString = "Sexta";
            break;
        case 7:
            diaString = "Sábado";
            break;
        default:
            diaString = "Dia inválido";
    }
    resultado.innerHTML = diaString;
}