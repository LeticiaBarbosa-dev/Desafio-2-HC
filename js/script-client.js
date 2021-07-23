const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let cpf = document.getElementById('cpf').value;
    let nome = document.getElementById('nome').value;
    let endereco = document.getElementById('endereco').value;
    let telefone = document.getElementById('telefone').value;
    
    let novoCliente = registerClients.push({cpf: cpf, nome: nome, endereco: endereco, telefone: telefone});
    mostrarNaTabela();
})

let registerClients = (function() {
    function addClient(){
        let client = localStorage.getItem('client');
        return client === null ? [] : JSON.parse(client);
    }
    
    function saveClient(client){
        let saveClient = JSON.stringify(client);
        localStorage.setItem('client', saveClient);
    }

    return {
        push: function(obj){
            let item = addClient();
            item.push(obj);
            saveClient(item);
            alert("Cliente Salvo!");
        }
    }
    
})();


function mostrarNaTabela(){
    const tBody = document.getElementById("tBody");
    const client = JSON.parse(localStorage.getItem('client'));
    if(client != null){
        let row = '';
        client.map(c => {
            row += `
                <tbody>
                    <tr>
                        <td>${c.cpf}</td>
                        <td>${c.nome}</td>
                        <td>${c.endereco}</td>
                        <td>${c.telefone}</td>
                    </tr>
                </tbody>
            `
        });
        tBody.innerHTML = row;
    }
}

