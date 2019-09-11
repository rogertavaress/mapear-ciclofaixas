//
// INICIAR ALGUNS DADOS IMPORTANTES PARA O PROJETO
//

// Lista onde ficam as avenidas
let cardList = document.querySelector("div[class=cards-avenidas]");
let cardAux = document.querySelector("div[class=box-card-aux]");

//
// Botões
//

let btCadastrar = document.getElementById("btCadastrar");

//
// REQUISIÇÕES
//

function listarAvenidas(nome) {
  axios("http://localhost:3333/avenidas", {
    method: "GET",
    params: { nome }
  })
    .then(response => {
      limparLista();
      renderLista(response.data);
    })
    .catch(error => {
      console.warn(error);
    });
}

function cadastrarAvenida(nome, extensao_avenida, extensao_ciclofaixa) {
  axios("http://localhost:3333/avenidas", {
    method: "POST",
    data: { nome, extensao_avenida, extensao_ciclofaixa }
  })
    .then(response => {
      alert(response.data.message);
      limparLista();
      listarAvenidas();
    })
    .catch(error => {
      console.warn(error);
    });
}

function alterarAvenida(id, nome, extensao_avenida, extensao_ciclofaixa) {
  axios("http://localhost:3333/alterar", {
    method: "PUT",
    data: { id, nome, extensao_avenida, extensao_ciclofaixa }
  })
    .then(response => {
      alert(response.data.message);
      limparLista();
      listarAvenidas();
    })
    .catch(error => {
      console.warn(error);
    });
}

function removerAvenida(id) {
  axios("http://localhost:3333/remover", {
    method: "DELETE",
    data: { id }
  })
    .then(response => {
      alert(response.data.message);
      limparLista();
      listarAvenidas();
    })
    .catch(error => {
      console.warn(error);
    });
}

//removerAvenida(13);

//alterarAvenida(9, "Av Boa Vista", 20, 2);

//cadastrarAvenidas("Rua Arapoti", 1, 0.5);

//listarAvenidas();

//
// CRIAR CADA CARD SEPARADO
//

function criarItemAvenida(
  id,
  nome,
  extensao_avenida,
  ciclofaixa,
  extensao_ciclofaixa,
  extensao_ciclofaixa_porcentagem
) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.appendChild(document.createTextNode(nome));

  let cardSubtitle = document.createElement("h6");
  cardSubtitle.setAttribute("class", "card-subtitle mb-2 text-muted");
  cardSubtitle.appendChild(
    document.createTextNode(
      `Possui ${extensao_ciclofaixa_porcentagem * 100}% de ciclofaixa`
    )
  );

  let cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");
  cardText.appendChild(
    document.createTextNode(
      `A ${nome} possui ${extensao_avenida}km de extensão e ${extensao_ciclofaixa}km de ciclofaixa.`
    )
  );

  let cardLinkAlterar = document.createElement("button");
  cardLinkAlterar.setAttribute("class", "btn btn-primary btn-sm");
  cardLinkAlterar.setAttribute("value", id);
  cardLinkAlterar.onclick = () =>
    btAlterar(
      cardLinkAlterar.getAttribute("value"),
      nome,
      extensao_avenida,
      extensao_ciclofaixa
    );
  cardLinkAlterar.appendChild(document.createTextNode("Alterar"));

  let cardLinkRemover = document.createElement("button");
  cardLinkRemover.setAttribute("class", "btn btn-danger btn-sm btRemover");
  cardLinkRemover.setAttribute("value", id);
  cardLinkRemover.onclick = () =>
    btRemover(cardLinkRemover.getAttribute("value"));
  cardLinkRemover.appendChild(document.createTextNode("Remover"));

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardLinkAlterar);
  cardBody.appendChild(cardLinkRemover);
  card.appendChild(cardBody);
  return card;
}

//
// PREENCHER E LIMPAR A LISTA COMPLETAMENTE
//

function limparLista() {
  cardList.innerHTML = "";
}

function renderLista(avenidas) {
  for (avenida in avenidas) {
    const {
      id,
      nome,
      extensao_avenida,
      ciclofaixa,
      extensao_ciclofaixa,
      extensao_ciclofaixa_porcentagem
    } = avenidas[avenida];

    cardList.appendChild(
      criarItemAvenida(
        id,
        nome,
        extensao_avenida,
        ciclofaixa,
        extensao_ciclofaixa,
        extensao_ciclofaixa_porcentagem
      )
    );
  }
}

//
// Funções dos botões de cada card
//
function btRemover(id) {
  removerAvenida(id);
  listarAvenidas();
}

function btAlterar(id, nome, extensao_avenida, extensao_ciclofaixa) {
  removerTelaAux();
  montarTelaAux("alterar", id, nome, extensao_avenida, extensao_ciclofaixa);
}

btCadastrar.onclick = () => {
  removerTelaAux();
  montarTelaAux("cadastrar");
};

//
// Buscar por Avenidas
//
let btBuscar = document.getElementById("btBuscar");
btBuscar.onclick = () => {
  let input = document.getElementById("inputBuscar");
  listarAvenidas(input.value);
  input.value = "";
};

