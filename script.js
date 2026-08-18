// Interaktiv SVG-side
const svgMenu = document.querySelector(".svg-menu");

if (svgMenu) {
  const firstDetails = document.querySelector("#details-first");
  const secondDetails = document.querySelector("#details-second");
  const thirdDetails = document.querySelector("#details-third");

  function updateSvgPosition() {
    const openDetails = document.querySelector(".accordion-item[open]");

    if (openDetails) {
      svgMenu.dataset.position = openDetails.dataset.position;
    } else {
      delete svgMenu.dataset.position;
    }
  }

  firstDetails.addEventListener("toggle", updateSvgPosition);
  secondDetails.addEventListener("toggle", updateSvgPosition);
  thirdDetails.addEventListener("toggle", updateSvgPosition);
}

// Opsamlingsside
const opsamlingBordkort = document.querySelector(".opsamling-bordkort");

if (opsamlingBordkort) {
  const nameOutput = document.querySelector(".bordkort-name");
  const forholdOutput = document.querySelector(".forhold");
  const joyOne = document.querySelector(".joy-one");
  const joyTwo = document.querySelector(".joy-two");
  const joyThree = document.querySelector(".joy-three");
  const kendetegnOutput = document.querySelector(".bordkort-kendetegn");

  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const forhold = params.get("forhold");
  const joys = params.getAll("joys");
  const kendetegn = params.get("kendetegn");

  nameOutput.textContent = name;
  forholdOutput.textContent = forhold;

  joyOne.textContent = joys[0] || "Ikke noget specielt";
  joyTwo.textContent = joys[1] || "";
  joyThree.textContent = joys[2] || "";

  kendetegnOutput.innerHTML = `<img src="${kendetegn}.svg" alt="${kendetegn}">`;
}
