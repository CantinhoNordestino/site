
// ======= DADOS DE CADA SEÇÃO DO CARDÁPIO =======

const listaAcai = [
  {
    nome: "Açaí 250g",
    descricao: "Unidade(s)",
    preco: 8.00,
    imagem: "./main/image/comida-2.jpg",
    ingredientes: ["Banana", "Granola", "Amendoim triturado", "Farinha láctea", "Leite em pó", "Leite condensado", "Confete"]
  },
  {
    nome: "Açaí 350g",
    descricao: "Unidade(s)",
    preco: 12.00,
    imagem: "./main/image/comida-2.jpg",
    ingredientes: ["Banana", "Granola", "Amendoim triturado", "Farinha láctea", "Leite em pó", "Leite condensado", "Confete"]
  },
];

const listaComidas = [
  {
    nome: "Fava (Pequeno)",
    descricao: " Porção(ões).",
    preco: 20.00,
    imagem: "./main/image/comidas/comidas-2.jpeg"
  },
  {
    nome: "Fava (Medio)",
    descricao: " Porção(ões).",
    preco: 28.00,
    imagem: "./main/image/comidas/comidas-7.jpeg"
  },
  {
    nome: "Fava (Grande)",
    descricao: " Porção(ões).",
    preco: 45.00,
    imagem: "./main/image/comidas/comidas-7.jpeg"
  },
  {
    nome: "Arrumadinho (Pequeno)",
    descricao: " Porção(ões).",
    preco: 20.00,
    imagem: "./main/image/comidas/comidas-6.jpeg"
  },
  {
    nome: "Arrumadinho (Medio)",
    descricao: " Porção(ões).",
    preco: 28.00,
    imagem: "./main/image/comidas/comidas-6.jpeg"
  },
  {
    nome: "Arrumadinho (Grande)",
    descricao: " Porção(ões).",
    preco: 45.00,
    imagem: "./main/image/comidas/comidas-6.jpeg"
  },
  {
    nome: "Aroz de leite com charque e queijo (Pequeno)",
    descricao: " Porção(ões).",
    preco: 20.00,
    imagem: "./main/image/comidas/comidas-10.jpeg"
  },
  {
    nome: "Aroz de leite com charque e queijo (Medio)",
    descricao: " Porção(ões).",
    preco: 38.00,
    imagem: "./main/image/comidas/comidas-10.jpeg"
  },
  {
    nome: "Rubacão (Pequeno)",
    descricao: " Porção(ões).",
    preco: 20.00,
    imagem: "./main/image/comidas/comidas-5.jpeg"
  },
  {
    nome: "Rubacão (Medio)",
    descricao: " Porção(ões).",
    preco: 38.00,
    imagem: "./main/image/comidas/comidas-5.jpeg"
  },
  {
    nome: "Tripa",
    descricao: " Porção(ões).",
    preco: 23.00,
    imagem: "./main/image/comidas/comidas-3.jpeg"
  },
  {
    nome: "Batata frita",
    descricao: " Porção(ões).",
    preco: 15.00,
    imagem: "./main/image/comidas/comidas-8.jpeg"
  },
  {
    nome: "Batata frita com calabresa",
    descricao: " Porção(ões).",
    preco: 30.00,
    imagem: "./main/image/comidas/comidas-1.jpeg"
  },
  {
    nome: "Picado com aroz 999g",
    descricao: " Porção(ões).",
    preco: 25.00,
    imagem: "./main/image/comidas/comida-2.jpg"
  },
  {
    nome: "Picado com cuscuz 999g",
    descricao: " Porção(ões).",
    preco: 25.00,
    imagem: "./main/image/comidas/comida-2.jpg"
  },
  {
    nome: "Porção de pastéis doce de carne moída (12)Unidades",
    descricao: " Porção(ões).",
    preco: 22.00,
    imagem: "./main/image/comidas/comida-2.jpg"
  },
  {
    nome: "Porção de Pastéis aperitivos (frango,charque,misto) (12) Unidades",
    descricao: " Porção(ões).",
    preco: 22.00,
    imagem: "./main/image/comidas/comidas-4.jpeg",
	opcoes: ["Frango", "Charque", "Misto"]
  },
];

