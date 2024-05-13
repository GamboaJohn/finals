let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Cappuccino',
        image: 'Cappuccino.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'Cinnamon',
        image: 'Cinnamon.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'Espresso',
        image: 'Espresso.jpg',
        price: 220000
    },
    {
        id: 4,
        name: 'Vanilla Latte',
        image: 'Vanilla Latte.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'Pizza',
        image: 'pizza.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'Burger',
        image: 'burger.jpg',
        price: 120000
    },
    {
        id: 6,
        name: 'Bread Stick',
        image: 'breadstrick.jpg',
        price: 120000
    },
    {
        id: 6,
        name: 'Sandwich',
        image: 'sandwich.jpg',
        price: 120000
    },
    {
        id: 6,
        name: 'Choco Fudge',
        image: 'choco fudge.jpg',
        price: 120000
    },
    {
        id: 6,
        name: 'Red velvet',
        image: 'rec velvet.jpg',
        price: 120000
    },
    {
        id: 6,
        name: 'Brownie',
        image: 'brownie.jpg',
        price: 120000
    },
    {
        id: 6,
        name: 'Cheese cake',
        image: 'cheese cake.jpg',
        price: 120000
    }

];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    });
}


initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
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
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


// Update the checkout button and move the total label
let checkoutButton = document.querySelector('.checkoutButton');
checkoutButton.addEventListener('click', () => {
    // Perform checkout logic here, e.g., redirect to checkout page
    console.log('Perform checkout');
});

// Move the total label above the checkout button
let checkoutSection = document.querySelector('.checkOut');
let totalLabel = document.querySelector('.total');
checkoutSection.insertBefore(totalLabel, checkoutButton);
document.addEventListener("DOMContentLoaded", function() {
    // Declare clearCartButton variable
    let clearCartButton = document.querySelector('.clearCartButton');
    console.log(clearCartButton); // Check if clearCartButton is correctly selected

    // Add event listener to clearCartButton
    clearCartButton.addEventListener('click', () => {
        console.log('Clear cart button clicked');
        listCards = []; // Clear the cart array
        console.log('Cart cleared:', listCards);
        reloadCard(); // Update the cart display
    });

    // Other code here
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

