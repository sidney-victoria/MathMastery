const elt = document.getElementById("calculator");
const calculator = Desmos.GraphingCalculator(elt);

calculator.setExpression({
  id: "f",
  latex: "f(x) = x^2"
});
