let cartItems = []; // Tableau pour stocker les éléments ajoutés au panier

// Fonction pour ajouter un produit au panier
function addToCart(productId) {
  let product;
  // Sélection du produit en fonction de son ID
  if (productId === 1) {
    product = {
      id: 1,
      name: "Produit 1",
      price: 20
    };
  } else if (productId === 2) {
    product = {
      id: 2,
      name: "Produit 2",
      price: 25
    };
  } else if (productId === 3) {
    product = {
      id: 3,
      name: "Produit 3",
      price: 30
    };
  }

  // Ajout du produit au panier
  cartItems.push(product);
  showCart();
}

// Fonction pour afficher le panier
function showCart() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  // Réinitialisation du panier
  cartList.innerHTML = "";
  let total = 0;

  // Parcours des éléments dans le panier pour affichage
  cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - Prix : ${item.price}€`;
    cartList.appendChild(listItem);
    total += item.price;
  });

  // Affichage du total
  cartTotal.textContent = total;
}

// Votre JavaScript existant

// Fonction pour rediriger vers la page de paiement (checkout)
function goToCheckout() {
  // Ici, vous pouvez rediriger l'utilisateur vers la page de paiement
  // Par exemple : window.location.href = "page_de_paiement.html";
}


function goToCheckout() {
  window.location.href = "page_de_paiement.html";
}











// Fonction pour afficher le récapitulatif de la commande
function showCheckout() {
  const checkoutList = document.getElementById("checkout-items");
  const checkoutTotal = document.getElementById("checkout-total");

  // Réinitialisation du récapitulatif
  checkoutList.innerHTML = "";
  let total = 0;

  // Parcours des éléments dans le panier pour affichage
  cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - Prix : ${item.price}€`;
    checkoutList.appendChild(listItem);
    total += item.price;
  });

  // Affichage du total
  checkoutTotal.textContent = total;
}

// Fonction pour finaliser l'achat (simulé)
function completePurchase() {
  // Ici, vous pourriez effectuer des actions réelles pour finaliser l'achat
  // Par exemple : vider le panier, enregistrer la commande dans une base de données, etc.
  alert("Achat finalisé ! (Ceci est une simulation)");
  // Réinitialiser le panier après l'achat simulé
  cartItems = [];
  showCart(); // Met à jour l'affichage du panier
  // Rediriger vers la page d'accueil après l'achat
  window.location.href = "index.html";
}

// Appel de la fonction pour afficher le récapitulatif au chargement de la page
showCheckout();



