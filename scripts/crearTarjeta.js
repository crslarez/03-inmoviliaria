export const createCards = (propiedad) => {
  const card = /*html */ `

      <a class="card" href="casa.html?id=${propiedad.id}">
        <div class="card-img" style="background-image: url(img/properties/${propiedad.img})">
          <div class="card-top">
            <span class="card-p-type">${propiedad.type}</span>
            <span class="card-p-status">${propiedad.status}</span>
            <span class="card-p-square"></span>
          </div>
          <div class="card-botton">
            <span class="card-p-price">${propiedad.price}</span>
            <span class="card-p-black-square"></span>
            <span class="card-p-black-square"></span>
          </div>
        </div>
        <div class="card-info">
          <h4 class="card-p-location">${propiedad.location}</h4>
          <h3 class="card-full-location">${propiedad.general_details}</h3>
          <div class="card-p-owner">
            <img src="https://thispersondoesnotexist.com/image" class="card-p-owner-photo" alt="">
            <span class="card-p-owner-name">${propiedad.owner}</span>
            <span class="card-p-date">${propiedad.ago}</span>
          </div>
                <div class="property-features">
        <div class="icons">
          <img src="img/icons/Area Icon.png" class="icons">
          <span class="area">${propiedad.measure}</span>
        </div>
        <div class="icons">
          <img src="img/icons/Bedroom Icon.png" class="icons">
          <span class="rooms">${propiedad.rooms}</span>
        </div>
        <div class="icons">
          <img src="img/icons/Bathroom Icon.png" class="icons">
          <span class="baño">${propiedad.bathrooms}</span>
        </div>

        <div class="icons">
          <img src="img/icons/Garage Icon (1).png" class="icons">
          <span class="parking">${propiedad.parking}</span>
        </div>
      </div>
        </div>
      </a>

    `;
  return card;
};
