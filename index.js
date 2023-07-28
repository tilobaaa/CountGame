var decrease = document.querySelector(".decrease");
var resetNumber = document.querySelector(".reset");
var increase = document.querySelector(".increase");
var number = document.querySelector(".number-change");



function numberLaw(number){
  if (number < 0){
    number.innnerHTML.style.color="red";
  }else {
    number.innnerHTML.style.color="green";
  }
}


increase.addEventListener("click", function(){
  number.textContent++;
  // numberLaw(number);
})

decrease.addEventListener("click", function(){
  number.textContent--;
  // numberLaw(number);
})


resetNumber.addEventListener("click", function(){
  number.textContent = 0;
})
