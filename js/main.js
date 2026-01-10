const elt = document.getElementById("calculator");
const calculator = Desmos.GraphingCalculator(elt);

calculator.setExpression({ id: "f", latex: "f(x) = ax^2" });
calculator.setExpression({ id: "a", latex: "a = 1", sliderBounds: { min: -3, max: 3 }});
