const instituicoes = [
  {
    foto: "./assets/alimentos.webp",
    categoria: "Alimentos",
    nome: "Lorem ipsum",
    responsavel: "Caio Rossi",
    sinopse:
      "Precisamos urgentemente de doações de alimentos não perecíveis, água potável e produtos de higiene pessoal",
    telefone: "(51) 1234-5678",
    endereco: "Rua Lorem Ipsum, 999, Jaguarão.",
    pix: "Caio_rossi56@hotmail.com",
  },
  {
    foto: "./assets/roupas.webp",
    categoria: "Roupas",
    nome: "Lorem ipsum",
    responsavel: "Caio Rossi",
    sinopse:
      "Precisamos de doações de roupas limpas e em bom estado. Roupas de cama, roupas infantis, agasalhos, calçados e cobertores.",
    telefone: "(51) 1234-5678",
    endereco: "Rua Lorem Ipsum, 999, Jaguarão.",
    pix: "Caio_rossi56@hotmail.com",
  },
  {
    foto: "./assets/dinheiro.jpg",
    categoria: "Dinheiro",
    nome: "Lorem ipsum",
    responsavel: "Caio Rossi",
    sinopse:
      "Estamos recolhendo doações em dinheiro ou pix que serão convertidas em compras de itens necessários para ajudar a população",
    telefone: "(51) 1234-5678",
    endereco: "Rua Lorem Ipsum, 999, Jaguarão.",
    pix: "Caio_rossi56@hotmail.com",
  },
  {
    foto: "./assets/animais.jpg",
    categoria: "Animais",
    nome: "Lorem ipsum",
    responsavel: "Caio Rossi",
    sinopse:
      "Estamos recolhendo doações em dinheiro ou pix que serão convertidas em compras de itens necessários para ajudar a população",
    telefone: "(51) 1234-5678",
    endereco: "Rua Lorem Ipsum, 999, Jaguarão.",
    pix: "Caio_rossi56@hotmail.com",
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
    const imgTelefone = document.createElement("img");
    imgTelefone.src =
      "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png";
    imgTelefone.alt = "Ícone de telefone";
    const telefone = document.createElement("p");
    telefone.textContent = instituicao.telefone;
    telefoneItem.appendChild(imgTelefone);
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
    const imgpix = document.createElement("img");
    imgpix.src =
      "https://user-images.githubusercontent.com/741969/99538099-3b7a5d00-298b-11eb-9f4f-c3d0cd4a5280.png";
    imgpix.alt = "Ícone de Pix";
    const pix = document.createElement("p");
    pix.textContent = instituicao.pix;
    pixItem.appendChild(imgpix);
    pixItem.appendChild(pix);

    contactInfo.appendChild(telefoneItem);
    contactInfo.appendChild(enderecoItem);
    contactInfo.appendChild(pixItem);

    const button = document.createElement("button");
    button.classList.add("contact-button");
    button.textContent = "Ajudar";

    button.addEventListener("click", function () {
      enviarMensagemWhatsapp(instituicao.telefone);
    });

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
