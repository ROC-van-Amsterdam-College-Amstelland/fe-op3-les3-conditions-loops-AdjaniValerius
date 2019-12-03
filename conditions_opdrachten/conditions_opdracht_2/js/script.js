//javascript code

function checkSaldo(){
    var geldOpname = document.getElementById("geldOpname").value;

    var bankSaldo = 1000; //beginsaldo

    //bereken van geldopname
    var restTotaal = 1000 - geldOpname;

    //conditie om te checke of het wel megenlijk is
    if (restTotaal < 25){
        alert("Sorry, je hebt te wienig saldo");
    }
}