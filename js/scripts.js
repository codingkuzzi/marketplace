$(document).ready(function() {
  $("form#market").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    var delivery = $("#delivery").val();
    var item = $("input:radio[name=item]:checked").val();

    if (item == "sweater"){
      var cost = 15.99;
    } else {
      var cost = 19.99;
    }

    var result = "Hello, " + name + ".You purchased " + item + " for the price of " + cost + ". You chose " + delivery + " delivery to " + address + ".Click Buy! to complete your order.";
    $("#output").text(result);
  });
});
