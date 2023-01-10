var nome = [];
var persone = document.getElementById('persone');

window.addEventListener('DOMContentLoaded', init);

function init() {
    printData();
}

function printData() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json();
    }).then((data) => {
        nome = data;
        if(nome.length > 0){
            nome.map(function (element) {
                persone.innerHTML += `<tr><td class="text-center">${element.name}</td><td class="text-center">${element.username}</td><td class="text-center">${element.email}</td></tr>`;
            });
        }
    });
}