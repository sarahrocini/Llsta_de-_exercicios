/*5. reduce ⭒₊ ⊹🦩₊ ⊹⭒
Percorra o array e acumule os valores em um único resultado.
10. ☆ Calcule o patrimônio total em estoque. Para isso, multiplique preco × estoque de cada produto e some os
resultados.
*/

const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: 'Mouse', preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: 'Teclado', preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: 'Monitor', preco: 1200, estoque: 3, ativo: true },
];

const patrimonioTotal = produtos.reduce(
    (acumulador, produto) => acumulador + produto.preco * produto.estoque,
    0,
);

console.log(patrimonioTotal);
