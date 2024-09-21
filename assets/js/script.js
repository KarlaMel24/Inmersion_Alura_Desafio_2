let listaNombresGastos = [];
let listaValoresGastos = [];
let listaObservacionesGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
    let obsGasto = document.getElementById("observacionesGasto").value;
    if (Number(valorGasto) >= 150) {
        alert("¡Alerta! Gasto mayor a 150US");
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaObservacionesGastos.push(obsGasto);
        actualizarListaGastos();
        return
    }
    else{
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaObservacionesGastos.push(obsGasto);
        actualizarListaGastos();
    }
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos");
    const observaciones = document.getElementById("listaDeObserv");
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const obsGasto = listaObservacionesGastos[posicion] || 'Sin observaciones';
        // Esto permite mostrar una lista en la pantalla, es un html dinámico
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - ${obsGasto}
            <button onclick="eliminarElGasto( ${posicion});">Eliminar</button>
            <button onclick="editarElGasto(${posicion});">Editar</button>
            </li>`;
        totalGastos += Number(valorGasto);
    });
    // Así se edita/cambia el html
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    observaciones.innerHTML = '';
    limpiar();
}

function limpiar (){
    document.getElementById("nombreGasto").value = '';
    document.getElementById("valorGasto").value = '';
    document.getElementById("observacionesGasto").value = '';
}

function eliminarElGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaObservacionesGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function editarElGasto(posicion) {
    let elegirEdicion = parseInt(prompt("Digite el número de lo que desee editar: 1. Gasto, 2. Valor, 3. Observacion"));
    if (elegirEdicion === 1) {
        nuevoGasto = prompt("Inserte nuevo gasto");
        listaNombresGastos.splice(posicion, 1, nuevoGasto);
        actualizarListaGastos();
        return;
    }
    else if (elegirEdicion === 2) {
        nuevoValor = prompt("Inserte nuevo valor");
        listaValoresGastos.splice(posicion, 1, nuevoValor);
        actualizarListaGastos();
        return;
    }
    else if (elegirEdicion === 3) {
        nuevaObserva = prompt("Inserte nueva observacion");
        listaObservacionesGastos.splice(posicion, 1, nuevaObserva);
        actualizarListaGastos();
        return;
    }
    else{
        alert("Número inválido, vuelva a intentar");
        return;
    }
    
}

function validarGasto(valorGasto) {
    if (Number(valorGasto) > 151) {
        alert("¡Alerta! Gasto mayor a 150US");
        return
    }
}