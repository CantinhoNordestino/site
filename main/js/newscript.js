// ======= MAPA DE TIPOS PARA NOMES =======
const tiposNomes = {
  acompanhamento: "Acompanhamento",
  guarnicao: "Guarnição",
  complemento: "Complemento",
  extra: "Extra"
};

// ======= DADOS DE CADA SEÇÃO DO CARDÁPIO =======
const listaAcai = [
  {
    nome: "Açaí 250g",
    descricao: "Unidade(s)",
    preco: 8.00,
    imagem: "./main/image/comida-2.jpg",
    ingredientes: ["Banana", "Granola", "Amendoim triturado", "Farinha láctea", "Leite em pó", "Leite condensado", "Confete"],
    tipo: "acompanhamentos",
  },
  {
    nome: "Açaí 350g",
    descricao: "Unidade(s)",
    preco: 12.00,
    imagem: "./main/image/comida-2.jpg",
    ingredientes: ["Banana", "Granola", "Amendoim triturado", "Farinha láctea", "Leite em pó", "Leite condensado", "Confete"],
    tipo: "acompanhamentos",
  },
];

const listaComidas = [
  {
    nome: "Fava (Pequeno)",
    descricao: " Porção(ões).",
    preco: 20.00,
    imagem: "./main/image/comidas/comidas-2.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Fava (Medio)",
    descricao: " Porção(ões).",
    preco: 28.00,
    imagem: "./main/image/comidas/comidas-7.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Fava (Grande)",
    descricao: " Porção(ões).",
    preco: 45.00,
    imagem: "./main/image/comidas/comidas-7.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Arrumadinho (Pequeno)",
    descricao: " Porção(ões).",
    preco: 20.00,
    imagem: "./main/image/comidas/comidas-6.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Arrumadinho (Medio)",
    descricao: " Porção(ões).",
    preco: 28.00,
    imagem: "./main/image/comidas/comidas-6.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Arrumadinho (Grande)",
    descricao: " Porção(ões).",
    preco: 45.00,
    imagem: "./main/image/comidas/comidas-6.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Aroz de leite com charque e queijo (Pequeno)",
    descricao: " Porção(ões).",
    preco: 20.00,
    imagem: "./main/image/comidas/comidas-10.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Aroz de leite com charque e queijo (Medio)",
    descricao: " Porção(ões).",
    preco: 38.00,
    imagem: "./main/image/comidas/comidas-10.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Rubacão (Pequeno)",
    descricao: " Porção(ões).",
    preco: 20.00,
    imagem: "./main/image/comidas/comidas-5.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Rubacão (Medio)",
    descricao: " Porção(ões).",
    preco: 38.00,
    imagem: "./main/image/comidas/comidas-5.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Tripa",
    descricao: " Porção(ões).",
    preco: 23.00,
    imagem: "./main/image/comidas/comidas-3.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Batata frita",
    descricao: " Porção(ões).",
    preco: 15.00,
    imagem: "./main/image/comidas/comidas-8.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Batata frita com calabresa",
    descricao: " Porção(ões).",
    preco: 30.00,
    imagem: "./main/image/comidas/comidas-1.jpeg",
    tipo: "acompanhamento",
  },
  {
    nome: "Picado com aroz 999g",
    descricao: " Porção(ões).",
    preco: 25.00,
    imagem: "./main/image/comidas/comida-2.jpg",
    tipo: "acompanhamento",
  },
  {
    nome: "Picado com cuscuz 999g",
    descricao: " Porção(ões).",
    preco: 25.00,
    imagem: "./main/image/comidas/comida-2.jpg",
    tipo: "acompanhamento",
  },
  {
    nome: "Porção de pastéis doce de carne moída (12)Unidades",
    descricao: " Porção(ões).",
    preco: 22.00,
    imagem: "./main/image/comidas/comida-2.jpg",
    tipo: "acompanhamento",
  },
  {
    nome: "Porção de Pastéis aperitivos (frango,charque,misto) (12) Unidades",
    descricao: " Porção(ões).",
    preco: 22.00,
    imagem: "./main/image/comidas/comidas-4.jpeg",
	opcoes: ["Frango", "Charque", "Misto"],
    tipo: "acompanhamento",
  },
  {
    nome: "Delícia de macaxeira",
    descricao: " Porção(ões).",
    preco: 18.00,
    imagem: "./main/image/comidas/omidas-4.jpeg",
    tipo: "acompanhamento",
  },
];

