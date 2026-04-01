function appendValue(value) {
  document.getElementById("input").value += value;
}

function clearDisplay() {
  document.getElementById("input").value = "";
}

function calculate() {
  let expression = document.getElementById("input").value;

  try {
    let result = Function("return " + expression)();
    document.getElementById("input").value = result;
  } catch {
    document.getElementById("input").value = "Error";
  }
}