const listaLanches = [
  {
    nome: "Coxinha",
    descricao: " Unidade(s)",
    preco: 7.00,
    imagem: "./main/image/lanches/misto-quente.jpg",
    ingredientes: ["Charque com queijo", "Frango", "Misto"]
  },
  {
    nome: "Pastel",
    descricao: " Unidade(s)",
    preco: 7.00,
    imagem: "./main/image/lanches/misto-quente.jpg",
    ingredientes: ["Charque com queijo", "Frango", "Misto"]
  },
  {
    nome: "Cachorro quente",
    descricao: " Unidade(s)",
    preco: 7.00,
    imagem: "./main/image/lanches/misto-quente.jpg",
    ingredientes: ["Ovo de codorna", "Vinagrete", "Salsish", "Carne moida","Frango"]
  },
  {
    nome: "Tapioca com queijo",
    descricao: " Unidade(s)",
    preco: 8.00,
    imagem: "./main/image/lanches/tapioca.jpg",
    ingredientes: ["Charque com queijo", "Frango", "Misto"]
  },
  {
    nome: "Misto quente",
    descricao: " Unidade(s)",
    preco: 8.00,
    imagem: "./main/image/lanches/tapioca.jpg",
    ingredientes: ["Charque com queijo", "Frango", "Misto"]
  }
];

