


document.getElementById('pin-generate').addEventListener("click", function(){
    var fourDigitNumber= Math.floor(1000 + Math.random() * 9000);

    document.getElementById("pin-display").value = fourDigitNumber;
})
