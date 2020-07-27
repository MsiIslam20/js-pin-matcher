


document.getElementById('pin').addEventListener("click", function(){
    var fourdigitnumber= Math.floor(1000 + Math.random() * 9000);

    document.getElementById("pinOut").value = fourdigitnumber;
})
