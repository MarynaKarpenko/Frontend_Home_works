let url = "https://dummyjson.com/products"

function fetchData() {
  const url = "https://dummyjson.com/products";
  return fetch(url).then(res => res.json());
}

function rating(n) {
  const roundedN = Math.round(n);
  const stars = document.createElement("div");
  stars.className = "stars";

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");
    star.className = i < roundedN ? "fa fa-star active" : "fa fa-star";
    stars.appendChild(star);
  }

  return stars;
}

function renderCards(data) {
  const div_root = document.querySelector('#root');
  const div_container = document.createElement('div');
  div_container.className = 'container';
  div_root.append(div_container);

  data.products.forEach(el => {
    const div_card = document.createElement('div');
    const image = document.createElement('img');
    const h2_name = document.createElement('h2');
    const p_price = document.createElement('p');
    const div_icons = document.createElement('div');

    div_card.className = 'card_wrapper';
    image.className = 'card_image';
    image.src = 'https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png';
    h2_name.innerText = `Name: ${el.title}`;
    p_price.innerText = `Price: ${el.price}`;

    div_icons.className = 'div_icons';
    div_icons.appendChild(rating(el.rating));

    div_container.append(div_card);
    div_card.append(image, h2_name, p_price, div_icons);
  });
}

fetchData()
  .then(data => renderCards(data))
  .catch(error => console.error(error));