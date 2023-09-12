const form = document.getElementById('form-agenda');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('campo-nome');
    const inputTelContato = document.getElementById('campo-tel');
    if (nome.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi cadastrado.`);
    } else {
        nome.push(inputNomeContato.value);
        telefone.push(inputTelContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
        }    
    
        inputNomeContato.value = '';
        inputTelContato.value = ''; 
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}