const listaLanches = [
  {
    nome: "Coxinha",
    descricao: " Unidade(s)",
    preco: 7.00,
    imagem: "./main/image/comidas/comidas-11.jpg",
    ingredientes: ["Charque com queijo", "Frango", "Misto"],
    tipo: "Sabores",
  },
  {
    nome: "Pastel",
    descricao: " Unidade(s)",
    preco: 12.00,
    imagem: "./main/image/comidas/comidas-4.jpeg",
    ingredientes: ["Charque com queijo", "Frango", "Misto"],
    tipo: "Sabores",
  },
  {
    nome: "Cachorro quente",
    descricao: " Unidade(s)",
    preco: 7.00,
    imagem: "./main/image/comidas/comidas-13.jpg",
    ingredientes: ["Ovo de codorna", "Vinagrete", "Salsish", "Carne moida","Frango"],
    tipo: "Sabores",
  },
  {
    nome: "Tapioca com queijo",
    descricao: " Unidade(s)",
    preco: 8.00,
    imagem: "./main/image/comidas/comidas-12.jpg",
    ingredientes: ["Charque com queijo", "Frango", "Misto"],
    tipo: "Sabores",
  },
  {
    nome: "Misto quente",
    descricao: " Unidade(s)",
    preco: 8.00,
    imagem: "./main/image/lanches/tapioca.jpg",
    ingredientes: ["Charque com queijo", "Frango", "Misto"],
    tipo: "Sabores",
  }
];

const listaBebidas = [
 {
    nome: "Coca-Cola Sem Açúcar Lata 350ml",
    descricao: " Unidade(s).",
    preco: 5.00,
    imagem: "./main/image/bebidas/bebidas-1.jpg",
    tipo: "acompanhamento",
  },
  {
    nome: "Budweiser 330ml",
    descricao: " Unidade(s).",
    preco: 10.00,
    imagem: "./main/image/bebidas/bebidas-2.jpg",
    tipo: "acompanhamento",
  },
  {
    nome: "HeineKen 330ml",
    descricao: " Unidade(s).",
    preco: 10.00,
    imagem: "./main/image/bebidas/bebidas-3.png",
    tipo: "acompanhamento",
  },
  {
    nome: "Bebida Energética TNT 473ml",
    descricao: " Unidade(s).",
    preco: 15.00,
    imagem: "./main/image/bebidas/bebidas-4.png",
    tipo: "acompanhamento",
  },
  {
    nome: "Refrigerante H2OH 500ml",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-5.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de laranja 300ml (Fruta)",
    descricao: " Unidade(s).",
    preco: 9.00,
    imagem: "./main/image/bebidas/bebidas-6.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de laranja 1L (Fruta)",
    descricao: " Unidade(s).",
    preco: 20.00,
    imagem: "./main/image/bebidas/bebidas-7.jpg",
    tipo: "acompanhamento",
  },

/// sucos com leites
  {
	nome: "Suco de Ameixa 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Ameixa 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Acerola 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Acerola 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Açai 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco:  7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Açai 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Caja 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Caja 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Caju 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Caju 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Manga 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Manga 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Maracujá 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Maracujá 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Umbú 300ml sem leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 7.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
  },
  {
	nome: "Suco de Umbú 300ml com leite (Poupa)",
    descricao: " Unidade(s).",
    preco: 8.00,
    imagem: "./main/image/bebidas/bebidas-9.jpg",
    tipo: "acompanhamento",
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
          <strong>${item.tipo}:</strong><br>
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
      mostrarAnimacaoAdicionado(btnAdicionar);
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




// Animação visual "Adicionado!"
function mostrarAnimacaoAdicionado(botao) {
  const bubble = document.createElement("div");
  bubble.className = "animacao-add";
  bubble.textContent = "Adicionado!";
  bubble.style.position = "absolute";
  bubble.style.bottom = "10px";
  bubble.style.left = "50%";
  bubble.style.transform = "translateX(-50%)";
  bubble.style.backgroundColor = "#4CAF50";
  bubble.style.color = "white";
  bubble.style.padding = "8px 16px";
  bubble.style.borderRadius = "20px";
  bubble.style.opacity = "0";
  bubble.style.animation = "subirAdicionar 1s ease-out forwards";
  bubble.style.pointerEvents = "none";
  bubble.style.zIndex = "999";

  const container = botao.closest(".ajustes-botoess") || botao.parentElement;
  container.style.position = "relative";
  container.appendChild(bubble);

  setTimeout(() => bubble.remove(), 1000);
}

// Keyframe CSS inserido via JS
const styleAnim = document.createElement("style");
styleAnim.textContent = `
@keyframes subirAdicionar {
  0% { transform: translate(-50%, 0); opacity: 0; }
  30% { opacity: 1; }
  100% { transform: translate(-50%, -60px); opacity: 0; }
}
`;
document.head.appendChild(styleAnim);
