


//function for generate random number
document.getElementById('pin-generate').addEventListener("click", function(){
    var fourDigitNumber= Math.floor(1000 + Math.random() * 9000);

    document.getElementById("pin-display").value = fourDigitNumber;
})


// select all the number button and add event Listener
const numberBtn = document.querySelectorAll(".number_btn");
numberBtn.forEach((item) => {
  item.addEventListener("click", () => {
    appendNumber(item);
  });
});

//function for add number beside a number in user input.
function appendNumber(number) {
  let userInputShow = document.querySelector(".user_input_show");
  userInputShow.value = userInputShow.value + number.innerText;
}


// All clear from user input
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  let userInputShow = document.querySelector(".user_input_show");
  userInputShow.value = "";
  disablemessage();
});

//delete a number from user input
const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", () => {
  let userInputShow = document.querySelector(".user_input_show");
  userInputShow.value = userInputShow.value.slice(0, -1);
  disablemessage();
});
