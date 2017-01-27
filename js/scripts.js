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
  return price;
}

Pizza.prototype.resetForm = function() {
  $('input[name=size]').prop('checked',false);
  $('input[name=toppings]').prop('checked',false);
}

$(document).ready(function () {

  $("#pizza").css('display', 'none');

  $("input:radio[name=size]").change(function() {

    var sizeVal = $("input:radio[name=size]:checked").val();
    $("#pizza").removeClass()

    if (sizeVal === "small") {
      $("#pizza").css('display','block').addClass("small-image")
    } else if (sizeVal === "medium") {
      $("#pizza").css('display','block').addClass("medium-image")
    } else if (sizeVal === "large") {
      $("#pizza").css('display','block').addClass("large-image")
    }
  });

  $("input:checkbox[name=toppings]").change(function() {
    var toppingId =$("input:checkbox[name=toppings]:checked").val();

    if (toppingId === "broccoli") {
      $("#broccoli").removeClass("hidden")
    } else if (toppingId === "cheese") {
      $("#cheese").removeClass("hidden")
    } else if (toppingId === "olives") {
      $("#olives").removeClass("hidden")
    } else if (toppingId === "pepperoni") {
      $("#pepperoni").removeClass("hidden")
    } else if (toppingId === "peppers") {
      $("#peppers").removeClass("hidden")
    } else if (toppingId === "sausage") {
      $("#sausage").removeClass("hidden")
    } else if (toppingId === "spinach") {
      $("#spinach").removeClass("hidden")
    }
  })

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

    $(".total-price").removeClass("hidden")
    $("#total").text(pizzaOrder.totalPrice())

    pizzaOrder.resetForm();
  })
})
