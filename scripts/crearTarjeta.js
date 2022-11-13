export const createCards = (propiedad) => {
  const card = /*html */ `

  <div class="card" >
    <div style="background-image: url(img/properties/${propiedad.img})">
      <div class="p-top">
        <span class="p-type">${propiedad.type}</span>
        <span class="p-status">${propiedad.status}</span>
        <img class="fav p-type" src="img/icon-star.svg" alt="fav">
      </div>

      <div class="p-price">
        <span class="block price">$${propiedad.price}</span>
        <span>
          <span class="vacio"></span>
          <span class="vacio"></span>
        </span>
      </div>
    </div>

    <div>
      <div>
        <span class="block p-location">${propiedad.location}</span>
        <span class="block">${propiedad.general_details}</span>
      </div>
      <div>
        <span>${propiedad.owner}</span>
      </div>
      <div class="p-info">
        <span>${propiedad.measure}</span>
        <span>${propiedad.parking}</span>
        <span>${propiedad.bathrooms}</span>
        <span>${propiedad.rooms}</span>
      </div>
    </div>
  </div>
    `;
  return card;
};