let btMostrarTodas = document.getElementById("btMostrarTodas");
btMostrarTodas.onclick = () => {
  listarAvenidas();
};

//
// Tela auxiliar
//

function montarTelaAux(tipo, id, nome, extensao_avenida, extensao_ciclofaixa) {
  let br = document.createElement("br");

  let boxcardaux = document.createElement("div");
  boxcardaux.setAttribute("class", "box-card-aux");

  let cardaux = document.createElement("div");
  cardaux.setAttribute("class", "card card-aux");

  let cardbody = document.createElement("div");
  cardbody.setAttribute("class", "card-body");

  let cardtitle = document.createElement("h2");
  cardtitle.setAttribute("class", "card-title");
  let titulo;
  switch (tipo) {
    case "alterar":
      titulo = "Alterar uma Avenida";
      break;
    case "cadastrar":
      titulo = "Cadastrar uma Avenida";
      break;
    default:
      titulo = "Tela Aux";
      break;
  }

  cardtitle.appendChild(document.createTextNode(titulo));

  //----

  let cardinputnome = document.createElement("div");
  cardinputnome.setAttribute("class", "card-input");

  let nomeauxlabel = document.createElement("label");
  nomeauxlabel.setAttribute("for", "nome-aux");
  nomeauxlabel.appendChild(document.createTextNode("Nome:"));

  let nomeauxinput = document.createElement("input");
  nomeauxinput.setAttribute("name", "nome-aux");
  nomeauxinput.setAttribute("id", "nome-aux");
  nomeauxinput.setAttribute("type", "text");
  switch (tipo) {
    case "alterar":
      nomeauxinput.value = nome;
      break;
    default:
      nomeauxinput.value = "";
      break;
  }

  cardinputnome.appendChild(nomeauxlabel);
  cardinputnome.appendChild(nomeauxinput);

  //----

  let cardinputea = document.createElement("div");
  cardinputea.setAttribute("class", "card-input");

  let eaauxlabel = document.createElement("label");
  eaauxlabel.setAttribute("for", "extensao-av-aux");
  eaauxlabel.appendChild(document.createTextNode("Extensão da Avenida:"));

  let eaauxinput = document.createElement("input");
  eaauxinput.setAttribute("name", "extensao-av-aux");
  eaauxinput.setAttribute("id", "extensao-av-aux");
  eaauxinput.setAttribute("type", "text");
  switch (tipo) {
    case "alterar":
      eaauxinput.value = extensao_avenida;
      break;
    default:
      eaauxinput.value = "";
      break;
  }

  cardinputea.appendChild(eaauxlabel);
  cardinputea.appendChild(eaauxinput);
  //----

  let cardinputec = document.createElement("div");
  cardinputec.setAttribute("class", "card-input");

  let ecauxlabel = document.createElement("label");
  ecauxlabel.setAttribute("for", "extensao-ac-aux");
  ecauxlabel.appendChild(document.createTextNode("Extensão da Ciclofaixa:"));

  let ecauxinput = document.createElement("input");
  ecauxinput.setAttribute("name", "extensao-ac-aux");
  ecauxinput.setAttribute("id", "extensao-ac-aux");
  ecauxinput.setAttribute("type", "text");
  switch (tipo) {
    case "alterar":
      ecauxinput.value = extensao_ciclofaixa;
      break;
    default:
      ecauxinput.value = "";
      break;
  }

  cardinputec.appendChild(ecauxlabel);
  cardinputec.appendChild(ecauxinput);

  //----

  let btConfirmarAux = document.createElement("button");
  btConfirmarAux.setAttribute("class", "btn btn-success btn-sm");
  btConfirmarAux.appendChild(document.createTextNode("Confirmar"));
  btConfirmarAux.onclick = () => {
    switch (tipo) {
      case "alterar":
        alterar(id);
        break;
      case "cadastrar":
        cadastrar();
        break;
      default:
        break;
    }
    removerTelaAux();
  };

  cardbody.appendChild(cardtitle);
  cardbody.appendChild(cardinputnome);
  cardbody.appendChild(cardinputea);
  cardbody.appendChild(cardinputec);
  cardbody.appendChild(btConfirmarAux);
  cardaux.appendChild(cardbody);
  boxcardaux.appendChild(cardaux);
  cardAux.appendChild(boxcardaux);
}

function removerTelaAux() {
  cardAux.innerHTML = "";
}

//
// Montar tela Alterar
//

function alterar(id) {
  let nome = document.getElementById("nome-aux");
  let ea = document.getElementById("extensao-av-aux");
  let ec = document.getElementById("extensao-ac-aux");

  alterarAvenida(id, nome.value, ea.value, ec.value);
}

//
// Montar tela Cadastrar
//

function cadastrar() {
  let nome = document.getElementById("nome-aux");
  let ea = document.getElementById("extensao-av-aux");
  let ec = document.getElementById("extensao-ac-aux");

  cadastrarAvenida(nome.value, ea.value, ec.value);
}

//
// Funções que precisão ser executadas ao abrir a pagina
//

//Lista todas as avenidas
listarAvenidas();
