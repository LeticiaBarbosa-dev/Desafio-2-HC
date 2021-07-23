const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let codigo = document.getElementById('codigo').value;
    let nome = document.getElementById('nome').value;
    let quantidade = document.getElementById('quantidade').value;
    let lote = document.getElementById('lote').value;
    
    let novoCliente = registerProducts.push({codigo: codigo, nome: nome, quantidade: quantidade, lote: lote});
    mostrarNaTabela();
})

let registerProducts = (function() {
    function addProduct(){
        let product = localStorage.getItem('product');
        return product === null ? [] : JSON.parse(product);
    }
    
    function saveProduct(product){
        let saveProduct = JSON.stringify(product);
        localStorage.setItem('product', saveProduct);
    }

    return {
        push: function(obj){
            let item = addProduct();
            item.push(obj);
            saveProduct(item);
            alert("Produto Salvo!");
        }
    }
    
})();


function mostrarNaTabela(){
    const tBody = document.getElementById("tBody");
    const product = JSON.parse(localStorage.getItem('product'));
    if(product != null){
        let row = '';
        product.map(p => {
            row += `
                <tbody>
                    <tr>
                        <td>${p.codigo}</td>
                        <td>${p.nome}</td>
                        <td>${p.quantidade}</td>
                        <td>${p.lote}</td>
                    </tr>
                </tbody>
            `
        });
        tBody.innerHTML = row;
    }
}

