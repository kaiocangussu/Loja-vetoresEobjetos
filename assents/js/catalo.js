//ARRAY
const produtosb = ["Arroz 5kg", 24,90, "Mercearia"]
console.log(produtosb)


//Objeto ou Lista para quem veio do pyton
// chave / index : valor / resultado
const produto = {
    nome:"Arroz 5kg",
    preco:25.90,
    categoria: "Mercearia"
}

console.log(produto.nome)
console.log(produto.preco)
console.log(produto.categoria)

// array de objetos
const produtos =  [
    {   nome:"Arroz 5kg",
        preco: 25.90,
        categoria: "Mercearia"
    },
    {   nome:"Açai",
        preco: 24.90,
        categoria:"Frios"
    },

    {   nome:"Leite 1L",
        preco: 2.90,
        categoria:"Laticios"
    },

]

console.log("========")
//lista todos os produtos
console.log(produtos)
//Lista o produto 1 (o segundo da lista)
console.log(produtos[1])
//pega o nome do terceiro produto
console.log(produtos[2].nome)

//lista todos os nomes
const nomes = produtos.map(produtos => produto.nome)
console.log(nomes)

produtos.push({
    nome:"Miojo Turma da Monica",
    preco: 1.99,
    categoria:"Mercearia"
})
console.log(produtos)

//Set item serve para adicionar itens no localStorage
const nome = "Mercearia Proz"
localStorage.setItem("Minha Loja", nome)

//getItem serve para pegar um item do localStorage
const minhaLoja = localStorage.getItem("Minha Loja")
console.log("Minha Loja é " + minhaLoja)

const produtoString = JSON.stringify(produtos)
localStorage.setItem("Produtos", produtoString)

// 1 - adicionar 3 produtos no final do array usando .push()
produtos.push(
    {
        nome: "Tangue Guanara",
        preco: 0.50,
        categoria:"Mecearia"
    },

    {
        nome: Iorgute,
        preco:5,
        categoria:Laticinios
    },
    {
        nome: "bombom beijinho",
        preco: 64,
        categoria: "Mercearia"
    }
)

// 2 - usar o filter() para achar o produto mais barato 

// 4 - Usar o .reduce() para fazer  a soma dos preços 

// 5 - salvar um dado no localStorage e ler o mesmo