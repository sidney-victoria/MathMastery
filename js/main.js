const elt = document.getElementById("calculator");
const calculator = Desmos.GraphingCalculator(elt);

calculator.setExpression({ id: "f", latex: "f(x) = ax^2" });
calculator.setExpression({ id: "a", latex: "a = 1", sliderBounds: { min: -3, max: 3 }});

// Example JS for hover glow effects or future interactivity
// Right now all CSS handles hover
console.log("MathMastery homepage loaded!");

