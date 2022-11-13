import { getProperties } from "./api.js";
import { createCards } from "./crearTarjeta.js";

document.addEventListener("DOMContentLoaded", async () => {
  const doCards = document.querySelector("#container-cards");
  const property = await getProperties();
  property.forEach((propiedad) => {
    doCards.innerHTML += createCards(propiedad);
  });
});

alert("carlos");
