
window.onload = () => {

    let learners = ["ARMAND Djedou Arnaud", "BINON Frederic", "BROODCOORENS Maxime", "MANSORI Magid Jbari", "MONDT Alexandre", "PICARD Pierre-Louis", "RENDA Elisa", "RIPET Julien", "AFKIR Younes", "BAQUET Mathilde", "BIALAIS Emilie", "BOTTA Maxime", "CCOYLLO Jussi", "GAINA Corneliu", "GOLDESTEIN Andres", "MASSART Francois", "MEURANT Matthieu", "MOL Estelle", "RODRIGUEZ Amalia"];

    let tableauPlaces = {
        places: [
            document.getElementById("php"),
            document.getElementById("html"),
            document.getElementById("css"),
            document.getElementById("js"),
        ],
    };

    let table = [[], [], [], []];
    let php = table[0];
    let html = table[1];
    let css = table[2];
    let js = table[3];
    let buttonRdm = document.getElementById("buttonRdm");
    let noMore=true;

    function randomize(){
        for (i=0; i<3; i++){
            for (j=0; j<5; j++){
                let random=Math.floor(Math.random()*learners.length);
                table[i][j]=learners[random];
                learners.splice(random,1);
            };
        };
        putNames();
        noMore=false;
    }

    buttonRdm.addEventListener("click", function(e){
        e.preventDefault();
        if (noMore==true){
            randomize();
        };
    });

    function putNames(){
        for (m=0; m<3; m++){
            for (y=0; y<5; y++){
                tableauPlaces.places[m].innerText += table[m][y] + "\n";
            };
        };
        for (y=0; y<4; y++){
            tableauPlaces.places[3].innerText += learners[y] + "\n";
        };
    };

};
