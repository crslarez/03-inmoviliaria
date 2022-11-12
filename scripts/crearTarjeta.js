export const createCards = (propiedad) => {
  const card = /*html */ `
  <div class="card">
        <span class="nose">${propiedad.type}</span>
        <span class="nose">${propiedad.status}</span>
        <span class="nose">${propiedad.price}</span>
        <span class="nose">${propiedad.location}</span>
        <span class="nose">${propiedad.addres}</span>
    </div>
    `;
  return card;
};
