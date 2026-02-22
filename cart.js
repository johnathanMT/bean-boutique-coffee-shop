// Initialize cart from localStorage or create empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(productName, price, image) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            image: image,
            quantity: 1
        });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count in header if element exists
    updateCartCount();

    // Show confirmation
    // alert(`${productName} added to cart!`);

    Swal.fire({
        icon: 'success',
        title: 'Added to Cart!',
        text: `${productName} has been added to your cart.`,
        showConfirmButton: false,
        timer: 2000
    });
}


// Function to update cart count display
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

// Function to remove item from cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems(); // Re-render if on cart page
}

// Function to update item quantity
function updateQuantity(productName, change) {
    const item = cart.find(item => item.name === productName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productName);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            renderCartItems();
        }
    }
}

// Function to calculate total price
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to render cart items on cart.html
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.querySelector('.cart-count');

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        } else {
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <div class="cart-item-image">
                        <img src="images/${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>Price: $${item.price.toFixed(2)}</p>
                        <div class="quantity-controls">
                            <button onclick="updateQuantity('${item.name}', -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity('${item.name}', 1)">+</button>
                        </div>
                        <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
                        <button onclick="removeFromCart('${item.name}')" class="remove-btn">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemElement);
            });
        }
    }

    if (cartTotalElement) {
        cartTotalElement.textContent = calculateTotal().toFixed(2);
    }

    if (cartCountElement) {
        cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

// Function to initialize cart on page load
// function initializeCart() {
//     updateCartCount();
//     renderCartItems();

//     // Add event listeners to all "Add to Cart" buttons
//     document.querySelectorAll('.card button').forEach(button => {
//         button.addEventListener('click', function () {
//             const card = this.closest('.card');
//             const productName = card.querySelector('h1').textContent;
//             const priceText = card.querySelector('.price').textContent;
//             const price = parseFloat(priceText.replace('$', ''));
//             const image = card.querySelector('img').src.split('/').pop();

//             addToCart(productName, price, image);
//         });
//     });
// }


// Function to initialize cart on page load
function initializeCart() {
    updateCartCount();
    renderCartItems();

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.card button').forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.card');
            const productName = card.querySelector('h1').textContent;

            // 🟡 အောက်က Code အဟောင်းကို ဖျက်ပြီး...
            // const priceText = card.querySelector('.price').textContent;
            // const price = parseFloat(priceText.replace('$', ''));

            // 🟢 ဒီ Code အသစ်နဲ့ အစားထိုးလိုက်ပါ (Highlight Area)
            // -------------------------------------------------------

            // ၁. .price (Coffee) သို့မဟုတ် .b-price (Brewing) ရှိမရှိ နှစ်ခုလုံး ရှာပါ
            const priceElement = card.querySelector('.price') || card.querySelector('.b-price');

            // ၂. $ လက္ခဏာနဲ့ , (ကော်မာ) တွေကို ဖယ်ရှားပြီး ဂဏန်းပြောင်းပါ
            const priceText = priceElement.textContent.replace(/[$,]/g, '');
            const price = parseFloat(priceText);

            // -------------------------------------------------------

            const image = card.querySelector('img').src.split('/').pop();

            addToCart(productName, price, image);
        });
    });
}




// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCart);

function filterProducts() {
    const searchInput = document.getElementById('product-search');
    const filter = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll('.card, .brewing-card');

    const animationTextElement = document.getElementById('search-animation-text');

    if (filter.length > 0) {
        animationTextElement.textContent = `Searching for: "${filter}"`;
    } else {
        animationTextElement.textContent = '';
    }

    // If (h2) change to h2 if h3 > h3) -
    cards.forEach(card => {
        const h2 = card.querySelector('h1');
        if (h2) {
            const productName = h2.textContent.toLowerCase();

            if (productName.includes(filter)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Model Popup 

document.addEventListener('DOMContentLoaded', function () {
    // Check if user has seen the modal before using localStorage
    if (!localStorage.getItem('modalShown')) {
        // Show modal after a short delay (e.g., 2 seconds)
        setTimeout(function () {
            const modal = document.getElementById('welcomeModal');
            modal.style.display = 'block';

            // Set flag in localStorage to indicate modal has been shown
            localStorage.setItem('modalShown', 'true');
        }, 2000);
    }

    // Close modal when clicking the X button
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            const modal = document.getElementById('welcomeModal');
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function (event) {
        const modal = document.getElementById('welcomeModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    const emailForm = document.getElementById('emailSignupForm');
    if (emailForm) {
        emailForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('emailInput').value;

            // Here you would typically send the email to your server
            // For demonstration, we'll just log it and show a success message
            console.log('Email submitted:', email);

            // Display success message
            const modalContent = document.querySelector('.modal-content');
            modalContent.innerHTML = `
                <h2>Thank You!</h2>
                <p>Your 10% discount code is: <strong>WELCOME10</strong></p>
                <p>We've sent it to your email as well.</p>
                <button id="continueShopping" style="margin-top: 20px;">Continue Shopping</button>
            `;

            // Add event listener to the new button
            document.getElementById('continueShopping').addEventListener('click', function () {
                document.getElementById('welcomeModal').style.display = 'none';
            });

            // In a real implementation, you would:
            // 1. Send the email to your server
            // 2. Generate/store the discount code
            // 3. Send the code to the user's email
            // 4. Potentially set a cookie to track the user's eligibility
        });
    }
});


// Special Offer Page Subscription Handler =============
// --- Subscription Handler for Special Offers Page ---

function handleSubscription(planName) {
    // Check if SweetAlert is loaded
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: 'Join the Club!',
            text: `You are selecting the ${planName} plan. Proceed to secure payment?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#D4AF37', // Gold color
            cancelButtonColor: '#1A1110', // Dark color
            confirmButtonText: 'Yes, Subscribe!',
            cancelButtonText: 'Cancel',
            background: '#fff',
            color: '#333'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Welcome Aboard!',
                    text: 'Your subscription has been processed successfully.',
                    icon: 'success',
                    confirmButtonColor: '#D4AF37'
                });
            }
        });
    } else {
        // Fallback for browsers blocking scripts
        if (confirm(`Subscribe to ${planName} plan?`)) {
            alert("Thank you! Subscription processed.");
        }
    }
}
