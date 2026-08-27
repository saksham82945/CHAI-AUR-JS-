const storeManager = {
    products: [],

    init: function () {
        this.renderGrid();
    },

    addProduct: function () {
        const name     = document.getElementById("prod-name").value.trim();
        const category = document.getElementById("prod-category").value;
        const price    = parseFloat(document.getElementById("prod-price").value);
        const desc     = document.getElementById("prod-desc").value.trim();
        const imgUrl   = document.getElementById("prod-img").value.trim();

        if (!name) {
            alert("Please enter a product name.");
            return;
        }

        const product = {
            id: Date.now(),
            name,
            category,
            price: isNaN(price) ? 0 : price,
            desc,
            imgUrl,
        };

        this.products.push(product);
        this.renderGrid();
        this.clearForm();
    },

    removeProduct: function (id) {
        this.products = this.products.filter(p => p.id !== id);
        this.renderGrid();
    },

    getCategoryEmoji: function (category) {
        const map = {
            Electronics: "💻",
            Clothing:    "👕",
            Books:       "📚",
            Food:        "🍔",
            Sports:      "⚽",
            Other:       "📦",
        };
        return map[category] || "📦";
    },

    renderGrid: function () {
        const grid = document.getElementById("product-grid");
        grid.innerHTML = "";

        if (this.products.length === 0) {
            grid.innerHTML = `<p class="empty-msg">No products yet. Add one above!</p>`;
            return;
        }

        this.products.forEach(p => {
            const card = document.createElement("div");
            card.className = "product-card";

            const imgHTML = p.imgUrl
                ? `<img src="${p.imgUrl}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                   <div class="product-emoji" style="display:none">${this.getCategoryEmoji(p.category)}</div>`
                : `<div class="product-emoji">${this.getCategoryEmoji(p.category)}</div>`;

            card.innerHTML = `
                ${imgHTML}
                <span class="product-category">${p.category}</span>
                <span class="product-name">${p.name}</span>
                <span class="product-price">₹${p.price.toLocaleString("en-IN")}</span>
                ${p.desc ? `<p class="product-desc">${p.desc}</p>` : ""}
                <button class="remove-btn" onclick="storeManager.removeProduct(${p.id})">🗑 Remove</button>
            `;

            grid.appendChild(card);
        });
    },

    clearForm: function () {
        document.getElementById("prod-name").value    = "";
        document.getElementById("prod-price").value   = "";
        document.getElementById("prod-desc").value    = "";
        document.getElementById("prod-img").value     = "";
        document.getElementById("prod-category").value = "Electronics";
    },
};

storeManager.init();