function Pizza(toppings, size) {
  this.toppings = [];
  this.size = size;
}

Pizza.prototype.toppingsPrice = function() {
  var priceForToppings = 0;
  for (var i = 0; i < this.toppings.length; i++) {
    priceForToppings += 1;
  }
  return priceForToppings;
}

Pizza.prototype.sizePrice = function(size) {
  var priceForSize = 0;
  if (this.size === "medium") {
    priceForSize += 2;
  } else if (this.size === "large") {
    priceForSize += 4;
  }
  return priceForSize;
}


Pizza.prototype.totalPrice = function() {
  var price = 10 + this.toppingsPrice() + this.sizePrice();

  return price
}

$(document).ready(function () {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var sizeSelected = $("input:radio[name=size]:checked").val();

    var pizzaOrder = new Pizza(toppingsPriceAmount, sizeSelected);

    pizzaOrder.sizePrice(sizeSelected)

    var toppingsPriceAmount = pizzaOrder.toppingsPrice()

    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingSelected = $(this).val();
      pizzaOrder.toppings.push(toppingSelected);

    });

    $("#total").text(pizzaOrder.totalPrice())
  })
})
