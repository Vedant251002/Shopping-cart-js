const cart = [
  {
    name: "Mouse",
    price: 300,
  },
  {
    name: "Keyboard",
    price: 500,
  },
  {
    name: "Desktop",
    price: 5000,
  },
  {
    name: "Laptop",
    price: 50000,
  },
  {
    name: "CPU",
    price: 40000,
  },
];
let cartItems = [];
function addToCart() {
    event.preventDefault();
    let selection = document.getElementById("cartItems");
    let quantityItem = document.getElementById("itemQuantity");
    let cartShow = document.getElementById("cartShow");
    let itemObj = cart.filter((item) => {
        if (selection.value == item.name) {
            item.quantity = quantityItem.value;
            item.total = item.price * quantityItem.value;
            return item;
        }
    });
    let found = false;
    cartItems.map((item) => {
        if (item.name == itemObj[0].name) {
            found = true;
      item.quantity = quantityItem.value;
    }
});
if (!found) {
    cartItems.push(...itemObj);
}
  let data = cartItems.map((item) => {
    return `
    Item Name : ${item.name}
    Item Price : ${item.price}
    Item Quantity : ${item.quantity}
    Item Total PRice : ${item.total}\n`;
  });
  cartShow.value = data ;
}

