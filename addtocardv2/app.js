const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const body = document.querySelector('body');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');
const reducePriceButton = document.querySelector('.reducePrice');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

const products = [
  {
    id: 1,
    name: 'PRODUCT NAME 1',
    image: '1.jpg',
    price: 2000,
    description: 'Description of Product 1',
    link: '../linked pages/1.html',
  },
  {
    id: 2,
    name: 'PRODUCT NAME 1',
    image: '2.jpg',
    price: 1700,
    description: 'Description of Product 1',
    link: '../linked pages/2.html',
  },
  {
    id: 3,
    name: 'PRODUCT NAME 1',
    image: '3.jpg',
    price: 1300,
    description: 'Description of Product 1',
    link: '../linked pages/3.html',
  },
  {
    id: 4,
    name: 'PRODUCT NAME 1',
    image: '4.jpg',
    price: 1200,
    description: 'Description of Product 1',
    link: '../linked pages/4.html',
  },
  {
    id: 5,
    name: 'PRODUCT NAME 1',
    image: '5.jpg',
    price: 900,
    description: 'Description of Product 1',
    link: '../linked pages/5.html',
  },
  {
    id: 6,
    name: 'PRODUCT NAME 1',
    image: '6.jpg',
    price: 700,
    description: 'Description of Product 1',
    link: '../linked pages/6.html',
  },
  {
    id: 7,
    name: 'PRODUCT NAME 1',
    image: '7.jpg',
    price: 500,
    description: 'Description of Product 1',
    link: '../linked pages/7.html',
  },
  {
    id: 8,
    name: 'PRODUCT NAME 1',
    image: '8.webp',
    price: 400,
    description: 'Description of Product 1',
    link: '../linked pages/8.html',
  },
  {
    id: 9,
    name: 'PRODUCT NAME 1',
    image: '9.webp',
    price: 800,
    description: 'Description of Product 1',
    link: '../linked pages/9.html',
  },
  {
    id: 10,
    name: 'PRODUCT NAME 1',
    image: '10.webp',
    price: 1100,
    description: 'Description of Product 1',
    link: '../linked pages/10.html',
  },
  {
    id: 11,
    name: 'PRODUCT NAME 1',
    image: '11.avif',
    price: 3300,
    description: 'Description of Product 1',
    link: '../linked pages/11.html',
  },
  {
    id: 12,
    name: 'PRODUCT NAME 1',
    image: '12.webp',
    price: 200,
    description: 'Description of Product 1',
    link: '../linked pages/12.html',
  },
];

const listCards = [];

function initApp() {
  products.forEach((value, key) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('item');

    const link = document.createElement('a');
    link.href = value.link;
    link.target = '_blank';
    newDiv.appendChild(link);

    const img = document.createElement('img');
    img.src = `image/${value.image}`;
    link.appendChild(img);

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = value.name;
    newDiv.appendChild(title);

    const description = document.createElement('div');
    description.classList.add('description');
    description.innerText = value.description;
    newDiv.appendChild(description);

    const price = document.createElement('div');
    price.classList.add('price');
    price.innerText = value.price.toLocaleString();
    newDiv.appendChild(price);

    const button = document.createElement('button');
    button.innerText = 'Add To Bag';
    button.addEventListener('click', () => {
      addToCard(key);
    });
    newDiv.appendChild(button);

    list.appendChild(newDiv);
  });
}

initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}

function reducePrice() {
  listCards.forEach((value) => {
    if (value != null) {
      value.price = value.price * 0.9; // Reduce price by 10%
    }
  });
  reducePriceButton.style.display = 'none'; // Hide the "Reduce Price" button
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice += value.price;
    count += value.quantity;
    if (value != null) {
      const newDiv = document.createElement('li');
      newDiv.innerHTML = `
      <div><img src="image/${value.image}"/></div>
      <div>${value.name}</div>
      <div>${value.price.toLocaleString()}</div>
      <div>
      <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
      <div class="count">${value.quantity}</div>
      <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
      </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity === 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

reducePriceButton.addEventListener('click', reducePrice);

function redirectToWhatsAppWeb() {
  var phoneNumber = "8168430617";
  var textMessage = "Hello, I'm interested in your products. Can you provide more information?";
  var url = "https://web.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(textMessage);
  window.open(url);
}
