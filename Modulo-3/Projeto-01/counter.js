(() => {
  const minusButton = document.querySelector(".minus-button");
  const plusButton = document.querySelector(".plus-button");
  const counterValueSpan = document.querySelector(".counter-value");

/*  function minusButtonHandler(){
    let counterCurrentValue = +counterValueSpan.innerHTML
    counterCurrentValue--
    if (counterCurrentValue >= 0){
      counterValueSpan.innerHTML = counterCurrentValue  
    }    
  }

  function plusButtonHandler(){
    let counterCurrentValue = +counterValueSpan.innerHTML
    counterCurrentValue++
    counterValueSpan.innerHTML = counterCurrentValue
  } */

  function conuterButtonHandler(operation){
    let counterCurrentValue = +counterValueSpan.innerHTML
    switch (operation) {
      case "+":
        counterCurrentValue++
        counterValueSpan.innerHTML = counterCurrentValue
        break;
      case "-":
        counterCurrentValue--
        if (counterCurrentValue >= 0){
          counterValueSpan.innerHTML = counterCurrentValue  
        }
        break;
      default:
        break;
    }
  }

  minusButton.addEventListener('click', () => conuterButtonHandler("-"))
  plusButton.addEventListener('click', () => conuterButtonHandler("+"))
})()