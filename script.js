// Problema 1: Conversión de Quetzales a Dólares
document.getElementById('convertirQUSDBtn').addEventListener('click', function() {
    const quetzales = parseFloat(document.getElementById('quetzalesInput').value) || 0;    // NOTA: La tasa de cambio debe obtenerse en tiempo real o actualizarse periódicamente.
    // Para este ejemplo, usaremos una tasa ficticia de 1 USD = 7.75 Q.
    const tasaDeCambio = 7.75; 
    const dolares = quetzales / tasaDeCambio;
    document.getElementById('resultado1').textContent = `Q${quetzales.toFixed(2)} equivalen a $${dolares.toFixed(2)} USD.`;
});

// Problema 2: Conversión de Metros a Kilómetros
document.getElementById('convertirMKBtn').addEventListener('click', function() {
    const metros = parseFloat(document.getElementById('metrosInput').value);
    const resultadoElement = document.getElementById('resultado2');

    if (isNaN(metros)) {
        resultadoElement.textContent = "Por favor, ingrese un número válido.";
        resultadoElement.style.color = "red";
        return;
    }

    const kilometros = metros / 1000;
    resultadoElement.textContent = `${metros} metros equivalen a ${kilometros.toFixed(3)} kilómetros.`;
    resultadoElement.style.color = "#007bff";
});

// Problema 3: Verificar si un Número es Negativo o Positivo
document.getElementById('verificarNumBtn').addEventListener('click', function() {
    const numero = parseFloat(document.getElementById('numeroInput').value);
    const resultadoElement = document.getElementById('resultado3');

    if (isNaN(numero)) {
        resultadoElement.textContent = "Por favor, ingrese un número válido.";
        resultadoElement.className = "text-danger"; // Bootstrap class for red text
        return;
    }

    if (numero > 0) {
        resultadoElement.textContent = `El número ${numero} es Positivo.`;
        resultadoElement.className = "positivo";
    } else if (numero < 0) {
        resultadoElement.textContent = `El número ${numero} es Negativo.`;
        resultadoElement.className = "negativo";
    } else {
        resultadoElement.textContent = `El número ${numero} es Cero.`;
        resultadoElement.className = "cero";
    }
});

// Problema 4: Calculadora de Descuento en Farmacia
document.getElementById('calcularDescuentoBtn').addEventListener('click', function() {
    const costoRemedio = parseFloat(document.getElementById('costoRemedioInput').value);
    const descuentoAplicadoElement = document.getElementById('descuentoAplicado4');
    const precioFinalElement = document.getElementById('precioFinal4');

    if (isNaN(costoRemedio) || costoRemedio <= 0) {
        descuentoAplicadoElement.textContent = "Por favor, ingrese un costo válido.";
        precioFinalElement.textContent = "";
        descuentoAplicadoElement.style.color = "red";
        return;
    }

    const porcentajeDescuento = 0.10; // 10%
    const descuento = costoRemedio * porcentajeDescuento;
    const precioFinal = costoRemedio - descuento;

    descuentoAplicadoElement.textContent = `Descuento aplicado: Q${descuento.toFixed(2)}`;
    precioFinalElement.textContent = `Precio Final: Q${precioFinal.toFixed(2)}`;
    descuentoAplicadoElement.style.color = "#6c757d";
    precioFinalElement.style.color = "#dc3545";
});

// Problema 5: Cálculo de Intereses Bancarios
document.getElementById('calcularInteresBtn').addEventListener('click', function() {
    const deposito = parseFloat(document.getElementById('depositoInput').value);
    const interesesGanadosElement = document.getElementById('interesesGanados5');
    const cantidadFinalElement = document.getElementById('cantidadFinal5');

    if (isNaN(deposito) || deposito <= 0) {
        interesesGanadosElement.textContent = "Por favor, ingrese una cantidad válida.";
        cantidadFinalElement.textContent = "";
        interesesGanadosElement.style.color = "red";
        return;
    }

    const tasaInteres = 0.20; // 20%
    const intereses = deposito * tasaInteres;
    const cantidadFinal = deposito + intereses;

    interesesGanadosElement.textContent = `Intereses ganados: Q${intereses.toFixed(2)}`;
    cantidadFinalElement.textContent = `Cantidad final: Q${cantidadFinal.toFixed(2)}`;
    interesesGanadosElement.style.color = "#6c757d";
    cantidadFinalElement.style.color = "#28a745";
});

// Problema 6: Calculadora de Promedio y Aprobación/Reprobación
document.getElementById('calcularNotaFinalBtn').addEventListener('click', function() {
    // Obtener los valores de los campos de entrada con sus nuevos IDs
    const nota1_parcial = parseFloat(document.getElementById('nota1_parcial').value); // 1er Parcial (max 15)
    const nota2_parcial = parseFloat(document.getElementById('nota2_parcial').value); // 2do Parcial (max 15)
    const nota3_actividades = parseFloat(document.getElementById('nota3_actividades').value); // Actividades (max 35)
    const nota4_proyectos = parseFloat(document.getElementById('nota4_proyectos').value); // Proyectos (max 15)
    const nota5_final = parseFloat(document.getElementById('nota5_final').value); // Examen Final (max 35)

    // Referencias a los elementos de resultado con sus nuevos IDs
    const notaFinalResultadoElement = document.getElementById('notaFinalResultado');
    const estadoAprobacionElement = document.getElementById('estadoAprobacion');

    let allInputsValid = true;

    // Array para facilitar la validación y limpieza de estilos
    const inputs = [
        { id: 'nota1_parcial', value: nota1_parcial, max: 15 },
        { id: 'nota2_parcial', value: nota2_parcial, max: 15 },
        { id: 'nota3_actividades', value: nota3_actividades, max: 35 },
        { id: 'nota4_proyectos', value: nota4_proyectos, max: 15 },
        { id: 'nota5_final', value: nota5_final, max: 35 }
    ];

    inputs.forEach(item => {
        const inputElement = document.getElementById(item.id);
        if (isNaN(item.value) || item.value < 0 || item.value > item.max) {
            inputElement.classList.add('is-invalid'); // Añadir estilo de Bootstrap para invalid
            allInputsValid = false;
        } else {
            inputElement.classList.remove('is-invalid'); // Remover estilo si es válido
        }
    });

    if (!allInputsValid) {
        notaFinalResultadoElement.textContent = "Por favor, ingrese todas las puntuaciones válidas dentro de su rango (0-Máx).";
        notaFinalResultadoElement.style.color = "red";
        estadoAprobacionElement.textContent = "";
        estadoAprobacionElement.className = ""; // Limpiar clases de estado de aprobación
        return;
    }

    // Calcular la nota final sumando todos los componentes
    const notaTotal = nota1_parcial + nota2_parcial + nota3_actividades + nota4_proyectos + nota5_final;

    notaFinalResultadoElement.textContent = `Nota Final: ${notaTotal.toFixed(2)} / 100`;
    notaFinalResultadoElement.style.color = "#343a40";

    // Regla de aprobación: 60 o más sobre el total de 100
    if (notaTotal >= 60) {
        estadoAprobacionElement.textContent = "¡APROBADO!";
        estadoAprobacionElement.className = "aprobado"; // Aplicar clase de aprobación
    } else {
        estadoAprobacionElement.textContent = "REPROBADO";
        estadoAprobacionElement.className = "reprobado"; // Aplicar clase de reprobación
    }
});