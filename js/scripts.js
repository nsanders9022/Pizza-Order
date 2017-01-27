function Pizza(toppings, size) {
  this.toppings = [];
  this.size = size;
}

Pizza.prototype.toppingsPrice = function () {
  var price = 10;
  for (var i = 0; i < this.toppings.length; i++) {
    price += 1;    
  }

  return price;
}



$(document).ready(function () {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();


    var pizzaOrder = new Pizza(toppingsPriceAmount, "small")

    var toppingsPriceAmount = pizzaOrder.toppingsPrice()

    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingSelected = $(this).val();
      pizzaOrder.toppings.push(toppingSelected);

    });
    console.log(pizzaOrder.toppings);

    $("#total").text(pizzaOrder.toppingsPrice())
  })
})
