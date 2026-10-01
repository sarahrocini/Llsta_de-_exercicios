/*5. reduce ⭒₊ ⊹🍇₊ ⊹⭒
Percorra o array e acumule os valores em um único resultado.
9. ☆ Calcule a quantidade total de itens em estoque, somando o estoque de todos os produtos.
*/

const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: 'Mouse', preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: 'Teclado', preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: 'Monitor', preco: 1200, estoque: 3, ativo: true },
];

const totalEstoque = produtos.reduce((acumulador, produto) => acumulador + produto.estoque, 0);

console.log(totalEstoque);
