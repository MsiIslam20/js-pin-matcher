//function for generate random number
document.getElementById('pin-generate').addEventListener("click", function(){
    var fourDigitNumber= Math.floor(1000 + Math.random() * 9000);

    document.getElementById("pin-display").value = fourDigitNumber;
    let userInputShow = document.getElementById("user_input_show");
    userInputShow.value = "";
    document.getElementById("notify-match").style.display = "none";
    document.getElementById("notify-not-match").style.display = "none";
})

 //function for add number beside a number in user input.
const buttons = document.querySelectorAll(".number_btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event){
    let values = event.target.innerText;
    let userInputShow = document.getElementById("user_input_show");
    userInputShow.value += values;
  });
}


//delete a number from user input
document.querySelector(".delete").addEventListener("click", function(){
  let userInputShow = document.getElementById("user_input_show");
  userInputShow.value = userInputShow.value.slice(0, -1);
});
// All clear from user input
document.querySelector(".clear").addEventListener("click", function(){
  let userInputShow = document.getElementById("user_input_show");
  userInputShow.value = "";
});

//check is pin number match
document.querySelector(".submit-btn").addEventListener("click", function() {
  const randomNumberOutput = document.getElementById("pin-display");
  let userInputShow = document.getElementById("user_input_show");
    if (randomNumberOutput.value === userInputShow.value && userInputShow.value.length !== 0) {
        document.getElementById("notify-match").style.display = "block";
        document.getElementById("notify-not-match").style.display = "none";
    } else if(userInputShow.value.length === 0){
      alert("Please Provide number before submitting")
    } else {
      document.getElementById("notify-match").style.display = "none";
      document.getElementById("notify-not-match").style.display = "block";
    }
      // try counter message
  const tryMessage = document.querySelector(".try_message");
  let tryCount = document.getElementById("try_count");
  tryCountMinus = parseInt(tryCount.innerText) - 1;
  tryCount.innerText = tryCountMinus;
  if (randomNumberOutput.value === userInputShow.value) {
    tryCount.innerText = 3;
  } else if (parseInt(tryCount.innerText) <= 0) {
    tryCount.innerText = 0;
    tryMessage.style.color = "red";
    document.querySelector(".submit-btn").classList.add("disable_btn");
    document.querySelector(".submit-btn").disabled = true;
  }
});





