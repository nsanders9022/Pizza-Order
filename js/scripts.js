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
    priceForSize += 2;
  } else if (this.size === "large") {
    priceForSize += 4;
  }
  return priceForSize;
}

//Combines the price of the toppings and size with the base pizza price
Pizza.prototype.totalPrice = function() {
  if (this.sizePrice()) {
    var price = 10 + this.toppingsPrice() + this.sizePrice() + ".00";
    return price;
  }
  else {
    return alert("Please select a size")
  }
}

//Resets the form values to unchecked when the form is submitted
Pizza.prototype.resetForm = function() {
  $('input[name=size]').prop('checked',false);
  $('input[name=toppings]').prop('checked',false);
}



$(document).ready(function () {

 //Displays a pizza image with a different class depending on the size chosen
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

  //Displays the topping that are selected
  // $("input:checkbox[name=toppings]").change(function() {
  //   var toppingVal =$("input:checkbox[name=toppings]:checked").val();
  //
  //   if (toppingVal === "broccoli") {
  //     $("#broccoli").removeClass("hidden")
  //   } else if (toppingVal === "cheese") {
  //     $("#cheese").removeClass("hidden")
  //   } else if (toppingVal === "olives") {
  //     $("#olives").removeClass("hidden")
  //   } else if (toppingVal === "pepperoni") {
  //     $("#pepperoni").removeClass("hidden")
  //   } else if (toppingVal === "peppers") {
  //     $("#peppers").removeClass("hidden")
  //   } else if (toppingVal === "sausage") {
  //     $("#sausage").removeClass("hidden")
  //   } else if (toppingVal === "spinach") {
  //     $("#spinach").removeClass("hidden")
  //   }
  // })


  //Displays the topping that are selected
  $("input:checkbox[name=toppings]").change(function() {
    var toppingVal =$("input:checkbox[name=toppings]:checked").val();

    if (toppingVal === "broccoli") {
      $(".topping-images").append("<img src='img/broccoli.jpg'/>");
    } else if (toppingVal === "cheese") {
      $(".topping-images").append("<img src='img/cheese.png'/>");
    } else if (toppingVal === "olives") {
      $(".topping-images").append("<img src='img/olives.jpg'>");
    } else if (toppingVal === "pepperoni") {
      $(".topping-images").append("<img src='img/pepperoni.jpg'>");
    } else if (toppingVal === "peppers") {
      $(".topping-images").append("<img src='img/peppers.jpg'>");
    } else if (toppingVal === "sausage") {
      $(".topping-images").append("<img src='img/sausage.jpg'>");
    } else if (toppingVal === "spinach") {
      $(".topping-images").append("<img src='img/spinach.jpg'>");
    }
  })





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
      pizzaOrder.toppings.push(toppingSelected);
    });

    //Shows the price output
    $(".total-price").removeClass("hidden")
    $("#total").text(pizzaOrder.totalPrice())

    // Calls the form reset function
    pizzaOrder.resetForm();
  })
})
