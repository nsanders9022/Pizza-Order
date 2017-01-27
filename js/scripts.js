function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}





$(document).ready(function () {
  ("form#pizza-order").submit(function(event) {
    event.preventDefault();
  })
})
