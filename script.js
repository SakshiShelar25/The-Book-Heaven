// Get existing cart from browser
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add books to cart
const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const book = {
            name: button.dataset.name,
            author: button.dataset.author,
            price: Number(button.dataset.price)
        };

        cart.push(book);

        // Save cart
        localStorage.setItem("cart", JSON.stringify(cart));

        button.textContent = "Added ✓";
        button.disabled = true;

        alert(book.name + " added to cart!");
    });

});

// Book Search
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const bookCards = document.querySelectorAll(".book-card");

if (searchInput && searchBtn) {

    function searchBooks() {

        const searchText = searchInput.value.toLowerCase().trim();

        bookCards.forEach(function(card) {

            const bookName = card.querySelector("h3").textContent.toLowerCase();
            const author = card.querySelector("p").textContent.toLowerCase();

            if (bookName.includes(searchText) || author.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });
    }

    searchBtn.addEventListener("click", searchBooks);

    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchBooks();
        }
    });
}

// Category Filter
const filterButtons = document.querySelectorAll(".filter-btn");

if (filterButtons.length > 0) {

    filterButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const selectedCategory = button.dataset.filter;

            filterButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            bookCards.forEach(function(card) {

                const category = card.dataset.category;

                if (selectedCategory === "All" ||
                    category === selectedCategory) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });

}

// Contact Form
const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been submitted successfully.");

        contactForm.reset();

    });

}

/* =========================
   RESPONSIVE DESIGN
   ========================= */

@media (max-width: 768px) {

    /* Navigation */
    .navbar {
        flex-direction: column;
        gap: 15px;
        padding: 20px;
    }

    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    /* Hero */
    .hero {
        padding: 70px 20px;
        text-align: center;
    }

    .hero h1 {
        font-size: 40px;
    }

    .hero p {
        font-size: 16px;
    }

    /* Categories */
    .categories-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }

    /* Books */
    .books-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    /* Why Choose Us */
    .features-container {
        grid-template-columns: repeat(2, 1fr);
    }

    /* About */
    .about-container {
        flex-direction: column;
        text-align: center;
    }

    /* Contact */
    .contact-container {
        flex-direction: column;
    }

    /* Cart */
    .cart-container {
        flex-direction: column;
    }

    /* Checkout */
    .checkout-container {
        flex-direction: column;
    }

}


/* Small Mobile Screens */

@media (max-width: 480px) {

    .nav-links {
        flex-direction: column;
        gap: 10px;
    }

    .hero h1 {
        font-size: 32px;
    }

    .categories-container {
        grid-template-columns: 1fr;
    }

    .books-container {
        grid-template-columns: 1fr;
    }

    .features-container {
        grid-template-columns: 1fr;
    }

    .book-image {
        height: 260px;
    }

    .book-image img {
        width: 150px;
        height: 215px;
    }

    .contact-form input,
    .contact-form textarea {
        width: 100%;
    }

}