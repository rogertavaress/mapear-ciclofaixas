const axios = require("axios");

class Api {
  static async listarAvenidas() {
    try {
      const response = await axios.get(`http://localhost:3333/avenidas`);
      return response.data;
    } catch (error) {
      console.warn("Sem Itens na lista!");
    }
  }
}

let avenidas = Api.listarAvenidas();

var listNext = document.getElementById("next");
var listBack = document.getElementById("back");

let cardList = document.querySelector("div[class=cards-avenidas]");

listBack.onclick = () => {
  console.log("Botão Back!");
  pagina -= 1;
  renderList();
};

listNext.onclick = () => {
  console.log("Botão Next!");
  pagina += 1;
  renderList();
};

function limparList() {
  cardList.innerHTML = "";
}

function renderList() {
  for (av in avenidas) {
    var id = avenidas[av].id;
    var nome = avenidas[av].nome;
    var extensao_avenida = avenidas[av].extensao_avenida;
    var ciclofaixa = avenidas[av].ciclofaixa;
    var extensao_ciclofaixa = avenidas[av].extensao_ciclofaixa;
    var extensao_ciclofaixa_porcentagem =
      avenidas[av].extensao_ciclofaixa_porcentagem;

    criarItemAvenida(
      id,
      nome,
      extensao_avenida,
      ciclofaixa,
      extensao_ciclofaixa,
      extensao_ciclofaixa_porcentagem
    );
  }
}

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
      `A Av Agamenon possui ${extensao_avenida}km de extensão e ${extensao_ciclofaixa}km de ciclofaixa.`
    )
  );

  let cardLinkAlterar = document.createElement("button");
  cardLinkAlterar.setAttribute("type", "button");
  cardLinkAlterar.setAttribute("class", "btn btn-primary btn-sm");
  cardLinkAlterar.setAttribute("onclick", `alterar("${id}")`);
  cardLinkAlterar.appendChild(document.createTextNode("Alterar"));

  let cardLinkRemover = document.createElement("button");
  cardLinkRemover.setAttribute("type", "button");
  cardLinkRemover.setAttribute("class", "btn btn-danger btn-sm");
  cardLinkRemover.setAttribute("onclick", `remover("${id}")`);
  cardLinkRemover.appendChild(document.createTextNode("Remover"));

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardLinkAlterar);
  cardBody.appendChild(cardLinkRemover);
  card.appendChild(cardBody);
  cardList.appendChild(card);
}

renderList();
