
let btn = document.querySelectorAll("button");

// console.log(btn);
// console.log(typeof (btn));

// btn.addEventListener('click', displayExpression);

let calculatorScreen = document.getElementById("calculatorScreen");

let expressionArray = [];

let expressionString;

let resultOfExpression;

let eraser = document.querySelector('i');

btn.forEach(
  function (item) {
    item.addEventListener('click', function displayExpression() {
      // console.log("You just clicked");
      // console.log(item.innerText);

      //when you press '=' button , then at that time dont push the '=' symbol into the array , but push any other symbols that were clicked
      // if (item.innerText !== '=') {
      //   expressionArray.push(item.innerText);
      // }

      // console.log(expressionArray);

      //removes the commas and converts the expressionArray to string
      // expressionString = expressionArray.join('');

      // console.log(expressionString);

      // console.log(typeof(expressionString));

      if (item.innerText === "=") {
        // console.log("You pressed equal to button");
        resultOfExpression = eval(expressionString);

        resultOfExpression = expressionString + " = " + resultOfExpression;

        calculatorScreen.value = resultOfExpression;
      }
      else {
        //when user has not clicked the '=' button
        expressionArray.push(item.innerText);
        expressionString = expressionArray.join('');
        calculatorScreen.value = expressionString;
      }

    });
  });

eraser.addEventListener('click', function erase() {
  calculatorScreen.value = "";
  expressionString = "";
  expressionArray = [];
});