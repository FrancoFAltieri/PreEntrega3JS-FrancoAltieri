


/*/ let rapero = prompt("Cual es el mejor rapero?");

while (rapero != "ESC") {
  switch (rapero) {
    case "Nas":
      alert("Nas es el mejor");
      break;
    case "Jayz":
      alert("JayZ es muy bueno");
      break;
      case "Eminem":
      alert("Eminem es bueno");
      break;
    default:
      alert("Dejanos tu opinión");
      break;
  }
  rapero = prompt("Cual es el mejor rapero?");    } /*/

  let cart = [];
  let total = 0;
  
  function addToCart(producto, precio) {
    if (cart.find(item => item.producto === producto)) {
      cart.find(item => item.producto === producto).cantidad++;
    } else {
      cart.push({ producto, precio, cantidad: 1 });
    }
    updateCartUI();
    calculateTotal();
  }
  
  function removeFromCart(producto) {
    cart = cart.filter(item => item.producto !== producto);
    updateCartUI();
    calculateTotal();
  }
  
  
  function calculateTotal() {
    total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    document.getElementById('total').textContent = total;
  }

  function updateCartUI() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.producto} - Precio: $${item.precio} - Cantidad: ${item.cantidad} `;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Eliminar';
      removeButton.onclick = () => removeFromCart(item.producto);
      listItem.appendChild(removeButton);
      cartList.appendChild(listItem);
    });
  }
  
  function clearCart() {
    cart = [];
    updateCartUI();
    calculateTotal();
  }


  
