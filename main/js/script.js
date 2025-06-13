////////////////////////
// CARDÁPIO - AÇAI    //
////////////////////////
const acais = [
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
const containerAcai = document.getElementById('cardapio-acai');

acais.forEach((produto, index) => {
  const ingredientesHTML = produto.ingredientes.map(ing => `
    <label style="display:block; font-size: 14px; margin: 2px 0;">
      <input type="checkbox" class="ingrediente-checkbox" data-produto="${index}" value="${ing}"> ${ing}
    </label>
  `).join('');

  const itemHTML = `
    <div class="item" data-index="acai-${index}">
      <div class="imagem-item">
        <img src="${produto.imagem}" width="100%">
      </div>
      <div class="info-item">
        <div><span class="titulo">${produto.nome}</span></div>
        <div class="descrcao">
          <span class="quantidade">1</span> ${produto.descricao}
          <hr>
          <div class="badge-ingredientes">
            <strong>Escolha os ingredientes:</strong><br>
            ${ingredientesHTML}
          </div>
        </div>  
        <div class="valor-button">
          <div><span class="valor">R$ <span class="preco">${produto.preco.toFixed(2)}</span></span></div>
          <div class="ajustes-botoess">
            <div class="buttonss"><button class="btn-green">+</button></div>
            <div class="buttonss"><button class="btn-red">-</button></div>
            <div class="buttonss"><input type="checkbox" class="checkbox-principal"></div>
          </div>
        </div>  
      </div>
    </div>
  `;
  containerAcai.innerHTML += itemHTML;
});

// Controle de quantidade e carrinho AÇAÍ
document.querySelectorAll('#cardapio-acai .item').forEach((item, i) => {
  const btnMais = item.querySelector('.btn-green');
  const btnMenos = item.querySelector('.btn-red');
  const quantidadeSpan = item.querySelector('.quantidade');
  const precoSpan = item.querySelector('.preco');
  const checkbox = item.querySelector('.checkbox-principal');
  const itemId = `item-lista-acai-${i}`;
  let quantidade = 1;

  btnMais.addEventListener('click', () => {
    quantidade++;
    quantidadeSpan.textContent = quantidade;
    precoSpan.textContent = (acais[i].preco * quantidade).toFixed(2);
  });

  btnMenos.addEventListener('click', () => {
    if (quantidade > 1) {
      quantidade--;
      quantidadeSpan.textContent = quantidade;
      precoSpan.textContent = (acais[i].preco * quantidade).toFixed(2);
    }
  });

  checkbox.addEventListener('change', () => {
    const nomeProduto = acais[i].nome;
    const precoTotal = acais[i].preco * quantidade;

    const ingredientesSelecionados = Array.from(item.querySelectorAll('.ingrediente-checkbox:checked'))
      .map(cb => cb.value)
      .join(', ');

    if (checkbox.checked) {
      if (quantidade > 0) {
        const li = document.createElement('li');
        li.id = itemId;
        li.textContent = `${quantidade}x ${nomeProduto} - R$ ${precoTotal.toFixed(2)}${ingredientesSelecionados ? ` | Ingredientes: ${ingredientesSelecionados}` : ''}`;
        listaCompras.appendChild(li);
      } else {
        checkbox.checked = false;
        alert("Selecione pelo menos 1 unidade.");
      }
    } else {
      const li = document.getElementById(itemId);
      if (li) li.remove();
    }
  });
});
////////////////////////
// CARDÁPIO - COMIDAS //
////////////////////////
////////////////////////
////////////////////////
const comidas = [
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
];const containerComidas = document.getElementById('cardapio-comidas');
const itensLista = document.getElementById('itens-lista');

comidas.forEach((produto, index) => {
  const hasOpcoes = produto.opcoes && produto.opcoes.length > 0;

  let opcoesHTML = "";
  if (hasOpcoes) {
    opcoesHTML = `
      <div class="descrcao">
        <strong>Sabores:</strong><br>
        ${produto.opcoes.map((sabor, i) => `
          <label style="margin-right:10px;">
            <input type="radio" name="opcao-${index}" value="${sabor}">
            ${sabor}
          </label>
        `).join("")}
      </div>
    `;
  }

  const itemHTML = `
    <div class="item" data-index="comida-${index}">
      <div class="imagem-item">
        <img src="${produto.imagem}" width="100%">
      </div>
      <div class="info-item">
        <div><span class="titulo">${produto.nome}</span></div>
        <div><span class="descrcao"><span class="quantidade">1</span>${produto.descricao}</span></div>  
        ${opcoesHTML}
        <div class="valor-button">
          <div><span class="valor">R$ <span class="preco">${produto.preco.toFixed(2)}</span></span></div>
          <div class="ajustes-botoess">
            <div class="buttonss"><button class="btn-green">+</button></div>
            <div class="buttonss"><button class="btn-red">-</button></div>
            <div class="buttonss"><input type="checkbox" class="checkbox-add" data-index="${index}"></div>
          </div>
        </div>  
      </div>
    </div>
  `;
  containerComidas.innerHTML += itemHTML;
});

// Contador e manipulação de preço
document.querySelectorAll('#cardapio-comidas .item').forEach((item, i) => {
  const btnMais = item.querySelector('.btn-green');
  const btnMenos = item.querySelector('.btn-red');
  const quantidadeSpan = item.querySelector('.quantidade');
  const precoSpan = item.querySelector('.preco');
  let quantidade = 1;

  btnMais.addEventListener('click', () => {
    quantidade++;
    quantidadeSpan.textContent = quantidade;
    precoSpan.textContent = (comidas[i].preco * quantidade).toFixed(2);
  });

  btnMenos.addEventListener('click', () => {
    if (quantidade > 1) {
      quantidade--;
      quantidadeSpan.textContent = quantidade;
      precoSpan.textContent = (comidas[i].preco * quantidade).toFixed(2);
    }
  });

  const checkbox = item.querySelector('.checkbox-add');
  checkbox.addEventListener('change', () => {
    const titulo = comidas[i].nome;
    const preco = (comidas[i].preco * quantidade).toFixed(2);
    const idItem = `item-comida-${i}`;
    let saborSelecionado = "";

    if (comidas[i].opcoes && comidas[i].opcoes.length > 0) {
      const selecionado = item.querySelector(`input[name="opcao-${i}"]:checked`);
      if (selecionado) {
        saborSelecionado = ` - Sabor: ${selecionado.value}`;
      } else {
        alert("Por favor, selecione um sabor antes de adicionar à lista.");
        checkbox.checked = false;
        return;
      }
    }

    if (checkbox.checked) {
      const li = document.createElement("li");
      li.id = idItem;
      li.textContent = `${quantidade}x ${titulo}${saborSelecionado} - R$ ${preco}`;
      itensLista.appendChild(li);
    } else {
      const liExistente = document.getElementById(idItem);
      if (liExistente) liExistente.remove();
    }
  });
});




////////////////////////
////////////////////////
////////////////////////
////////////////////////
////////////////////////
////////////////////////

////////////////////////
// CARDÁPIO - BEBIDAS //
////////////////////////
const produtos = [
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
const container = document.getElementById('cardapio-bebidas');
produtos.forEach((produto, index) => {
  const itemHTML = `
    <div class="item" data-index="bebida-${index}">
      <div class="imagem-item">
        <img src="${produto.imagem}" width="100%">
      </div>
      <div class="info-item">
        <div><span class="titulo">${produto.nome}</span></div>
        <div><span class="descrcao"><span class="quantidade">1</span>${produto.descricao}</span></div>  
        <div class="valor-button">
          <div><span class="valor">R$ <span class="preco">${produto.preco.toFixed(2)}</span></span></div>
          <div class="ajustes-botoess">
            <div class="buttonss"><button class="btn-green">+</button></div>
            <div class="buttonss"><button class="btn-red">-</button></div>
            <div class="buttonss"><input type="checkbox"></div>
          </div>
        </div>  
      </div>
    </div>
  `;
  container.innerHTML += itemHTML;
});
document.querySelectorAll('#cardapio-bebidas .item').forEach((item, i) => {
  const btnMais = item.querySelector('.btn-green');
  const btnMenos = item.querySelector('.btn-red');
  const quantidadeSpan = item.querySelector('.quantidade');
  const precoSpan = item.querySelector('.preco');
  let quantidade = 1;

  btnMais.addEventListener('click', () => {
    quantidade++;
    quantidadeSpan.textContent = quantidade;
    precoSpan.textContent = (produtos[i].preco * quantidade).toFixed(2);
  });

  btnMenos.addEventListener('click', () => {
    if (quantidade > 1) {
      quantidade--;
      quantidadeSpan.textContent = quantidade;
      precoSpan.textContent = (produtos[i].preco * quantidade).toFixed(2);
    }
  });
});
////////////////////////
// CARDÁPIO - PETISCOS//
// Lanches

// Lanches com checkbox de ingredientes + botão Adicionar

// Cardápio de Lanches com ingredientes, quantidade, botão adicionar e remover
const lanches = [
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

const containerLanches = document.getElementById("cardapio-lanches");
const listaPedidos = document.getElementById("itens-lista");

// Atualiza o total dos pedidos
function atualizarTotalPedido() {
  let total = 0;
  document.querySelectorAll("#itens-lista li").forEach(li => {
    const match = li.textContent.match(/R\$ (\d+,\d{2})/);
    if (match) total += parseFloat(match[1].replace(',', '.'));
  });
  document.getElementById("total-pedido").textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Renderiza os lanches
lanches.forEach((lanche, index) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  let ingredientesHTML = "";
  if (lanche.ingredientes) {
    ingredientesHTML = `
      <div class="descrcao">
        <strong>Ingredientes extras:</strong><br>
        ${lanche.ingredientes.map(ing => `
          <label>
            <input type="checkbox" name="ingrediente-${index}" value="${ing}">
            ${ing}
          </label>
        `).join("<br>")}
      </div>
    `;
  }

  itemDiv.innerHTML = `
    <div class="imagem-item">
      <img src="${lanche.imagem}" alt="${lanche.nome}">
    </div>
    <div class="info-item">
      <div class="titulo">${lanche.nome}</div>
      <div class="descrcao"><span class="quantidade">1</span>${lanche.descricao}</div>
      ${ingredientesHTML}
      <div class="valor-button">
        <div>
          <span class="valor">R$ <span class="preco">${lanche.preco.toFixed(2)}</span>
        </div>
        <div class="ajustes-botoess">
          <button class="btn-green btn-mais" data-index="${index}">+</button>
          <button class="btn-red btn-menos" data-index="${index}">−</button>
          <button class="btn-blue adicionar-lanche" data-index="${index}">+</button>
        </div>
      </div>
    </div>
  `;

  containerLanches.appendChild(itemDiv);
});

// Controla quantidade e adiciona pedido
document.querySelectorAll("#cardapio-lanches .item").forEach((item, i) => {
  const btnMais = item.querySelector(".btn-mais");
  const btnMenos = item.querySelector(".btn-menos");
  const btnAdicionar = item.querySelector(".adicionar-lanche");
  const quantidadeSpan = item.querySelector(".quantidade");
  const precoSpan = item.querySelector(".preco");
  let quantidade = 1;

  btnMais.addEventListener("click", () => {
    quantidade++;
    quantidadeSpan.textContent = quantidade;
    precoSpan.textContent = (lanches[i].preco * quantidade).toFixed(2);
  });

  btnMenos.addEventListener("click", () => {
    if (quantidade > 1) {
      quantidade--;
      quantidadeSpan.textContent = quantidade;
      precoSpan.textContent = (lanches[i].preco * quantidade).toFixed(2);
    }
  });

  btnAdicionar.addEventListener("click", () => {
    const lanche = lanches[i];
    const precoFinal = (lanche.preco * quantidade).toFixed(2).replace('.', ',');
    const ingredientesSelecionados = [];

    item.querySelectorAll(`input[name="ingrediente-${i}"]:checked`).forEach(cb => {
      ingredientesSelecionados.push(cb.value);
    });

    const textoIngredientes = ingredientesSelecionados.length > 0
      ? ` + [${ingredientesSelecionados.join(", ")}]`
      : "";

    const li = document.createElement("li");
    li.innerHTML = `
      ${quantidade}x ${lanche.nome}${textoIngredientes} - R$ ${precoFinal}
      <button class="remover-item" style="margin-left:10px; color:red;">🗑️</button>
    `;
    listaPedidos.appendChild(li);
    atualizarTotalPedido();

    // Resetar checkboxes e quantidade
    item.querySelectorAll(`input[name="ingrediente-${i}"]`).forEach(cb => cb.checked = false);
    quantidade = 1;
    quantidadeSpan.textContent = "1";
    precoSpan.textContent = lanche.preco.toFixed(2);
  });
});

// Remoção de item
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("remover-item")) {
    e.target.parentElement.remove();
    atualizarTotalPedido();
  }
});
////////////////////////
//  LISTA DE COMPRAS  //
////////////////////////
const listaCompras = document.getElementById('itens-lista');

