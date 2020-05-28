// JavaScript File
const hst = 0.13;
const l = 6.00;
const xl = 10.00;
const t1 = 1.00;
const t2 = 1.75;
const t3 = 2.50;
const t4 = 3.35;

var pizzaSize;
var numToppings;
var tax;
var cost;
var totalPrice;
var sizeCost;
var toppingCost;
var invalidEntry = false;

function calculate () {
  pizzaSize = document.getElementById("pizzaSize").value;
  numToppings = document.getElementById("numToppings").value;
  if (pizzaSize == "L")
    sizeCost = l;
  else if (pizzaSize == "XL")
    sizeCost = xl;
  else {
    invalidEntry = true;
    alert ("Invalid pizza size");
  }
  if (numToppings == 1) {
    toppingCost = t1;
    cost = sizeCost + toppingCost;
  }
  else if (numToppings == 2) {
    toppingCost = t2;
    cost = sizeCost + toppingCost;
  }
  else if (numToppings == 3){
    toppingCost = t3;
    cost = sizeCost + toppingCost;
  }
  else if (numToppings == 4){
    toppingCost = t4;
    cost = sizeCost + toppingCost;
  }
  else if (numToppings == 0){
    toppingCost = 0;
    cost = sizeCost + toppingCost;
  }
  else {
    invalidEntry = true;
    alert ("Invalid topping amount");
  }
  tax = cost * hst;
  totalPrice = cost + tax;
  if (invalidEntry == false)
    alert ("Pizza Size: $"+sizeCost+"\nToppings: $"+toppingCost+"\nSub-Total: $"+cost+"\nTax: $"+tax+"\nTotal Price: $"+totalPrice);
}