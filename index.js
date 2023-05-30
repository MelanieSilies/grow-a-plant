let anzahlGegossen = 0;

function giessen() {
    if(anzahlGegossen < 13){
    anzahlGegossen = anzahlGegossen + 1;
    document.getElementById("bereits-gegossen").innerHTML = anzahlGegossen;
    } else {
        alert("Du hast deine Pflanze schon geerntet. Du hast gewonnen.");
    }

    if(anzahlGegossen == 3){
        document.getElementById("kartenbild").setAttribute("src", "bilder/PlantGrowGame/3.png");
        document.getElementById("benoetigtes-giessen").innerHTML = 6;
    }

    if(anzahlGegossen == 6){
        document.getElementById("kartenbild").setAttribute("src", "bilder/PlantGrowGame/4.png");
        document.getElementById("benoetigtes-giessen").innerHTML = 9;
    }

    if(anzahlGegossen == 9){
        document.getElementById("kartenbild").setAttribute("src", "bilder/PlantGrowGame/5.png");
        document.getElementById("benoetigtes-giessen").innerHTML = 12;
    }

    if(anzahlGegossen == 12){
        document.getElementById("kartenbild").setAttribute("src", "bilder/PlantGrowGame/6.png");
        document.getElementById("benoetigtes-giessen").innerHTML = 13;
        document.getElementById("giessen-button").innerHTML = "Ernten"
    }

    if(anzahlGegossen == 13){
        document.getElementById("kartenbild").setAttribute("src", "bilder/PlantGrowGame/7.png");
    }
};