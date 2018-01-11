var produtos = [
    {   // índice 0
        imagem : {
            src   : '/img/Puma_Tee.jpg',
            alt   : "texto alternativo",
            title : "titulo da imagem" 
        },

        descricao : 'Puma Golf Raglan Tech Polo Tee',
        cor       : 'Purple',
        preco     : 72,
        qtd       : 3
    },

    {   // índice 1
        imagem : {
            src   : '/img/Nike_Shoes.jpg',
            alt   : "texto alternativo",
            title : "titulo da imagem" 
        },

        descricao : 'Nike Mens Running Shoe',
        cor       : 'Purple',
        preco     : 72,
        qtd       : 3
    },

    {   // índice 2
        imagem : {
            src   : '/img/Snowboard_Jacket.jpg',
            alt   : "texto alternativo",
            title : "titulo da imagem" 
        },

        descricao : 'DC Mens Axis Snowboard Jacket',
        cor       : 'White',
        preco     : 89.97,
        qtd       : 2
    }
]

function listarProdutos() {
    // Gerar o template através do array de objetos
    var template = "";

    for(var i = 0; i < produtos.lenght; i++) {
        template += '<div class="product">';
        template +=   '<i class="fa fa-times-circle"></i>';
        template +=   '<img src="img/camiseta.png" alt="t-shirt" class="product__img">';
        template +=   '<span id="p1" class="product__name"></span>';
        template +=   '<span id="c1" class="product__color">'+produtos[i].cor+'</span>';
        template +=   '<span id="s1" class="product__size"></span>';
        template +=   '<span id="v1" class="product__value"></span>*<input type="number" name="" id="">=';
        template += '</div>';
    }

    document.getElementById("products").innerHTML = template;
}

