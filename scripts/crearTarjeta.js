export const createCards = (propiedad) => {
  const card = /*html */ `

      <div class="card">
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
          <h3 class="card-full-location">${propiedad.address}</h3>
          <div class="card-p-owner">
            <img src="https://thispersondoesnotexist.com/image" class="card-p-owner-photo" alt="">
            <span class="card-p-owner-name">${propiedad.owner}</span>
            <span class="card-p-date">${propiedad.ago}</span>
          </div>
          <div class="card-p-features">
            <strong class="card-p-sq">${propiedad.area}</strong>
            <span>3</span>
            <span>4</span>
            <span>2</span>
          </div>
        </div>
      </div>

    `;
  return card;
};
