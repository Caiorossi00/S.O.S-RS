const instituicoes = [
  {
    foto: "./assets/mf.jpg",
    categoria: "Alimentos e Itens Básicos",
    nome: "MF Ajuda",
    responsavel: "MF Fit Center",
    sinopse:
      "Precisamos de doações de alimentos, roupas de cama, roupas, calçados, toalhas, brinquedos ou doações em dinheiro por meio do pix, os itens podem ser entregues no endereço listado abaixo ou entre em contato para que busquemos os itens no seu endereço",
    telefone: "(53) 984272083",
    endereco: "Júlio de Castilhos, 1800.",
    pix: "53 984781336",
  },

  {
    foto: "./assets/ideia.jpg",
    categoria: "Leite e produtos de higiene",
    nome: "Troca Solidária",
    responsavel: "Equipe Ideia Gráfica",
    sinopse:
      "Estamos recolhendo doações de caixas de leite e produtos de higiene, você pode entregar os itens no endereço listado abaixo",
    telefone: "(53) 984322639",
    endereco: "Júlio de Castilhos, 65",
    pix: "53 981300010",
  },

  {
    foto: "./assets/ctg.jpg",
    categoria: "Itens básicos",
    nome: "Todos por todos ",
    responsavel: "CTG Rincão da Fronteira",
    sinopse:
      "Estamos recolhendo doações de kits de higiene pessoal, kits de itens para bebês, roupas, colchões, travesseiros e outros itens básicos, busque informações no instagram @ctgrincao",
    telefone: "",
    endereco:
      "CTG Lanceiros da Querência, Rotary Club Leste, CTG Rincão da fronteira, Farmácia Herbafarma, Águia monitoramento, Arena BH e muito mais",
    pix: "93.854.644.0001-28",
    instagram: "instagram.com/ctgrincao/",
  },
  {
    foto: "./assets/carros.jpg",
    categoria: "Água",
    nome: "Arrecadação Jaguar Car",
    responsavel: "Grupo Jaguar Car Antigos",
    sinopse:
      "Precisamos urgentemente de doações de água potável, entre em contato com o número listado abaixo",
    telefone: "53 984216403",
    endereco: "XV de novembro, 1625 e JR Veículos",
    pix: "",
  },
  {
    foto: "./assets/gigi.jpg",
    categoria: "Itens Básicos",
    nome: "Campanha de Arrecadação",
    responsavel: "Tabacaria 27 Gigi",
    sinopse:
      "Precisamos de doações de água, alimentos não perecíveis, cobertores, roupa de cama e toalhas, produtos de higiene pessoal e material de limpeza, as doações serão recebidas no endereço  abaixo das 08 às 16h",
    telefone: "53 999612013",
    endereco: "Rua 27 de Janeiro, 1093",
    pix: "",
  },
];

function criarCards() {
  const containerCards = document.querySelector(".container-cards");

  instituicoes.forEach((instituicao) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = instituicao.foto;
    img.alt = "Foto da organização";

    const categoria = document.createElement("h3");
    categoria.textContent = instituicao.categoria;

    const nome = document.createElement("h2");
    nome.textContent = instituicao.nome;

    const responsavel = document.createElement("p");
    responsavel.classList.add("responsible");
    responsavel.textContent = "Responsável: " + instituicao.responsavel;

    const sinopse = document.createElement("p");
    sinopse.classList.add("synopsis");
    sinopse.textContent = instituicao.sinopse;

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    const telefoneItem = document.createElement("div");
    telefoneItem.classList.add("contact-item");

    if (instituicao.telefone !== "") {
      const imgTelefone = document.createElement("img");
      imgTelefone.src =
        "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png";
      imgTelefone.alt = "Ícone de telefone";
      telefoneItem.appendChild(imgTelefone);
    }

    const telefone = document.createElement("p");
    telefone.textContent = instituicao.telefone;
    telefoneItem.appendChild(telefone);

    const enderecoItem = document.createElement("div");
    enderecoItem.classList.add("contact-item");
    const imgEndereco = document.createElement("img");
    imgEndereco.src = "https://cdn-icons-png.flaticon.com/512/0/619.png";
    imgEndereco.alt = "Ícone de localização";
    const endereco = document.createElement("p");
    endereco.textContent = instituicao.endereco;
    enderecoItem.appendChild(imgEndereco);
    enderecoItem.appendChild(endereco);

    const pixItem = document.createElement("div");
    pixItem.classList.add("contact-item");

    if (instituicao.pix !== "") {
      const imgpix = document.createElement("img");
      imgpix.src =
        "https://user-images.githubusercontent.com/741969/99538099-3b7a5d00-298b-11eb-9f4f-c3d0cd4a5280.png";
      imgpix.alt = "Ícone de Pix";
      pixItem.appendChild(imgpix);
    }

    const pix = document.createElement("p");
    pix.textContent = instituicao.pix;
    pixItem.appendChild(pix);

    contactInfo.appendChild(telefoneItem);
    contactInfo.appendChild(enderecoItem);
    contactInfo.appendChild(pixItem);

    const button = document.createElement("button");
    button.classList.add("contact-button");

    if (instituicao.telefone !== "") {
      button.textContent = "Ajudar";
      button.addEventListener("click", function () {
        enviarMensagemWhatsapp(instituicao.telefone);
      });
    } else {
      const anchor = document.createElement("a");
      anchor.href = `https://${instituicao.instagram}`;
      anchor.target = "_blank";
      anchor.textContent = "Ajudar";
      button.appendChild(anchor);
    }

    card.appendChild(img);
    card.appendChild(categoria);
    card.appendChild(nome);
    card.appendChild(responsavel);
    card.appendChild(sinopse);
    card.appendChild(contactInfo);
    card.appendChild(button);

    containerCards.appendChild(card);
  });
}

criarCards();

function enviarMensagemWhatsapp(telefone) {
  const numeroLimpo = telefone.replace(/\D/g, "");

  const linkWhatsapp = `https://api.whatsapp.com/send?phone=55${numeroLimpo}`;

  window.open(linkWhatsapp);
}

document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const nome = formData.get("nome");
    const nomeProjeto = formData.get("nomeProjeto");
    const papelAcao = formData.get("papelAcao");
    const sedeFisica = formData.get("sedeFisica");

    const mensagemWhatsApp = `Nome: ${nome}%0ANome do Projeto: ${nomeProjeto}%0AQual papel a ação vai cumprir: ${papelAcao}%0ASede Física: ${sedeFisica}`;
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=5553984158694&text=${mensagemWhatsApp}`;
    window.open(urlWhatsApp, "_blank");
  });
