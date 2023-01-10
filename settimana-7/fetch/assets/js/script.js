var nome = document.getElementById('nome');
var cognome = document.getElementById('cognome');
var addBtn = document.getElementById('scrivi');
var elencoHTML = document.getElementById('elenco');
var errore = document.getElementById('errore');
var erroreElenco = document.getElementById('erroreElenco');
var elenco = [];

window.addEventListener('DOMContentLoaded', init);

function init() {
    printData();
    eventHandler();
}

function eventHandler() {
    addBtn.addEventListener('click', function() {
        controlla();
    })
}

printData = () => {
    fetch('http://localhost:3000/elenco').then((response) => {
        return response.json();
    }).then((data) => {
        elenco = data;
        if (elenco.length > 0) {
            errore.innerHTML = '';
            elencoHTML.innerHTML = '';
            elenco.map(function(element) {
                elencoHTML.innerHTML += `<li><button type="button" class="btn btn-danger m-2" onClick="elimina(${element.id})">X</button>${element.nome} ${element.cognome}</li>`
            });
        }
    });
}

function controlla() {
    if (nome.value != '' && cognome.value != '') {
        var data = {
            nome: nome.value,
            cognome: cognome.value
        }
        addData(data)
    } else {
        errore.innerHTML = 'Compilare correttamente i campi';
        return;
    }
}

async function addData(data) {
    let response = await fetch('http://localhost:3000/elenco', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
    });
    nome.value = '';
    cognome.value = '';
}