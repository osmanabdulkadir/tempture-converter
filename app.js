let fahrenheit = document.getElementById("ferenhight")

let celuis = document.getElementById("celuis");

let kelvin = document.getElementById("Kelvin");

fahrenheit.addEventListener("keypress", function () {
    let fer = fahrenheit.value;

    celuis.value = (fer - 30) / 2;
    
    kelvin.value = (fer - 32 ) * 5 / 9;

});

kelvin.addEventListener("keypress", function () {
    let kel = kelvin.value;

    celuis.value = kel - 273.15;
    
    fahrenheit.value = (kel - 273.15) * 9/5 + 32;

});

celuis.addEventListener("keypress", function () {

    let cel = celuis.value;
    
    fahrenheit.value = (cel * 9/5) + 32;
    
    kelvin.value = (cel += 273.15);

});



