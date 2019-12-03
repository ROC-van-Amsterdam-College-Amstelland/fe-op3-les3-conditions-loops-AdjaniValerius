//javascript code

function vermedigvuldigen() {

    var number1= parseInt(prompt ("myNumber1"));
    var number2= parseInt(prompt ("myNumber2"));
    var som = number1 + number2;

    if(som > 50) {
        groter();
    } else {
        kleiner();
    }
        document.getElementById("antwoord").innerHTML= (number1 + number2)

}


function kleiner() {
    document.getElementById("resultaat").style.fontSize = "50px";
    document.getElementById("resultaat").style.border = "1px solid green";
    document.getElementById("resultaat").style.width = "400px";
    document.getElementById("resultaat").style.backgroundColor = "white";
}

function groter() {
    document.getElementById("resultaat").style.fontSize = "50px";
    document.getElementById("resultaat").style.border = "1px solid green";
    document.getElementById("resultaat").style.width = "400px";
    document.getElementById("resultaat").style.backgroundColor = "white";

}


function delen() {

    var number1= parseInt(prompt ("myNumber1"));
    var number2= parseInt(prompt ("myNumber2"));
    var som = number1 + number2;

    if(som > 50) {
        groter();
    } else {
        kleiner();
    }
        document.getElementById("antwoord").innerHTML= (number1 + number2)

}


function kleiner() {
    document.getElementById("resultaat").style.fontSize = "50px";
    document.getElementById("resultaat").style.border = "1px solid green";
    document.getElementById("resultaat").style.width = "400px";
    document.getElementById("resultaat").style.backgroundColor = "white";
 
}

function groter() {
    document.getElementById("resultaat").style.fontSize = "50px";
    document.getElementById("resultaat").style.border = "1px solid green";
    document.getElementById("resultaat").style.width = "400px";
    document.getElementById("resultaat").style.backgroundColor = "white";

}
