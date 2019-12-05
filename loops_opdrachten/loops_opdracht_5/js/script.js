//javascript code

/*
Bedenk zelf een programma waarbij je met een if, else if, else statement verschillende waardes op het scherm laat zien.

A)	De output toon op het scherm via index.html.<br>
B)  Leg via comments in je javascript uit wat je doet, een comment maak je door // voor je code te zetten

Commit en push de opdracht naar GitHub
*/

for( var teller = 1; teller <= 20; teller++){
    // console.log(teller);
    // document.getElementById("resultaat").innerHTML += "<h6>" + teller +  "</h6>";

    // console.log(teller % 2);

    if(teller % 2 == 0){
        document.getElementById("resultaat").innerHTML += "<h6>" + teller +  "</h6>";
    }
    else {
        console.log(teller);
    }
}

