function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.toppingsPrice = function () {
  var price = 10;
  // this.toppings.forEach(topping) {
  //
  // }
  return price;
}



$(document).ready(function () {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();


    var pizzaOrder = new Pizza(toppingsPriceAmount, "small")

    var toppingsPriceAmount = pizzaOrder.toppingsPrice()
    
    // $("input:checkbox[name=toppings]:checked").each(function(){
    //   var toppingSelected = $(this).val();
    //   this.toppings.push(toppingsSelected);
    //
    // });

    $("#total").text(pizzaOrder.toppingsPrice())
  })
})