// Checkboxes - BEBIDAS
document.querySelectorAll('#cardapio-bebidas .item').forEach((item, i) => {
  const checkbox = item.querySelector('input[type="checkbox"]');
  const quantidadeSpan = item.querySelector('.quantidade');

  checkbox.addEventListener('change', () => {
    const quantidade = parseInt(quantidadeSpan.textContent, 10);
    const precoTotal = produtos[i].preco * quantidade;
    const nomeProduto = produtos[i].nome;
    const itemId = `item-lista-bebida-${i}`;

    if (checkbox.checked) {
      if (quantidade > 0) {
        const li = document.createElement('li');
        li.id = itemId;
        li.textContent = ` ${quantidade}x ${nomeProduto} - R$ ${precoTotal.toFixed(2)}`;
        listaCompras.appendChild(li);
      } else {
        checkbox.checked = false;
        alert("Selecione pelo menos 1 unidade.");
      }
    } else {
      const li = document.getElementById(itemId);
      if (li) li.remove();
    }
  });
});
document.getElementById('enviar-whatsapp').addEventListener('click', () => {
  const listaItens = document.querySelectorAll('#itens-lista li');
  if (listaItens.length === 0) {
    alert("A lista de compras está vazia.");
    return;
  }

  let mensagem = '*Lista de Compras:*\n';
  let total = 0;

  listaItens.forEach(item => {
    mensagem += `- ${item.textContent}\n`;

    // Extraindo valor numérico (ex: "R$ 40.00")
    const valorTexto = item.textContent.match(/R\$ ([\d,.]+)/);
    if (valorTexto) {
      total += parseFloat(valorTexto[1].replace(',', '.'));
    }
  });

  mensagem += `\n*Total:* R$ ${total.toFixed(2)}`;

  // Codifica a mensagem para URL
  const mensagemCodificada = encodeURIComponent(mensagem);


	const codificado = "NTU4MzkzODg4ODY4Ng==";
	const numero = atob(codificado);

  const urlWhatsApp = `https://wa.me/${numero}?text=${mensagemCodificada}`;

  // Abre o WhatsApp em uma nova aba
  window.open(urlWhatsApp, '_blank');
});
