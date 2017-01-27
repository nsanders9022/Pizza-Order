//BACKEND LOGIC
function Pizza(toppings, size) {
  this.toppings = [];
  this.size = size;
}

//Adds the additional cost of $1 per topping
Pizza.prototype.toppingsPrice = function() {
  var priceForToppings = 0;
  for (var i = 0; i < this.toppings.length; i++) {
    priceForToppings += 1;
  }
  return priceForToppings;
}

//Adds additional cost for medium and large pizzas
Pizza.prototype.sizePrice = function(size) {
  var priceForSize = 0;
  if (this.size === "medium") {
    priceForSize += 3;
  } else if (this.size === "large") {
    priceForSize += 5;
  } else {
    priceForSize += 1;
  }
  return priceForSize;
}

//Combines the price of the toppings and size with the base pizza price
Pizza.prototype.totalPrice = function() {
  if (this.size) {
    var price = "Total: $" + (9 + this.toppingsPrice() + this.sizePrice()) + ".00";
    return price;
  }
  else {
    alert("Please select a size")
    return "";
  }
}

//Resets the form values to unchecked when the form is submitted
Pizza.prototype.resetForm = function() {
  $('input[name=size]').prop('checked',false);
  $('input[name=toppings]').prop('checked',false);

}


//USER LOGIC
$(document).ready(function () {

 //Displays a pizza image with a different class depending on the size chosen
  $("#pizza").addClass("hidden")
  $("input:radio[name=size]").change(function() {
    var sizeVal = $("input:radio[name=size]:checked").val();
    $("#pizza").removeClass()
    if (sizeVal === "small") {
      $("#pizza").css('display','block').addClass("small-image")
      $("#selected-size").text("Small");
    } else if (sizeVal === "medium") {
      $("#pizza").css('display','block').addClass("medium-image")
      $("#selected-size").text("Medium");
    } else if (sizeVal === "large") {
      $("#pizza").css('display','block').addClass("large-image")
      $("#selected-size").text("Large");
    }
  });

  //displays the corresponding image when a checkbox item is selected
  $("#broccoli").on("click", function() {
    $("#broccoli-image").toggleClass("hidden")
  })
  $("#cheese").on("click", function() {
    $("#cheese-image").toggleClass("hidden")
  })
  $("#olives").on("click", function() {
    $("#olives-image").toggleClass("hidden")
  })
  $("#pepperoni").on("click", function() {
    $("#pepperoni-image").toggleClass("hidden")
  })
  $("#peppers").on("click", function() {
    $("#peppers-image").toggleClass("hidden")
  })
  $("#sausage").on("click", function() {
    $("#sausage-image").toggleClass("hidden")
  })
  $("#spinach").on("click", function() {
    $("#spinach-image").toggleClass("hidden")
  })


  //Code for when form is submitted
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var sizeSelected = $("input:radio[name=size]:checked").val();

    //Creates new
    var pizzaOrder = new Pizza(toppingsPriceAmount, sizeSelected);

    pizzaOrder.sizePrice(sizeSelected)

    var toppingsPriceAmount = pizzaOrder.toppingsPrice()

    //Puts all of the checked topping items into an array
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingSelected = $(this).val();
      pizzaOrder.toppings.push(" " +toppingSelected);
    });

    //Shows the price output
    $(".total-price").removeClass("hidden")
    $("#total").text(pizzaOrder.totalPrice())
    $("#toppings-list").text(pizzaOrder.toppings)
    $("#size-list").text(pizzaOrder.size)

    // Calls the form reset function and clears all of the images
    pizzaOrder.resetForm();
    $(".topping-picture").addClass("hidden")
    $("#pizza").addClass("hidden")
    $("#selected-size").text("");
  })
})
