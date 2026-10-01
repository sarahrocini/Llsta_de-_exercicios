/*1. map 𓆝 𓆟 𓆞 𓆝 𓆟𓆝 𓆟𓆝 𓆟 𓆞 𓆝 𓆟𓆝 𓆟𓆝 𓆟 𓆞 𓆝 𓆟𓆝 𓆟
Transforme os dados e gere um novo array.
1. ♡ Crie um novo array contendo apenas os nomes dos produtos em letras maiúsculas.
*/

const produtos = [
{ id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
{ id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
{ id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
{ id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const nomesMaiusculos = produtos.map(produto => produto.nome.toUpperCase());

console.log(nomesMaiusculos);
