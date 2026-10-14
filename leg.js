document.querySelector("selector").addEventListener("click", myFunction);

const mySelector = document.querySelector("selector");
if (mySelector) {
  // Gør noget hvis dette element findes
}

myVar = "Noget andet tekst";
mySelector.textContent = myVar;

mySelector.addEventListener("click", myFunction);
function myFunction() {
  //Kode hvad skal ske når der er klikket
}

let myVar;

// test
// test

myVar = 5;
if (myVar === 7) {
  // Hvis det er sandt, gør noget
} else if (myVar === 5) {
  // Hvis det er falsk, gør noget andet
} else {
  // Hvis ingen af de overstående er sande, gør dette
}
