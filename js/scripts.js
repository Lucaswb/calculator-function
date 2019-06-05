var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#operator1").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output1").text(result);
  });
  $("form#operator2").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add3").val());
    var number2 = parseInt($("#add4").val());
    var result = subtract(number1, number2);
    $("#output2").text(result);
  });
  $("form#operator3").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add5").val());
    var number2 = parseInt($("#add6").val());
    var result = multiply(number1, number2);
    $("#output3").text(result);
  });
  $("form#operator4").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add7").val());
    var number2 = parseInt($("#add8").val());
    var result = divide(number1, number2);
    $("#output4").text(result);
  });
});
  // $("form#operation").submit(function(event) {
  //   event.preventDefault();
  //   var number1 = parseInt($("#operation1").val());
  //   var number2 = parseInt($("#operation2").val());
  //   var result = subtract(number1, number2);
  //   $("#output").text(result);
