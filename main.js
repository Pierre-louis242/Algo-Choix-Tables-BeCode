
window.onload = () => {

    let learners = ["AMAN Djedou Arnaud", "BINON Frederic", "BROODCOORENS Maxime", "JBARI MANSORI Magid", "MONDT Alexandre", "PICARD Pierre-Louis", "RENDA Elisa", "RIPET Julien", "AFKIR Younes", "BAQUET Mathilde", "BIALAIS Emilie", "BOTTA Maxime", "CCOYLLO Jussi", "GAINA Corneliu", "GOLDESTEIN Andres", "MASSART Francois", "MEURANT Matthieu", "MOL Estelle", "RODRIGUEZ Amalia"];

    let tableauPlaces = {
        places: [
            document.getElementById("php"),
            document.getElementById("html"),
            document.getElementById("css"),
            document.getElementById("js"),
        ],
    };

    let table = [[], [], [], []];
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
        table[3] = learners;
        putNames();
        noMore=false;
    }

    buttonRdm.addEventListener("click", function(e){
        e.preventDefault();
        if (noMore==true){
            randomize();
            message("> Votre table est bien reservee, demain 9h. Merci a vous.", "#message");
        }
        else{
          message("> Desole, nous sommes complet.", "#message");
        }
    });

    function putNames(){
        for (m=0; m<4; m++){
            let p = 0
            if(m<3){
                nomsDansTable(m, p, 5);
            }else if (m==3){
                console.log(table[m]);
                nomsDansTable(m, p, 4);
            }
        };
    };

    function nomsDansTable(m, p, leng){
        setTimeout(()=>{
            tableauPlaces.places[m].innerText += "> " + table[m][p] + "\n";
            p++
            if(p<leng){
                nomsDansTable(m, p, leng);
            }
        },1000)
    }

    function message (text, selector) {
        document.querySelector(selector).innerText = text;
        document.querySelector(selector).style.display = "block";
        setTimeout ( ()=> {
            document.querySelector(selector).innerText = "";
            document.querySelector(selector).style.display = "none";
        }, 4000)
    }

};
