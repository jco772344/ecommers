let cart = [];
let total = 0;

// Filter Category
function filterMenu(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            card.classList.contains(category) 
                ? card.style.display = 'block' 
                : card.style.display = 'none';
        }
    });
}

// Shopping Cart Logic
function addToCart(name, price) {
    cart.push({ name, price });
    updateUI();
}

function updateUI() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    const countDisplay = document.getElementById('cart-count');

    cartList.innerHTML = '';
    total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = '<p style="text-align:center; color:#888;">Your cart is empty</p>';
    } else {
        cart.forEach((item, index) => {
            const div = document.createElement('div');
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.marginBottom = '10px';
            div.innerHTML = `<span>${item.name}</span> <span>Rp${item.price.toLocaleString()}</span>`;
            cartList.appendChild(div);
            total += item.price;
        });
    }

    totalDisplay.innerText = total.toLocaleString();
    countDisplay.innerText = cart.length;
}

// Registration Modal Logic
function openModal() {
    document.getElementById('regModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('regModal').style.display = 'none';
}

function handleRegister(event) {
    event.preventDefault();
    alert("Registration Successful! Welcome to Food Market.");
    closeModal();
}

// Payment Logic
function checkout() {
    if (cart.length === 0) {
        alert("Please add items to your cart first!");
        return;
    }
    document.getElementById('pay-total').innerText = total.toLocaleString();
    document.getElementById('payModal').style.display = 'block';
}

function finalPay(method) {
    alert(`Payment successful using ${method}!\nYour food is being prepared.`);
    cart = [];
    updateUI();
    document.getElementById('payModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}