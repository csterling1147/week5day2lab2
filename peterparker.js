function cartChecker() {
  let name;
  let item;
  name = prompt("what is your name/");
  item = prompt("What would you like to buy?");
  cartHeader.innerHTML = `Hi ${name}, there is something in your cart!`;
  cartParagraph.innerHTML = `You still have an item in your cart. Your ${item} is ready to purchase!`;
}

cartButton.onclick = cartChecker;