const listaBebidas = [
 {
    nome: "Coca-Cola Sem Açúcar Lata 350ml",
    descricao: " Unidade(s).",
    preco: 20.00,
    imagem: "./main/image/bebidas/bebidas-1.jpg"
  },
  {
    nome: "Budweiser 330ml",
    descricao: " Unidade(s).",
    preco: 18.50,
    imagem: "./main/image/bebidas/bebidas-2.jpg"
  },
  {
    nome: "HeineKen 330ml",
    descricao: " Unidade(s).",
    preco: 18.50,
    imagem: "./main/image/bebidas/bebidas-3.png"
  },
  {
    nome: "Bebida Energética TNT 473ml",
    descricao: " Unidade(s).",
    preco: 18.50,
    imagem: "./main/image/bebidas/bebidas-4.png"
  },
  {
    nome: "Refrigerante H2OH 500ml",
    descricao: " Unidade(s).",
    preco: 18.50,
    imagem: "./main/image/bebidas/bebidas-5.jpg"
  },
  {
	nome: "Suco de laranja 300ml (Fruta)",
    descricao: " Unidade(s).",
    preco: 18.50,
    imagem: "./main/image/bebidas/bebidas-6.jpg"
  },
  {
	nome: "Suco de laranja 1L (Fruta)",
    descricao: " Unidade(s).",
    preco: 18.50,
    imagem: "./main/image/bebidas/bebidas-5.jpg"
  },
  {
	nome: "Suco de laranja 1L (Fruta)",
    descricao: " Unidade(s).",
    preco: 18.50,
    imagem: "./main/image/bebidas/bebidas-7.jpg"
  },

/// sucos com leites
  {
	nome: "Suco de Ameixa 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Ameixa 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Acerola 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Acerola 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Açai 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco:  7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Açai 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Caja 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Caja 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Caju 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Caju 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Manga 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Manga 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Maracujá 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Maracujá 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Umbú 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  },
  {
	nome: "Suco de Umbú 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg"
  }, 
];


// ======= FUNÇÕES PADRÃO PARA RENDERIZAR E GERENCIAR PEDIDOS =======

function atualizarTotalPedido() {
  let total = 0;
  document.querySelectorAll("#itens-lista li").forEach(li => {
    const match = li.textContent.match(/R\$ (\d+,\d{2})/);
    if (match) total += parseFloat(match[1].replace(',', '.'));
  });
  document.getElementById("total-pedido").textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}

function renderizarCardapio(selecao, lista, containerID, tipoNome) {
  const container = document.getElementById(containerID);
  const listaPedidos = document.getElementById("itens-lista");

  lista.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    let ingredientesHTML = "";
    if (item.ingredientes) {
      ingredientesHTML = `
        <div class="descrcao">
          <strong>Ingredientes extras:</strong><br>
          ${item.ingredientes.map(ing => `
            <label>
              <input type="checkbox" name="ingrediente-${tipoNome}-${index}" value="${ing}">
              ${ing}
            </label>
          `).join("<br>")}
        </div>
      `;
    }

    itemDiv.innerHTML = `
      <div class="imagem-item">
        <img src="${item.imagem}" alt="${item.nome}">
      </div>
      <div class="info-item">
        <div class="titulo">${item.nome}</div>
        <div class="descrcao"><span class="quantidade">1</span> ${item.descricao}</div>
        ${ingredientesHTML}
        <div class="valor-button">
          <div>
            <span class="valor">R$ <span class="preco">${item.preco.toFixed(2)}</span></span>
          </div>
          <div class="ajustes-botoess">
            <button class="btn-green btn-mais" data-index="${index}" data-tipo="${tipoNome}">+</button>
            <button class="btn-red btn-menos" data-index="${index}" data-tipo="${tipoNome}">−</button>
            <button class="btn-blue adicionar-item" data-index="${index}" data-tipo="${tipoNome}">|||</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(itemDiv);
  });

  // Controle +, - e adicionar
  document.querySelectorAll(`#${containerID} .item`).forEach((div, i) => {
    let quantidade = 1;
    const btnMais = div.querySelector(".btn-mais");
    const btnMenos = div.querySelector(".btn-menos");
    const btnAdicionar = div.querySelector(".adicionar-item");
    const quantidadeSpan = div.querySelector(".quantidade");
    const precoSpan = div.querySelector(".preco");
    const dados = lista[i];

    btnMais.addEventListener("click", () => {
      quantidade++;
      quantidadeSpan.textContent = quantidade;
      precoSpan.textContent = (dados.preco * quantidade).toFixed(2);
    });

    btnMenos.addEventListener("click", () => {
      if (quantidade > 1) {
        quantidade--;
        quantidadeSpan.textContent = quantidade;
        precoSpan.textContent = (dados.preco * quantidade).toFixed(2);
      }
    });

    btnAdicionar.addEventListener("click", () => {
      const tipo = btnAdicionar.dataset.tipo;
      const index = btnAdicionar.dataset.index;
      const item = lista[index];
      const precoFinal = (item.preco * quantidade).toFixed(2).replace('.', ',');

      let ingredientesSelecionados = [];
      div.querySelectorAll(`input[name="ingrediente-${tipo}-${index}"]:checked`).forEach(cb => {
        ingredientesSelecionados.push(cb.value);
      });

      const textoIngredientes = ingredientesSelecionados.length > 0
        ? ` + [${ingredientesSelecionados.join(", ")}]`
        : "";

      const li = document.createElement("li");
      li.innerHTML = `
        ${quantidade}x ${item.nome}${textoIngredientes} - R$ ${precoFinal}
        <button class="remover-item btn-lixeira">x</button>
      `;
      listaPedidos.appendChild(li);
      atualizarTotalPedido();

      div.querySelectorAll(`input[name="ingrediente-${tipo}-${index}"]`).forEach(cb => cb.checked = false);
      quantidade = 1;
      quantidadeSpan.textContent = "1";
      precoSpan.textContent = item.preco.toFixed(2);
    });
  });
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("remover-item")) {
    e.target.parentElement.remove();
    atualizarTotalPedido();
  }
});

// Inicializa os cardápios
document.addEventListener("DOMContentLoaded", function () {
  renderizarCardapio('acai', listaAcai, 'cardapio-acai', 'acai');
  renderizarCardapio('comidas', listaComidas, 'cardapio-comidas', 'comida');
  renderizarCardapio('lanches', listaLanches, 'cardapio-lanches', 'lanche');
  renderizarCardapio('bebidas', listaBebidas, 'cardapio-bebidas', 'bebida');
});
