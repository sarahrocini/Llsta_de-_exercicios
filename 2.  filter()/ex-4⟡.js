/*2. filter ── ⋆⋅𖤓⋅⋆ ──── ⋆⋅𖤓⋅⋆ ──── ⋆⋅𖤓⋅⋆ ──── ⋆⋅𖤓⋅⋆ ──
Selecione somente os itens que atendem a uma condição.
4. ☆ Crie um array contendo apenas os produtos que possuem estoque maior que 0 e custam mais de R$ 100.
*/

const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: 'Mouse', preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: 'Teclado', preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: 'Monitor', preco: 1200, estoque: 3, ativo: true },
];

const produtosEmEstoqueECaros = produtos.filter(
    (produto) => produto.estoque > 0 && produto.preco > 100,
);

console.log(produtosEmEstoqueECaros);
